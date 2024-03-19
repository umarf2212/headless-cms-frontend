"use client";
import React, { useState, useEffect, useContext } from "react";
// import data from "../../utils/data";
import "./style.css";
import createNewFolder from "@/app/utils/createNewFolder";
import SharedDataContext from "../Contexts/SharedDataContext";

const FileExplorer = () => {
  const [directory, setDirectory] = useState(null);
  const { setParentFolderId } = useContext(SharedDataContext);

  useEffect(() => {
    // Fetch folder and file data from the backend
    fetch("http://localhost:8000/api/directory/root")
      .then((response) => response.json())
      .then((data) => {
        setDirectory(data);
        console.log("data", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
    // setDirectory(data);
  }, []);

  const getFolderId = (directory_id) => {
    if (directory_id !== null && directory_id !== undefined) {
      let len = directory_id.length;
      return `folder_${directory_id.slice(len - 5, len)}`;
    }
  };

  const toggleSubfolders = (e) => {
    e.stopPropagation();
    let targetSubfolders = e.target.dataset["directoryId"];
    let subfolder = document.getElementById(getFolderId(targetSubfolders));

    if (subfolder === null || subfolder === undefined) return;

    //check if class already exists
    if ([...subfolder.classList].includes("visible")) {
      subfolder.classList.remove("visible");
    } else {
      subfolder.classList.add("visible");
    }
  };

  const handleFileClick = (e) => {
    e.stopPropagation();
  };

  const handleTextInputRemove = (event) => {
    event.target.parentNode.removeChild(event.target);
  };

  const newFolder = (e) => {
    e.stopPropagation();
    // console.log("here", e);
    let parentFolderId = e.target.dataset["directoryId"];
    let parentFolder = document.getElementById(getFolderId(parentFolderId));

    let folderNameInput = document.createElement("input");
    folderNameInput.setAttribute("type", "text");
    folderNameInput.setAttribute("id", `name_${parentFolder}`);

    parentFolder.prepend(folderNameInput);

    // if input is out of focus, remove the text input
    folderNameInput.addEventListener("blur", handleTextInputRemove);

    folderNameInput.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        folderNameInput.removeEventListener("blur", handleTextInputRemove);
        handleTextInputRemove(event);
      }

      if (event.key === "Enter") {
        if (folderNameInput.value.trim() !== "") {
          let folderName = folderNameInput.value.trim();
          // console.log("here", folderName, parentFolderId);
          createNewFolder(parentFolderId, folderName)
            .then((response) => {
              if (response.status === 201) {
                console.log("Directory added successfully");
                folderNameInput.removeEventListener(
                  "blur",
                  handleTextInputRemove
                );
                handleTextInputRemove(event);
              } else {
                console.log("Unexpected HTTP status code:", response.status);
              }
            })
            .catch((error) => {
              console.error("Error during API call:", error);
            });
        }
      }
    });
  };

  const newFile = (e) => {
    e.stopPropagation();
    setParentFolderId(e.target.dataset["directoryId"]);
  };

  // Function to render a directory recursively
  const renderDirectory = (directory, level) => {
    // console.log(directory);
    return (
      <div
        key={directory._id}
        className="folder"
        onClick={toggleSubfolders}
        data-directory-id={directory._id}
      >
        {"─".repeat(level)}
        {directory.name} |
        <span onClick={newFolder} data-directory-id={directory._id}>
          + folder
        </span>{" "}
        |{" "}
        <span onClick={newFile} data-directory-id={directory._id}>
          + file
        </span>{" "}
        {directory.directories && directory.directories.length > 0 && (
          <div
            className="subfolders"
            id={getFolderId(directory._id)}
            onClick={toggleSubfolders}
          >
            {directory.directories.length > 0 &&
              directory.directories.map((subdirectory) =>
                renderDirectory(subdirectory, level + 1)
              )}
          </div>
        )}
        <div
          className="files"
          id={getFolderId(directory._id)}
          onClick={handleFileClick}
        >
          {directory.files &&
            directory.files.map((file) => (
              <div key={file._id} className="file">
                {"─".repeat(level + 1)}
                {file.name}
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <div id="fileExplorer">
      <h2>File Explorer</h2>
      {directory && renderDirectory(directory, 0)}
    </div>
  );
};

export default FileExplorer;

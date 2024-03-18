"use client";
import React, { useState, useEffect } from "react";
// import data from "../../utils/data";
import "./style.css";

const FileExplorer = () => {
  const [directory, setDirectory] = useState(null);

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

  const newFolder = (e) => {
    e.stopPropagation();
  };
  const newFile = (e) => {
    e.stopPropagation();
  };

  // Function to render a directory recursively
  const renderDirectory = (directory, level) => {
    // console.log(directory);
    return (
      <div
        key={directory._id}
        className="folder"
        data-directory-id={directory._id}
        onClick={toggleSubfolders}
      >
        {"─".repeat(level)}
        {directory.name} |<span onClick={newFolder}>+ folder</span> |{" "}
        <span onClick={newFile}>+ file</span>{" "}
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

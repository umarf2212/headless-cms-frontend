"use client";
import React, { useState, useEffect, useContext } from "react";
// import data from "../../utils/data";
import "./style.css";
import SharedDataContext from "../../Contexts/SharedDataContext";
import {
  toggleSubfolders,
  fileClick,
  newFolder,
  renderDirectory,
  newFile,
} from "./methods/";
import { Loading } from "../Loading";

const FileExplorer = () => {
  const [directory, setDirectory] = useState(null);
  const { setParentFolderId, setFileDetails } = useContext(SharedDataContext);

  useEffect(() => {
    fetch("http://localhost:8000/api/directory/root")
      .then((response) => response.json())
      .then((data) => {
        setDirectory(data);
        console.log("directory data:", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClickEventDelegation = (event) => {
    const targetElementType = event.target.dataset["targetElementType"];

    switch (targetElementType) {
      case "toggleFolder":
        toggleSubfolders(event);
        break;
      case "newFolder":
        newFolder(event);
        break;
      case "newFile":
        newFile(event, setParentFolderId);
        break;
      case "fileClick":
        fileClick(event)
          .then((result) => {
            setFileDetails(result);
          })
          .catch((error) => {
            console.error(error);
          });
    }
  };

  return (
    <div id="fileExplorer">
      <h2 className="text-3xl mb-6">File Explorer</h2>
      <div className="fileExplorerWrapper" onClick={handleClickEventDelegation}>
        {directory ? renderDirectory(directory, 0) : <Loading />}
      </div>
    </div>
  );
};

export default FileExplorer;

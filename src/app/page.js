"use client";
import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileUploadComponent from "./components/AddFile/FileUploadComponent";
import SharedDataContext from "./Contexts/SharedDataContext";
import FileViewer from "./components/FileViewer/FileViewer";

export default function Home() {
  const [parentFolderId, setParentFolderId] = useState("");
  const [responseFileData, setResponseFileData] = useState({});
  const [fileDetails, setFileDetails] = useState({});

  return (
    <SharedDataContext.Provider
      value={{
        parentFolderId,
        setParentFolderId,
        responseFileData,
        setResponseFileData,
        fileDetails,
        setFileDetails,
      }}
    >
      <div id="app">
        <div className="outerWrapper">
          <div className="fileExplorer">
            <FileExplorer />
          </div>
          <div className="fileViewer">
            <FileUploadComponent />
            <FileViewer />
          </div>
        </div>
      </div>
    </SharedDataContext.Provider>
  );
}

"use client";
import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileUploadComponent from "./components/AddFile/FileUploadComponent";
import SharedDataContext from "./Contexts/SharedDataContext";

export default function Home() {
  const [parentFolderId, setParentFolderId] = useState("");
  const [responseFileData, setResponseFileData] = useState({});

  return (
    <SharedDataContext.Provider
      value={{
        parentFolderId,
        setParentFolderId,
        responseFileData,
        setResponseFileData,
      }}
    >
      <div className="outerWrapper">
        <div className="fileExplorer">
          <FileExplorer />
        </div>
        <div className="fileUpload">
          <FileUploadComponent />
        </div>
      </div>
    </SharedDataContext.Provider>
  );
}

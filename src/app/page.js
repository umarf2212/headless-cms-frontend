"use client";
import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import FileUploadController from "./components/AddFile/FileUploadController";
import SharedDataContext from "./components/Contexts/SharedDataContext";

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
      <div>
        <FileExplorer />
        <FileUploadController />
      </div>
    </SharedDataContext.Provider>
  );
}

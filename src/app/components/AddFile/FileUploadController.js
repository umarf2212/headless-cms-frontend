import FileUpload from "./FileUpload";
import React, { useContext, useEffect, useState } from "react";
import SharedDataContext from "../Contexts/SharedDataContext";

const FileUploadController = () => {
  const { parentFolderId, setResponseFileData, responseFileData } =
    useContext(SharedDataContext);
  const [uploadButtonDisabled, setUploadButtonDisabled] = useState(true);

  useEffect(() => {
    console.log("context folder id set:", parentFolderId);
  }, [parentFolderId]);

  useEffect(() => {
    console.log("context", responseFileData);
  }, [responseFileData]);

  const uploadFileData = () => {
    fetch(`http://localhost:8000/api/file/new/${parentFolderId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: responseFileData.name,
        url: responseFileData.link,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add new file");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("New file added successfully to Database:", responseData);

        // file data is added to database, so reset it
        setResponseFileData({});
        // reset button back to disabled
        setUploadButtonDisabled(true);
      })
      .catch((error) => {
        console.error("Error adding new file to Database:", error);
      });
  };

  return (
    <div>
      <FileUpload
        setResponseFileData={setResponseFileData}
        setUploadButtonDisabled={setUploadButtonDisabled}
      />
      <button onClick={uploadFileData} disabled={uploadButtonDisabled}>
        Upload
      </button>
    </div>
  );
};
export default FileUploadController;

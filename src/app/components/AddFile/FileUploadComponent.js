import FileUpload from "./FileUpload";
import React, { useContext, useEffect, useState } from "react";
import SharedDataContext from "../../Contexts/SharedDataContext";

const FileUploadComponent = () => {
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
      <button
        onClick={uploadFileData}
        disabled={uploadButtonDisabled}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 cursor-pointer"
      >
        Upload
      </button>
    </div>
  );
};
export default FileUploadComponent;

"use client";
import React from "react";

const FileUpload = ({ setResponseFileData, setUploadButtonDisabled }) => {
  async function handleFileChange(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://file.io", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file");
      }

      const responseData = await response.json();

      console.log(
        "File uploaded successfully to File.io. Temporary URL:",
        responseData.link
      );

      setResponseFileData(responseData);
      setUploadButtonDisabled(false);
    } catch (error) {
      console.error("Error uploading file to File.io:", error);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};
export default FileUpload;

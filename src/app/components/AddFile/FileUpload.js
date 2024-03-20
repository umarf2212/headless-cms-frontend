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
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
    </div>
  );
};
export default FileUpload;

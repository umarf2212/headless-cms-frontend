async function createNewFolder(folderId, folderName) {
  try {
    // Construct the URL
    const apiUrl = `http://localhost:8000/api/directory/${folderId}/addDirectory/${encodeURIComponent(
      folderName
    )}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
}
export default createNewFolder;

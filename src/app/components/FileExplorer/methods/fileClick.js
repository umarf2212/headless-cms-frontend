export const fileClick = async (e) => {
  e.stopPropagation();
  const fileId = e.target.dataset["fileId"];

  try {
    const response = await fetch(
      `http://localhost:8000/api/file/getById/${fileId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch file details");
    }

    const fileDetails = await response.json();
    return fileDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
};

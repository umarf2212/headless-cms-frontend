const getFolderId = (directory_id) => {
  if (directory_id !== null && directory_id !== undefined) {
    let len = directory_id.length;
    return `folder_${directory_id.slice(len - 5, len)}`;
  }
};
export default getFolderId;

export const newFile = (event, setParentFolderId) => {
  event.stopPropagation();
  setParentFolderId(event.target.dataset["directoryId"]);
};

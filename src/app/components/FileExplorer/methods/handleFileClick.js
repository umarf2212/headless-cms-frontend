export const handleFileClick = (e) => {
  e.stopPropagation();
  console.log("file clicked", e.target.innerHTML);
};

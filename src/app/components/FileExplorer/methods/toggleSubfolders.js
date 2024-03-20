import getFolderId from "@/app/utils/getFolderId";

export const toggleSubfolders = (event) => {
  event.stopPropagation();
  let targetSubfolders = event.target.dataset["directoryId"];
  let subfolder = document.getElementById(getFolderId(targetSubfolders));

  if (subfolder === null || subfolder === undefined) return;

  //check if class already exists
  if ([...subfolder.classList].includes("visible")) {
    subfolder.classList.remove("visible");
  } else {
    subfolder.classList.add("visible");
  }
};

import getFolderId from "@/app/utils/getFolderId";
import createNewFolder from "@/app/utils/createNewFolder";

const handleTextInputRemove = (event) => {
  event.target.parentNode.removeChild(event.target);
};

export const newFolder = (e) => {
  e.stopPropagation();
  // console.log("here", e);

  let parentFolderId = e.target.dataset["directoryId"];
  let parentFolder = document.getElementById(getFolderId(parentFolderId));

  let folderNameInput = document.createElement("input");
  folderNameInput.setAttribute("type", "text");
  folderNameInput.setAttribute("id", `name_${parentFolder}`);
  folderNameInput.setAttribute(
    "class",
    `border border-gray-300 rounded-lg p-1`
  );

  parentFolder.prepend(folderNameInput);

  // if input is out of focus, remove the text input
  folderNameInput.addEventListener("blur", handleTextInputRemove);

  folderNameInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      event.preventDefault();
      folderNameInput.removeEventListener("blur", handleTextInputRemove);
      handleTextInputRemove(event);
    }

    if (event.key === "Enter") {
      if (folderNameInput.value.trim() !== "") {
        let folderName = folderNameInput.value.trim();
        // console.log("here", folderName, parentFolderId);
        createNewFolder(parentFolderId, folderName)
          .then((response) => {
            if (response.status === 201) {
              console.log("Directory added successfully");
              folderNameInput.removeEventListener(
                "blur",
                handleTextInputRemove
              );
              handleTextInputRemove(event);
            } else {
              console.log("Unexpected HTTP status code:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error during API call:", error);
          });
      }
    }
  });
};

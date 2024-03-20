import getFolderId from "@/app/utils/getFolderId";

export const renderDirectory = (directory, level) => {
  return (
    <div key={directory._id} className="folder">
      {"─".repeat(level)}
      <span
        data-target-element-type="toggleFolder"
        data-directory-id={directory._id}
      >
        {directory.name}
      </span>{" "}
      |
      <span
        data-directory-id={directory._id}
        className="text-green-500 hover:text-green-700"
        data-target-element-type="newFolder"
      >
        + folder
      </span>{" "}
      |{" "}
      <span
        data-directory-id={directory._id}
        className="text-green-500 hover:text-green-700 ml-2"
        data-target-element-type="newFile"
      >
        + file
      </span>{" "}
      {directory.directories && directory.directories.length > 0 && (
        <div
          className="subfolders"
          id={getFolderId(directory._id)}
          data-target-element-type="folder"
        >
          {directory.directories.length > 0 &&
            directory.directories.map((subdirectory) =>
              renderDirectory(subdirectory, level + 1)
            )}
        </div>
      )}
      <div className="files" id={getFolderId(directory._id)}>
        {directory.files &&
          directory.files.map((file) => (
            <div
              key={file._id}
              className="file"
              data-target-element-type="fileClick"
            >
              {"─".repeat(level + 1)}
              {file.name}
            </div>
          ))}
      </div>
    </div>
  );
};

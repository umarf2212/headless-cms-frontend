import { useContext } from "react";
import SharedDataContext from "../../Contexts/SharedDataContext";

const FileViewer = () => {
  const { fileDetails } = useContext(SharedDataContext);

  return (
    <div>
      <h2 className="text-3xl mb-10">File Details</h2>
      {Object.keys(fileDetails).length > 0 && (
        <>
          <ul>
            <li className="mb-2">
              <b>File Name: </b>
              <br />
              {fileDetails.name}
            </li>
            <li className="mb-2">
              <b>URL: </b>
              <br />
              {fileDetails.url}
            </li>
            <li></li>
          </ul>
        </>
      )}
    </div>
  );
};
export default FileViewer;

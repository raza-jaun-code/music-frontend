import { openUploadWidget } from "../../utils/cloudinaryUploadService";
import {cloudName, uploadPreset} from "../../utils/cloudinaryConfig";

const CloudinaryUploadComponent = ({setFileName,fileName,setTrack}) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName,
        uploadPreset,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setFileName(result.info.original_filename+ "." + result.info.format);
          setTrack(result.info.secure_url);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className={`text-center ${fileName?"hidden":"block"} px-5 py-2 w-1/6 mt-2 rounded-full bg-white font-bold`} onClick={uploadImageWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUploadComponent;

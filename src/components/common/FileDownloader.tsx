import { BsDownload } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

interface TProps {
  name: string;
}

const FileDownloader = ({ name }: TProps) => {
  return (
    <div className="file-downloader">
      <div className="file-downloader-name-wrapper">
        <IoDocumentTextOutline />
        <span className="file-downloader-name">{name}</span>
      </div>
      <BsDownload />
    </div>
  );
};

export default FileDownloader;

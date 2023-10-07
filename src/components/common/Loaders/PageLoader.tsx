// import ContentLoader from "react-content-loader";
import Skelton from "../Skeleton";

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="page-loader-first">
        <Skelton />
      </div>

      <div className="page-loader-last">
        <Skelton />
        <Skelton />
      </div>
    </div>
  );
};

export default PageLoader;

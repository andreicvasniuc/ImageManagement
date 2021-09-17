import { useState } from "react";
import resizeImage from "../api/resizeImage";
import Container from "./Container";

const Resize = ({ imageName }) => {
  const [thumbUrl, setThumbUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log('Resize', process, process.env);

  const resize = () => {
    if(!imageName) return;

    setIsLoading(true);
    resizeImage(imageName, (url) => {
      setIsLoading(false);
      setThumbUrl(url);
    });
  };

  return (
    <Container>
      <div className="col-xl-6">
        <h2 className="mb-4">You can resize your image to dimensions 64px 64px</h2>

        <button className={!isLoading ? "btn btn-success btn-lg" : "btn btn-success btn-lg disabled"} type="button" onClick={resize}>
          {isLoading ? <div className="lds-dual-ring"></div> : <span>Resize image</span>}
        </button>

      </div>
      <div className="col-xl-6">
        {thumbUrl && <img src={thumbUrl} alt="thumb" />}
      </div>
    </Container>
  );
};

export default Resize;

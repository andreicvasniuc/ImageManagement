import { useState, useRef } from "react";
import uploadImage from "../api/uploadImage";
import Container from "./Container";

const Upload = ({ onComplete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef();

  const upload = () => {
    if(!selectedFile) return;

    setIsLoading(true);
    uploadImage(selectedFile, () => {
      setIsLoading(false);
      resetFileInput();
      onComplete(selectedFile.name);
      setSelectedFile(null);
    });
  };

  const resetFileInput = () => fileInputRef.current.value = '';

  const selectFile = event => setSelectedFile(event.target.files[0]);

  console.log('Upload', process, process.env);

  return (
    <Container>
      <div className="col-xl-6">
        <h2 className="mb-4">You can upload your image with dimensions 640px 640px</h2>
        
        <input type="file" onChange={selectFile} ref={fileInputRef} />

        <button className={!!selectedFile && !isLoading ? "btn btn-primary btn-lg" : "btn btn-primary btn-lg disabled"} type="button" onClick={upload}>
          {isLoading ? <div className="lds-dual-ring"></div> : <span>Upload image</span>}
        </button>
      </div>
    </Container>
  );
};

export default Upload;

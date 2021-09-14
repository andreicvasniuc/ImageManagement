import { useState, useRef } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef();

  const upload = () => {
    if(!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile, selectedFile.name);

    setIsLoading(true);
    axios.post('https://localhost:5001/api/image/upload', formData)
    .then(response => {
      console.log('response', response);
      if(response.status === 200) {
        resetFileInput();
        setSelectedFile(null);
        if(response.data === 201) {
          toast.success(`The image ${selectedFile.name} has been uploaded successfully!`);
        }
      } else {
        console.log('response', response);
      }
    })
    .catch(error => {
      console.error(error);
      toast.error(`An error occurred: ${error}`);
    })
    .finally(() => setIsLoading(false));
  };

  const resetFileInput = () => fileInputRef.current.value = '';

  const selectFile = event => setSelectedFile(event.target.files[0]);

  return (
    <section className="call-to-action text-white text-center">
      <div className="container position-relative">
          <div className="row justify-content-center">
              <div className="col-xl-6">
                  <h2 className="mb-4">You can upload your image with dimensions 640px 640px</h2>
                  
                  <input type="file" onChange={selectFile} ref={fileInputRef} />

                  <button className={!!selectedFile && !isLoading ? "btn btn-primary btn-lg" : "btn btn-primary btn-lg disabled"} type="button" onClick={upload}>
                    {isLoading ? <div className="lds-dual-ring"></div> : <span>Upload image</span>}
                  </button>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Upload;

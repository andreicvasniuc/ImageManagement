import axios from "axios";
import { toast } from 'react-toastify';
import { getUploadImageHost } from './getApiHostName';

const uploadImage = (file, action) => {
    const formData = new FormData();
    formData.append('file', file, file.name);

    axios.post(`${getUploadImageHost()}/api/image/upload`, formData)
    .then(response => {
      console.log('response', response);
      if(response.status === 200) {
        action(response.data);
        if(response.data === 201) {
          toast.success(`The image ${file.name} has been uploaded successfully!`);
        }
      }
    })
    .catch(error => {
      console.error(error);
      action(error);
      toast.error(`An error occurred: ${error}`);
    });
};

export default uploadImage;
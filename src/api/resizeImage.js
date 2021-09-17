import axios from "axios";
import { toast } from 'react-toastify';
import { getResizeImageHost } from './getApiHostName';

const resizeImage = (imageName, action) => {
    axios.post(`${getResizeImageHost()}/api/thumb/create?imageName=${imageName}`)
    .then(response => {
      console.log('response', response);
      if(response.status === 200) {
        action(response.data);
        toast.success(`The thumb of ${imageName} has been created and uploaded successfully!`);
      }
    })
    .catch(error => {
      console.error(error);
      // action(error);
      toast.error(`An error occurred: ${error}`);
    });
};

export default resizeImage;
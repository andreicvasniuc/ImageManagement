const getApiHostName = () => process.env.REACT_APP_UPLOAD_IMAGE_HOST || 'https://localhost:5001';
export default getApiHostName;
import React, {useState} from 'react';
import Axios from "axios";
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'

function Upload({setImageData}) {
  const [uploadFile, setUploadFile] = useState("");
  const [loading, setLoading] = useState(false)
  const handleUpload = (e) => {
    setLoading(true)
    e.preventDefault();
    const formData = new FormData ();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "react-uploader");

    Axios.post(
     "https://api.cloudinary.com/v1_1/dtytpu0ez/image/upload",
     formData
   )
    .then((response) => {
      console.log(response);
      setLoading(false)
      console.log(response.data)
      setImageData({url: response.data.secure_url, width: response?.data?.width});
    })
    .catch((error) => {
      setLoading(false)
      console.log(error);
    });
  };
  return ( 
    <div className="mt-4">
      <div className='flex'> 
        <div className='w-1/3 flex items-center'> <p className='text-[#666]'>Upload file (PNG, JPEG only)</p></div>
        <div className='w-2/3'>
          <form>
            <div className='flex w-full'>
              
                <label className={`cursor-pointer w-full ${uploadFile ? 'hidden' : ''}`} htmlFor="upload-button">
                  {uploadFile ? <p className='text-[#999]'> {uploadFile?.name}  </p> : (
                    <div className='border border-1 border-[#999] flex rounded-lg p-4 w-full items-center'>
                      <CloudArrowUpIcon className="h-4 w-4 mr-4 text-[#666]" />
                      <p className='text-[#666] font-medium text-sm'> Choose File </p>
                    </div>
                  )}
                </label>
              
              
                <div className={`${uploadFile ? '' : 'hidden'} flex w-full items-center`}>
                  <input className='hidden' type="file" id='upload-button' onChange ={(event) => {setUploadFile(event.target.files[0]);}} />
                  <div className='mr-4 w-1/2 cursor-pointer border border-1 border-[#999] text-[#666] flex rounded-lg p-4 w-full items-center w-1/2'> 
                    {uploadFile?.name?.length > 20 ? uploadFile?.name?.substring(0, 20)+'...' : uploadFile?.name} 
                  </div>
                  <div className='flex justify-between w-1/2'>
                    <button className={
                      `px-4 py-4 border border-1 rounded-full ${(loading) ? 'text-white bg-[#666] border-[#ccc] cursor-wait' : 'text-white bg-primary border-primary cusor-pointer' } `
                      } onClick = {handleUpload}>
                        {(loading) ? 'Working...' : 'Upload File'}
                    </button>
                    <button className={
                      `px-4 py-4 border border-1 rounded-full 'text-[#666] border-[#ccc] text-[#666] cursor-pointer`
                      } onClick={() => setUploadFile(null)} >
                        Change File
                    </button>
                  </div>
                </div>
              
              
            </div>
          </form> 
        </div>
      </div>
    </div>
  );
} 
export default Upload;

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

import DotLoader from "react-spinners/DotLoader";

import './style.css';

const FileUpload = (props) => {
  const [file, setFile] = useState(null);

  const dropZoneParams = {
    accept: 'application/pdf',
    multiple: false,
  }
  const {getRootProps, getInputProps} = useDropzone(dropZoneParams);

  const getFile = (key) => {
    const { setTranscriptData, setUploadState } = props;
    axios.get(`/api/transcript/${key}`).then(response => {
      console.log(response.data);
      setTranscriptData(response.data);
      setUploadState('done');
    }).catch(error => {
      console.log(error);
    });
  }

  const submitFile = (event) => {
    const { setUploadState } = props;
    event.preventDefault();
    setUploadState('uploading');
    const formData = new FormData();
    formData.append('file', file[0]);
    axios.post(`/api/transcript`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response);
      const { key } = response.data;
      getFile(key);
    }).catch(error => {
      console.log(error);
    });
  }

  const handleFileUpload = (event) => {
    setFile(event.target.files);
  }

  const valid = file && file.length > 0;
  const isLoading = props.uploadState !== 'none' && props.uploadState !== 'done';

  return (
    <div className="upload">
      <form className='upload-form'>
        {isLoading ?
          <div className='upload-overlay'>
            <DotLoader
              size={150}
              color={"#FDC830"}
              loading={isLoading}
            />
          </div> : null
        }
        <div className='drop-box' {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} onChange={handleFileUpload}/>
          {valid ?
            <p className='dropzone-text'>{file[0].name}</p> :
            <p className='dropzone-text'>Drag your UW transcript here, or click to select file</p>
          }
        </div>
        <button className='submit-btn' onClick={submitFile} disabled={!valid}>Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
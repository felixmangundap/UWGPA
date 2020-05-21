import React, { Component } from 'react';

import FileUpload from '../fileUpload';
import InfoBanner from '../infoBanner';
import InfoCard from '../infoCard';

import './style.css';
import logo from '../../images/logo.svg';

class Main extends Component {
  state = {
    transcriptData: null,
    uploadState: 'none',
  };

  renderBody = () => {
    const { uploadState, transcriptData } = this.state;

    if (uploadState !== 'done') {
      return (
        <div className="body-container">
          <InfoBanner />
          <FileUpload
            setTranscriptData={this.setTranscriptData}
            setUploadState={this.setUploadState}
            uploadState={uploadState}
          />
        </div>
      )
    }

    return (
      <div className="body-container">
        <InfoBanner />
        <InfoCard
          transcriptData={transcriptData}
          setTranscriptData={this.setTranscriptData}
          setUploadState={this.setUploadState}
        />
      </div>
    )
  }

  setTranscriptData = (transcriptData) => {
    this.setState({ transcriptData });
  }
  
  setUploadState = (uploadState) => {
    this.setState({ uploadState });
  }

  render () {
    return (
      <div className='app'>
        <div className='container'>
          <div className='header'>
            <img src={logo} alt='logo' className='logo'/>
          </div>
          <div className='body'>
            {this.renderBody()}
          </div>
          <div className='footer'>
            <p>v1.0.0</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
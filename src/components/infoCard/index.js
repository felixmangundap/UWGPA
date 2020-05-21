import React from 'react';

import './style.css';

const renderRow = (key, value) => (
  <tr className='stats-row'>
    <td className='stats-key'>{key}</td>
    <td className='stats-value'>{value}</td>
  </tr>
)

const InfoCard = (props) => {
  const { transcriptData } = props;

  if (!transcriptData) return (
    <div className='stats'>
      <div className='stats-container'></div>
    </div>
  )

  const resetTranscript = () => {
    const { setTranscriptData, setUploadState } = props;
    setTranscriptData(null);
    setUploadState('none');
  }

  return (
    <div className='stats'>
      <div className='stats-container'>
        <div className='stats-header'>
          Transcript
        </div>
        <div className='stats-data'>
          <table>
            <tbody>
              {renderRow('UW ID', transcriptData.id)}
              {renderRow('Name', transcriptData.name)}
              {renderRow('Percentage', transcriptData.cumulativeGrade)}
              {renderRow('4.0 GPA', transcriptData.cumulative4GPA)}
            </tbody>
          </table>
          <p className='more-details'>More details coming soon!</p>
          <div className='reset-button-container'>
            <button className='reset-button' onClick={resetTranscript}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

// import React, { useState } from 'react';
// import axios from 'axios';

// import './UploadPicture.css';

// function UploadPicture() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileValid, setFileValid] = useState(true);
//   const [showConvertButton, setShowConvertButton] = useState(false);
//   const [predictedLetter, setPredictedLetter] = useState('');

//   const onFileChange = (event) => {
//     if (event.target.files && event.target.files.length > 0) {
//       const file = event.target.files[0];
//       if (file.type === 'image/png') {
//         setSelectedFile(file);
//         setFileValid(true);
//         setShowConvertButton(true);
//       } else {
//         setFileValid(false);
//         setShowConvertButton(false);
//       }
//     }
//   };

//   const onConvertClick = () => {
//     const formData = new FormData();
//     console.log(formData)
//     formData.append('file', selectedFile);
//     for (var pair of formData.entries()) {
//       console.log(pair[0]+ ', ' + pair[1]); 
//   }
//     axios.post('http://localhost:5000/convert', formData)
//       .then(response => {console.log(response.data)
//         setPredictedLetter(response.data.character);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="upload-container">
//       <input
//         id="fileInput"
//         type="file"
//         onChange={onFileChange}
//         className="image"
//         accept="image/png"
//       />
//       <label htmlFor="fileInput" className="upload-label">
//         <span className="upload-icon">+</span>
//         <span className="upload-instructions">Upload handwriting</span>
//       </label>
//       {selectedFile && fileValid && <div className="file-detail">{selectedFile.name}</div>}
//       {!fileValid && <div className="error-message">Please upload a PNG image.</div>}
//       {showConvertButton && <button onClick={onConvertClick}>Convert</button>}
//       {predictedLetter && <div className="predicted-letter">Predicted Letter: {predictedLetter}</div>}
//     </div>
//   );
// }

// export default UploadPicture;



import React, { useState } from 'react';
import axios from 'axios';

import './UploadPicture.css';

function UploadPicture() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileValid, setFileValid] = useState(true);
  const [showConvertButton, setShowConvertButton] = useState(false);
  const [predictedLetter, setPredictedLetter] = useState('');

  const onFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type === 'image/png') {
        setSelectedFile(file);
        setFileValid(true);
        setShowConvertButton(true);
      } else {
        setFileValid(false);
        setShowConvertButton(false);
      }
    }
  };

  const onConvertClick = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    axios.post('http://localhost:5000/convert', formData)
      .then(response => {
        setPredictedLetter(response.data.character);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="upload-container">
      <label htmlFor="fileInput" className="upload-label">
        <span className="upload-icon">+</span>
        <span className="upload-instructions">Upload handwriting</span>
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={onFileChange}
        style={{ display: 'none' }} // Hide the default file input
        accept="image/png"
      />
      {selectedFile && fileValid && <div className="file-detail">{selectedFile.name}</div>}
      {!fileValid && <div className="error-message">Please upload a PNG image.</div>}
      {showConvertButton && <button onClick={onConvertClick}>Convert</button>}
      {predictedLetter && <div className="predicted-letter">Predicted Letter: {predictedLetter}</div>}
    </div>
  );
}

export default UploadPicture;

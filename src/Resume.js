import React from 'react';
import resume from './James_Cullen_Resume.pdf';
import './NavBar.css'; // Import CSS file for styling

function Resume() {
  return (
    <div class = "pdf-view">
    <div style={{ width: '100vw', height: '100vh' }}>
      <embed
        src={resume}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
    </div>
  );
}

export default Resume;
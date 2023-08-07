import React from 'react';
import resumePath from '../assets/resume.pdf';

export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <a target="_blank" rel="noopener noreferrer" className="tab4" href={resumePath}>  Click here to view my resume.</a>
    </div>
  );
}

// export default function Resume() {
//   return (
//     <div className="resume">
//       <h1>Resume</h1>
//       <a target="_blank" rel="noopener noreferrer" className="tab4" href={process.env.PUBLIC_URL + "/assets/resume.pdf"}>  Click here to view my resume.</a>
//     </div>
//   );
// }

import React from 'react';
import logo from '../../src/themes/assets/images/pages/error.png';

function NotFound() {

  return (
    <div class="error-page">
      <img class="error-image" src={logo} alt="Error Image"></img>
      <h1 class="error-title">Page Not Found</h1>
      <p class="error-message">The requested page could not be found.</p>
      <button class="error-button" onClick={()=>console.log("Go back")}>Go Back</button>
    </div>
  );
}

export default NotFound;

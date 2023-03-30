import React, { useState } from 'react';
import Popup from './Pop';


function Appss() {
    
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function closePopup() {
    setShowPopup(false);
  }

  return (
    <div className="App">
      <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Show Popup
      </button>
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
}

export default Appss;

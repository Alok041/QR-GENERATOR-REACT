import { useState } from 'react';
import './App.css';

import QRCode from 'react-qr-code';



function App() {

  const [text, setText] = useState("");

  

  function handleChange(e){
    setText(e.target.value)
  }


  return (
    <div className="App">
      <h1 className="blinking-text">QR Code Generator</h1>

      <QRCode value={text} />

      <div className='input-here'>
                <p className="blinking-text">Enter your text here</p>
        <input type="text" value={text} onChange={(e) => {handleChange(e)}} />

      </div>
    </div>
  );
}

export default App;

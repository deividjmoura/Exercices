import React from 'react';
import {useState} from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';

function App() {
  const [link, setLink] = useState('')
  const [qrcodeLink, setQrcodeLink] = useState('')

  function handleGenerate(Link_url){
    QRCodeLink.toDataURL(Link_url,{
      width: 500,
      margin: 3,
    }, function (err, url){
    setQrcodeLink(url);
    })
  }


  function handleQrcdode(e){
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }
  return (
    <div className="App">
      <QRCode
        value={link}
      />
      <input className='input' placeholder='Digite seu link' 
      value={link}
      onChange={ (e) => handleQrcdode(e)}
        />
        <a href={qrcodeLink} download={`qrcode.png`}>Baixar QrCode</a>
    </div>
  );
}

export default App;

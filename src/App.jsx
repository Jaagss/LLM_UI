import React, { useState, useRef } from 'react';
import './index.css';
import Header from './Header';

function App() {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleMessageSubmit = () => {
    if (textInput.trim() !== '') {
      setMessages([...messages, { type: 'text', content: textInput }]);
      setTextInput('');
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleFileSubmit = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
  
      setSelectedFile(null);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="App">
      <Header />
      <div className="chat-container">
        <div className="message-area">
          <div className="chat-window">
            {messages.map((message, index) => (
              <div key={index} className={message.type === 'text' ? 'message' : 'file'}>
                {message.type === 'text' ? message.content : <a href={message.content}>Download File</a>}
              </div>
            ))}
          </div>
        </div>
        <div className="input-area">
          <div className="text-input">
            <textarea
              placeholder="Type a message..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <button onClick={handleMessageSubmit}>Send</button>
          </div>
          <div className="file-input">
            <label htmlFor="file-upload" className="file-upload-label"></label>
            <button onClick={handleUploadButtonClick}>Upload File</button>
            <input
              id="file-upload"
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import githubLogo from './assets/github-logo.svg';

function App() {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState(''); // State to store input text
  const [stringList, setStringList] = useState([]); // State to store list of strings
  const backgroundColor = "#282c34";

  // Function to handle adding string to the list
  const handleAddString = () => {
    if (inputText.trim() !== '') {
      setStringList([...stringList, inputText.trim()]);
      setInputText(''); // Clear input field after adding string
    }
  };

  return (
    <div className="App">
      <header className="App-header" data-testid="app-header" style={{ backgroundColor }}>
        <img src={logo} className="App-logo" alt="logo" />

        <div className='counter'>
          <p>
            You clicked {count} times.
          </p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>

        {/* New input field and button for adding string to list */}

        <div className='list'>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} // Update inputText state
            placeholder="Enter a value"
          />
          <button onClick={handleAddString}>
            Add to List
          </button>
          {/* Render the list of strings */}
          <ul>
            {stringList.map((str, index) => (
              <li key={index}>{str}</li>
            ))}
          </ul>
        </div>
        <a
          className="App-link"
          href="https://github.com/LuizGlomyer/pipeline-github-actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt='Github Logo' />
        </a>
      </header>
    </div>
  );
}

export default App;

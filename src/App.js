import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tab';

function App() {
  const [times, setTimes] = useState(1);

  function handleClick() {
    setTimes(times + 1);
  }
  function handleMClick() {
    setTimes(times - 1);
  }

  return (
    <div className="App">
      <span>{times}</span>

      <Tab
        apple={{ handleClick, name: 'banana' }}
        handleMClick={handleMClick}
      />
    </div>
  );
}

export default App;

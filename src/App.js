import './App.css';
import React, { useState, useEffect } from 'react';
import Tab from './components/Tab';
import Hello from './components/Hello';

function App() {
  const [times, setTimes] = useState(1);
  const [show, setShow] = useState(true);

  function handleClick() {
    setTimes(times + 1);
  }

  function handleMClick() {
    setTimes(times - 1);
  }

  function toggleShow() {
    setShow((state) => !state);
    // if (show) {
    //   setShow(false);
    // } else {
    //   setShow(true);
    // }
  }

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <div className="App">
      <span>{times}</span>
      <Tab
        apple={{ handleClick, name: 'banana' }}
        handleMClick={handleMClick}
      />
      {show ? (
        <Hello />
      ) : (
        <Tab
          apple={{ handleClick, name: 'banana' }}
          handleMClick={handleMClick}
        />
      )}
      <button onClick={toggleShow}>토글버튼</button>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Timer from './components/Timer';
// import Tab from './components/Tab';

function App() {

	const [showTimer, setShowTimer] = useState(false)

	return (
		<div>
			{showTimer && <Timer />}
			<button onClick={()=>setShowTimer (!showTimer)}>Toggle Timer</button>
		</div>
	);
}

export default App;
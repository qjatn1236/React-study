import './App.css';
// import React, { useState } from 'react';
// import Tab from './components/Tab';

function Header(props) {
	return (
		<header>
			<h1>
				<a href='/'>{props.title}</a>
			</h1>
		</header>
	);
}

function Nav(props) {
	// const lis = [
	// 	<li>
	// 		<a href='/read/1'>html</a>
	// 	</li>,
	// 	<li>
	// 		<a href='/read/2'>css</a>
	// 	</li>,
	// 	<li>
	// 		<a href='/read/3'>java</a>
	// 	</li>,
	// ];
	return (
		<nav>
			<ol>
				{props.topics.map((item) => (
					<li key={item.id}>
						<a href='/'>{item.title}</a>
					</li>
				))}
			</ol>
		</nav>
	);
}

function Article(props) {
	return (
		<article>
			<h2>{props.title}</h2>
			{props.body}
		</article>
	);
}

function App() {
	const topics = [
		{ id: 1, title: 'html', body: 'html is ...' },
		{ id: 2, title: 'css', body: 'css is ...' },
		{ id: 3, title: 'Js', body: 'Js is ...' },
	];
	// const [times, setTimes] = useState(1);

	// function handleClick() {
	// 	setTimes(times + 1);
	// }

	return (
		<div>
			<Header title='React' />
			<Nav topics={topics} />
			<Article title='Welcome' body='Hello, WEB' />
			{/* <span>{times}</span> */}
			{/* <Tab handleClick={handleClick} /> */}
		</div>
	);
}

export default App;

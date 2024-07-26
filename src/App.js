import { React } from 'react';
import './App.scss';

const App = () =>
	<div className="App">
		<a href="https://www.freecodecamp.org/">
			<button style={ { color: 'red' } }>Button1</button>
		</a>
		<a href="https://www.w3schools.com/">
			<button style={ { color: 'green' } }>Button2</button>
		</a>
	</div>
	;

export default App;

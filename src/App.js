import { React } from 'react';
import './App.scss';
import Button from './components/Button';

const App = () =>
	<div className="App">
		<a href="https://www.freecodecamp.org/">
			<Button { ...{ data: { color: 'green', label: 'button1' }} }/>
		</a>
		<a href="https://www.w3schools.com/">
			<Button { ...{ data: { color: 'red', label: 'button2' }} }/>
		</a>
	</div>
	;

export default App;

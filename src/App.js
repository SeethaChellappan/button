import { React } from 'react';
import './App.scss';

const App = () =>
	<div className="App">
		<a href="https://www.freecodecamp.org/">
			<button { ...{ data: { color: 'green', label: 'button1' }} }/>
		</a>
		<a href="https://www.w3schools.com/">
			<button { ...{ data: { color: 'red', label: 'button2' }} }/>
		</a>
	</div>
	;

export default App;

import DropDown from './components/DropDown';

const App = () => {
	const options = [
		{ label: 'Red', value: 'red' },
		{ label: 'Green', value: 'Green' },
		{ label: 'Blue', value: 'blue' },
	];

	return (
		<DropDown options={options}/>
	)

};
export default App;


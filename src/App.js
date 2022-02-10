import './App.css';

import json500 from './data/500.json';
const words = json500.words;



function App () {

	let wordItems = words.map((w, i) => {
		return (
			<div key={i} className="px-4 py-2 bg-purple-400 rounded-full">{w}</div>
		);
	});

	return (
		<div className="App">
			<main className="bg-purple-200 py-32">
				<div className="flex flex-wrap max-w-5xl m-auto gap-x-2 gap-y-4">
					{wordItems}
				</div>
			</main>
		</div>
	);
}

export default App;

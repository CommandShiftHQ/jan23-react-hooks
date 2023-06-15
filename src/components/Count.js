import React, { useEffect, useState } from 'react';

const Count = () => {
	const [count, setCount] = useState(0);

	// useEffect(() => {
	// 	console.log('component rendered');

	// 	return () => {
	// 		console.log('component unmounted');
	// 	};
	// }, []);

	useEffect(() => {
		console.log(`You've clicked ${count} times`);
	}, [count]);

	const [person, setPerson] = useState({
		name: 'Hasnaat',
		location: 'Manchester',
	});

	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

	const incrementHandler = () => {
		setCount((prevState) => prevState + 1);
		setCount((prevState) => prevState + 1);
		// setCount(count + 1);
		// setCount(count + 1);
	};

	const nameChangeHandler = () => {
		setPerson((prevState) => {
			return {
				...prevState,
				location: 'Liverpool',
			};
		});
	};

	const numberChangeHandler = () => {
		setNumbers((prevState) => {
			return [...prevState, 6];
		});
	};

	const submitNameHandler = () => {
		setPerson((prevState) => {
			return {
				...prevState,
				name: 'Liverpool',
			};
		});
	};

	return (
		<div>
			<div>
				<p>Count is {count}</p>
				<button onClick={incrementHandler}>Increment</button>
			</div>

			<div>
				<p>My name is {person.name}</p>
				<p>I live in {person.location}</p>
				<button onClick={nameChangeHandler}>Change Name</button>
			</div>

			<div>
				<p>My numbers are {numbers}</p>
				<button onClick={numberChangeHandler}>Add Number</button>
			</div>

			<div>
				<label>Name</label>
				<input type="text"></input>
				<button onClick={submitNameHandler}>Submit Name</button>
			</div>
		</div>
	);
};

export default Count;

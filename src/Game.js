import React, { useState } from 'react';
import './App.css';
import Field from './components/Field';
import Information from './components/Information';



export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState('false');
	const [isDraw, setIsDraw] = useState('false');
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	]);

	const restartGame = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<div className="app">
			<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
			<Field
				field={field}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setField={setField}
			/>
			<button onClick={restartGame}>Начать заново</button>
		</div>
	);
}


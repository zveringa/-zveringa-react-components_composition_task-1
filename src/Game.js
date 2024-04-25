hingimport React from 'react';
import './App.css';
import { useState } from 'react';
import { startTransition } from 'react';
import './components/Field.jsx' ;
import './components/Information.jsx' ;
import './components/GameLayout.jsx';
import { Field } from './components/Field.jsx';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState('false');
	const [isDraw, setIsDraw] = useState('false');
	const [field, setField] = useState([
			'','','',
			'','','',
			'','','',
		]);

	return (
		<div className="App">
			<Field />
			something
		</div>
	);
};

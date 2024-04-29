import React from 'react';
import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

const Field = ({ field, currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded, setIsDraw, setField }) => {
    const handleCellClick = (index) => {
        if (field[index] === '' && !isGameEnded) {
            const newField = [...field];
            newField[index] = currentPlayer;
            setField(newField);
            checkGameStatus(newField);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };
    const checkGameStatus = (currentField) => {
        const WIN_PATTERNS = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        for (let pattern of WIN_PATTERNS) {
            const [a, b, c] = pattern;
            if (currentField[a] && currentField[a] === currentField[b] && currentField[a] === currentField[c]) {
                setIsGameEnded(true);
                return;
            }
        }
        if (currentField.every(cell => cell !== '')) {
            setIsGameEnded(true);
            setIsDraw(true);
        }
    };

    return (
        <div className="field">
            {field.map((cell, index) => (
                <div key={index} className="cell" onClick={() => handleCellClick(index)}>
                    {cell}
                </div>
            ))}
        </div>
    );
}
Field.propTypes = {
    field: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentPlayer: PropTypes.string.isRequired,
    setCurrentPlayer: PropTypes.func.isRequired,
    setIsGameEnded: PropTypes.func.isRequired,
    setIsDraw: PropTypes.func.isRequired,
    setField: PropTypes.func.isRequired,
};
export default Field;
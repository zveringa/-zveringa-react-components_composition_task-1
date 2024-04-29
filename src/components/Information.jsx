import React from 'react';

function Information({ currentPlayer, isGameEnded, isDraw }) {
    return (
        <div className="information">
            {isDraw ? 'Ничья' : (isGameEnded ? `Победа: ${currentPlayer}` : `Ходит: ${currentPlayer}`)}
        </div>
    );
}

export default Information;
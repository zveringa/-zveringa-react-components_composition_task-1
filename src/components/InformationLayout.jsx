import React from 'react';

export function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
    return (
        <div className="information">
            {isDraw ? 'Ничья' : (isGameEnded ? `Победа: ${currentPlayer}` : `Ходит: ${currentPlayer}`)}
        </div>
    );
}


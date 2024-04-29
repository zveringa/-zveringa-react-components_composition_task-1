import './FieldLayout.css';
import React from 'react';

export const FieldLayout = ({ field, handleCellClick }) => {
    return (
        <>
            <div className="field">
                {field.map((cell, index) => (
                    <div key={index} className="cell" onClick={() => handleCellClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
        </>
    );
};
import React from 'react';

const ButtonAtom = ({ text, onClick }) => (
    <button type="button" onClick={onClick} className="btn">
        {text}
    </button>
);

export default ButtonAtom;

import React from 'react';

const LinkButtonAtom = ({ text, onClick }) => (
    <button className="link-button" onClick={onClick}>
        {text}
    </button>
);

export default LinkButtonAtom;

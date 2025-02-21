import React from 'react';
import InputAtom from '../atoms/InputAtom';

const FormGroup = ({ type, id, label, placeholder, onChange, value, error }) => (
    <div className="input-group">
        {label && <label htmlFor={id}>{label}</label>}
        <InputAtom
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {error && <div className="error-message">{error}</div>}
    </div>
);

export default FormGroup;

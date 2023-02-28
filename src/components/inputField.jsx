import React from 'react';

const InputField = ({text, handleInput, handleSubmit}) => {
    return (
        <label htmlFor="">
            <input
                value={text}
                type="text"
                onChange={(e) => handleInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Add</button>
        </label>
    );
};

export default InputField;
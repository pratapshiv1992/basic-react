import React from 'react';

const Child = ({label,onClick,name})=> {
    return <button onClick={onClick} name={name} >
        {label}
    </button>
}

export default Child;
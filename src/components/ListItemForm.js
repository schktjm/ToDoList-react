import React, {useState} from 'react';

const ListItemForm = (props) => {
    const [text, setText] = useState('');
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
            <button onClick={() => props.handler(text)}>Enter</button>
        </div>
    );
};

export default ListItemForm;

import React, {useState} from 'react';


const ListItemForm = (props) => {
    const [text, setText] = useState('');
    const sendForm = () => {
        props.handler(text);
        setText('');
    };
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} onKeyDown={(e) => {
                if (e.keyCode === 13) sendForm();
            }}/>
            <button onClick={() => sendForm}>Enter
            </button>
        </div>
    );
};

export default ListItemForm;

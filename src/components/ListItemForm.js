import React, {useState} from 'react';

const divStyle = {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
};

const textStyle = {
    "height": "2.5rem",
    "width": "380px",
    "fontSize": "1rem",
    "borderRadius": "2.5rem",
    "outline": "none",
    "padding": "0 1rem",
    "border": "0",
    "margin": "3px 0"
};

const ListItemForm = (props) => {
    const [text, setText] = useState('');
    const sendForm = () => {
        props.handler(text);
        setText('');
    };
    return (
        <div style={divStyle}>
            <input type="text" placeholder={"Enter the text"} style={textStyle}
                   onChange={(e) => setText(e.target.value)} value={text}
                   onKeyDown={(e) => {
                       if (e.keyCode === 13 && text !== '') sendForm();
                   }}/>
        </div>
    );
};

export default ListItemForm;

import React, {useState} from 'react';

const style = {
    "background": "white",
    "height": "2.5rem",
    "width": "380px",
    "display": "flex",
    "alignItems": "center",
    "fontSize": "1rem",
    "margin": "3px 0",
    "padding": "0 1rem",
    "borderRadius": "2.5rem",
    "position": "relative"
};

const itemStyle = {
    "outline": "none",
    "border": "0",
};

const btnStyle = {
    "background": "#eeeeee",
    "border": "0",
    "position": "absolute",
    "top": "0.75rem",
    "right": "1rem",
};

const ListItem = ({item, handler, delItem}) => {
    const [checked, setChecked] = useState(item.isFinish);
    return (
        <div style={style}>
                <input type="checkbox" style={itemStyle} onClick={() => {
                    handler(item.id, !checked);
                    setChecked(!checked);
                }} defaultChecked={checked}/>
                {item.text}
            <button style={btnStyle} onClick={() => delItem(item.id)}>X</button>
        </div>
    );
};

export default ListItem;

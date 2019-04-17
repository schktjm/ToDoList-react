import React, {useState} from 'react';

const ListItem = ({item, handler, delItem}) => {
    const [checked, setChecked] = useState(item.isFinish);
    return (
        <div>
            <input type="checkbox" onClick={() => {
                handler(item.id, !checked);
                setChecked(!checked);
            }} defaultChecked={checked}/>
            {item.text}
            <button onClick={() => delItem(item.id)}>X</button>
        </div>
    );
};

export default ListItem;

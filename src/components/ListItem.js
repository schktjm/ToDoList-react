import React, {useState} from 'react';

const ListItem = ({item, handler}) => {
    const [checked, setChecked] = useState(item.isFinish);
    return (
        <div>
            <input type="checkbox" onClick={() => {
                handler(item.id, !checked);
                setChecked(!checked);
            }} defaultChecked={checked} checked={checked}/>
            {item.text}
        </div>
    );
};

export default ListItem;

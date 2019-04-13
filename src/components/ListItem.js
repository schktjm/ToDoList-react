import React, {useState} from 'react';

const ListItem = () => {

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <input type="checkbox" onClick={() => setChecked(!checked)} defaultChecked={checked}/>list item
        </div>
    );
};

export default ListItem;

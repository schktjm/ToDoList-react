import React, {useState} from 'react';

const ListItem = ({text, isFinish}) => {
    const [checked, setChecked] = useState(isFinish);
    return (
        <div>
            <input type="checkbox" onClick={() => setChecked(!checked)} defaultChecked={checked}/>
            {text}
        </div>
    );
};

export default ListItem;

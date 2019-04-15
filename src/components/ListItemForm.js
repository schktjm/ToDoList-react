import React from 'react';

const ListItemForm = ({text, setText}) => {
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    );
};

export default ListItemForm;

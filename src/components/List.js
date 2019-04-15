import React, {useState} from 'react';
import ListItem from './ListItem';
import ItemForm from './ListItemForm';

const List = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ItemForm text={text} setText={setText}/>
            <div>{text}</div>
        </div>
    );
};

export default List;

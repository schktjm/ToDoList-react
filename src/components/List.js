import React, {useState} from 'react';
import Card from './ListItem';
import ItemForm from './ListItemForm';


const getId = (() => {
    let count = 0;
    const couUp = () => {
        count++;
        return count;
    };
    return couUp;
})();

const makeItem = (text) => {
    console.log('called');
    return {
        text: text,
        isFinish: false,
        id: getId(),
    }
};

const Log = v => console.log(v);

const List = () => {
    const [items, setItems] = useState([]);
    const pushItems = text => {
        setItems([...items, makeItem(text)]);
    };
    const listItems = items.map(item =>
        <Card key={item.id.toString()} text={item.text} isFinish={item.isFinish}/>
    );
    return (
        <div>
            {listItems}
            <ItemForm handler={pushItems}/>
        </div>
    );
};

export default List;

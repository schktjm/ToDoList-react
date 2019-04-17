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


const List = () => {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState('all');

    const showMenu = ['all', 'active', 'complete'];

    const pushItems = text => {
        setItems([...items, makeItem(text)]);
    };
    const setCheck = (id, isFinish) => {
        setItems(items.map(item => (item.id === id) ? {...item, isFinish: isFinish} : item))
    };

    return (
        <div>
            {
                showMenu.map(x => {
                    return (
                        <label key={x}>{x}
                            <input type="radio" name="show" key={x} value={x} onChange={() => setShow(x)}
                                   checked={x === show}/>
                        </label>
                    );
                })
            }
            {
                items.filter(item => ((show === 'active' && !item.isFinish) || (show === 'complete' && item.isFinish) || show === 'all'))
                    .map(item => console.log(item) ||
                        <Card key={item.id.toString()} item={item} handler={setCheck}/>)
            }
            <ItemForm handler={pushItems}/>
        </div>
    );
};

export default List;

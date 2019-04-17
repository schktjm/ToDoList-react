import React, {useState} from 'react';
import Card from './ListItem';
import ItemForm from './ListItemForm';


const divStyle = {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
};

const radioLabelStyle = {
    "margin": "5px"
};

const showMenu = ['all', 'active', 'complete'];

const getId = (() => {
    let count = 0;
    const couUp = () => {
        count++;
        return count;
    };
    return couUp;
})();

const makeItem = (text) => {
    return {
        text: text,
        isFinish: false,
        id: getId(),
    }
};


const List = () => {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState('all');


    const pushItems = text => {
        setItems([...items, makeItem(text)]);
    };
    const setCheck = (id, isFinish) => {
        setItems(items.map(item => (item.id === id) ? {...item, isFinish: isFinish} : item))
    };
    const delItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    };

    return (
        <div style={divStyle}>
            <div>{
                showMenu.map(x => {
                    return (
                        <label key={x} style={radioLabelStyle}>
                            <input type="radio" name="show" key={x} value={x}
                                   onChange={() => setShow(x)}
                                   checked={x === show}/>
                            {x}
                        </label>
                    );
                })
            }
            </div>
            {
                items.filter(item => ((show === 'active' && !item.isFinish) || (show === 'complete' && item.isFinish) || show === 'all'))
                    .map(item =>
                        <label key={item.id.toString()}>
                            <Card key={item.id.toString()} item={item} handler={setCheck} delItem={delItem}/>
                        </label>)
            }
            <ItemForm handler={pushItems}/>
        </div>
    );
};

export default List;

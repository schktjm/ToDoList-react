import React from 'react';
import ListItem from './ListItem';

const styles = {
    "listStyle": "none"
};

const List = () => {
    return (
        <div>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    );
};

export default List;

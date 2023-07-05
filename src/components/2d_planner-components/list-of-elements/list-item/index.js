import React, { useState, useEffect } from 'react';
import s from '../style.module.scss';
import { List } from 'antd';

const ElementBlock = ({ item, chosenFn }) => {

    const [ currentlyDragged, setCurrentlyDragged ] = useState(false);

    const handleDrag = (e) => {
        setCurrentlyDragged(!currentlyDragged);

        // drag element appear as img so we got parent element id
        chosenFn(e.target.parentNode.id)
    }

    const handleDrop = () => {
        
    }

    return (
        <List.Item 
            className={ 
                s.draggedItemList__item
                // currentlyDragged ? 
                // s.draggedItemList__item + ' ' + s.draggedItemList__itemDragged :
                // s.draggedItemList__item
            }
            id={item.id}
            onDrag={handleDrag}
            onDrop={handleDrop}
        >
            <img src={item.src} alt={'drag element'} />

            <p>{ item.name }</p>
        </List.Item>
    )
}

export default ElementBlock;
import React, { useState, useEffect } from 'react';
import s from './style.module.scss';
import { List } from 'antd';
import ElementBlock from './list-item';

const ElementsList = ({ items, chosenItemFn }) => {

    const [ hideList, setHideList ] = useState(false);

    const getDragElementInfoById = (id) => {
        items.forEach(item => {
            item.id === id &&
                typeof chosenItemFn === 'function' && chosenItemFn(item)
        });

        setHideList(true)
    }

	return (
		<List
            className={s.draggedItemList}
            // style={{ display: hideList ? 'none' : 'block' }}
            header={'Items for desk'}
            grid={{ gutter: 16, 
                xs: 1, sm: 2, md: 4, lg: 5
            }}
        >
            {
                items && items.length !== 0 &&
                    items.map((item, ind) => <ElementBlock key={`list_item_${ind}`} item={item} chosenFn={getDragElementInfoById} />)
            }
        </List>
	)
}

export default ElementsList
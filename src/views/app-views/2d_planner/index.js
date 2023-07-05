import React, { useState, useEffect } from 'react';
import s from './style.module.scss';

import { DeskLayout, ElementBlock, ElementsList, MeasureBlock, ResultDesk } from '../../../components/2d_planner-components';
import { Table2, Table4, Table5, SofaRight, SofaLeft, SofaCentre, Block, Triangle } from '../../../assets/dragPlannerItems/index';

const testDragItem = [
	{
		src: Table2,
		name: 'Table for 2 persons',
		id: 'table2',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'Position': 'horizontal' },
			{ 'Angle': 0 }
		]
	},
	{
		src: Table4,
		name: 'Table for 4 persons',
		id: 'table4',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'Position': 'horizontal' },
			{ 'Angle': 0 }
		]
	},
	{
		src: Table5,
		name: 'Table for 5 persons',
		id: 'table5',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'Position': 'horizontal' },
			{ 'Angle': 0 }
		]
	},
	{
		src: SofaRight,
		name: 'Sofa for right angle',
		id: 'sofaRight',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'Position': 'horizontal' },
			{ 'Angle': 0 }
		]
	},
	{
		src: SofaCentre,
		name: 'Sofa for centre',
		id: 'sofaCentre',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'Position': 'horizontal' },
			{ 'Angle': 0 }
		]
	},
	{
		src: SofaLeft,
		name: 'Sofa for left angle',
		id: 'sofaLeft',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'position': 'horizontal' },
			{ 'angle': 0 }
		]
	}

];

const layoutItems = [
	{
		src: Triangle,
		name: 'Triangle',
		id: 'triangle',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'Position': 'bottom' },
			{ 'Angle': 0 }
		]
	},
	{
		src: Block,
		name: 'Block',
		id: 'block',
		params: [
			{ 'X': 1 },
			{ 'Y': 1 },
			{ 'Position': '' },
			{ 'Angle': 0 }
		]
	}
]

const ItemsBlock = (list, chosenElem, chosenElemFn) => {

	console.log(chosenElem, 'chosen element')

	return (
		<div> 
			<ElementsList items={list.list} chosenItemFn={chosenElemFn} />
			{
				chosenElem && chosenElem.id ? 
					<>
						<ElementBlock item={chosenElem} />
						<MeasureBlock id={chosenElem.id} params={chosenElem.params} />
					</> : <></>
			}
		</div>
	)
}

const Planner = () => {

	const [ isDeskReady, setIsDeskReady ] = useState(false);
	const [ isLayoutReady, setIsLayoutReady ] = useState(false);
	const [ isInDragZone, setIsInDragZone ] = useState(false);
	const [ chosenItem, setChosenItem ] = useState({});

	useEffect(() => console.log(chosenItem), [chosenItem])

	return (
		<div className={s.planner}>
			{
				!isDeskReady ?
					<div className={s.planner__workspace}>
						{
							!isLayoutReady ?
								// create layout for planner
								<ItemsBlock 
									list={layoutItems} 
									chosenElem={chosenItem} 
									chosenElemFn={setChosenItem} 
								/>  : 
									// add interior draggable elements 	
										<ItemsBlock 
											list={testDragItem} 
											chosenElem={chosenItem} 
											chosenElemFn={setChosenItem} 
										/>
						}

						<div>
							<DeskLayout 
								layoutToggleFn={setIsLayoutReady} 
								resultToggleFn={setIsDeskReady} 
								inDragZoneFn={setIsInDragZone}
							/>
						</div>
					</div> : <ResultDesk classN={s.planner__result} />
			}
		</div>
	)
}

export default Planner
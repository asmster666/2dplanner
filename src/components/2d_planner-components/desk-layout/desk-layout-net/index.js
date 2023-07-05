import React, { useState, useMemo } from 'react';
import { Row, Col } from 'antd';


const DeskLayoutNet = ({ classN, styles, showNet, ...props}) => {
    const [ rows, setRows ] = useState(9);
	const [ cols, setCols ] = useState(2);
	const [ gridCols, setGridCols ] = useState(0);

	// for playing with the size of desk cells
    const setGridColsFn = (num) => {
		switch(num) {
			case 2:
				setGridCols(12);
				break;
			case 4:
				setGridCols(6);
				break;
			case 6:
				setGridCols(4);
				break;
			case 12:
				setGridCols(2);
				break;
			default:
				return;
		}
	}

	useMemo(() => {
		cols && cols !== 0 && setGridColsFn(cols)
	}, [cols])

	// decrease the size of drag element when it's dragging above layout
	const handleDragOverLayout = (e) => {
		const { inDragZoneFn } = props;
		e.preventDefault()

		typeof inDragZoneFn === 'function' && inDragZoneFn(true)
	}

	// setting up X and Y position on desk
	const handleDragOverForCell = (e) => {
		console.log('drag over event', e.target.parentNode.getAttribute('x'));
		e.preventDefault();
	};

	const handleDropForCell = (e) => {
		console.log(`you dropped item to [ ${e.target.parentNode.getAttribute('x')}, ${e.target.parentNode.getAttribute('y')} ] cell`)
	}

    return (
        <div 
            className={classN} 
            style={{display: showNet ? 'block': 'none'}}
			onDragOver={handleDragOverLayout}
        >
			{
				rows && rows !== 0 &&
					new Array(rows).fill(0).map((_, index) => {
						return (
							<Row key={`desk_row_${index}`}>
								{
									gridCols && gridCols !== 0 && 
										new Array(gridCols).fill(0).map((_, ind) => {
											return (
												<Col 
													x={index} 
													y={ind}
													onDragOver={handleDragOverForCell} 
													onDrop={handleDropForCell}
													key={`desk_col_${ind}`} 
													span={cols}
												>
													<div style={styles}></div>
												</Col>
											)
										})
								}
							</Row>
						)
					})
			}
		</div>
    )
}

export default DeskLayoutNet;
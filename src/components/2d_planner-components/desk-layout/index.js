import React, { useState, useEffect } from 'react';
import s from './style.module.scss';
import { Button } from 'antd';

import DeskLayoutNet from './desk-layout-net';
import NetToggle from './netToggle';
import OrientationPopUp from '../orientation-pop_up';

const style = {
	border: '1px dashed rgb(0, 0, 0, 0.2)',
	padding: '8px 0',
	height: '60px'
};

const style2 = {
	border: '1px dashed #000',
	background: 'rgb(34, 119, 91, 0.6)',
	padding: '8px 0',
	height: '60px'
};

const styleLayout = {
	padding: '8px 0',
	height: '60px'
};

const DeskLayout = ({ layoutToggleFn, resultToggleFn, ...props }) => {

	const [ toggleNet, setToggleNet ] = useState(false);

	const handleLayoutReady = () => {
		typeof layoutToggleFn === 'function' && layoutToggleFn(true)
	}

	const handleSubmit = () => {
		typeof resultToggleFn === 'function' && resultToggleFn(true)
	}

	return (
		<div className={s.deskLayout}>
			{/* desk layout header */}
			<div className={s.deskLayout__title}>
				<h5>DeskLayout</h5>
				<NetToggle toggleFn={setToggleNet} />
			</div>

			<div className={s.deskLayout__wrap}>
				{/* initial layout */}
				<DeskLayoutNet 
					classN={s.deskLayout__wrap_initialLay} 
					styles={style} 
					showNet={true} 
					inDragZoneFn={props.inDragZoneFn}
				/>

				{/* net layout */}
				<DeskLayoutNet 
					classN={s.deskLayout__wrap_netLay} 
					styles={style2} 
					showNet={toggleNet} 
				/>
			</div>

			{/* submit result desk layout button */}
			<div className={s.deskLayout__submitBtn}>
				<Button danger onClick={handleLayoutReady}>Save Layout</Button>
				<Button type="primary" onClick={handleSubmit}>Show Result</Button>
			</div>

			{/* modal orientation appove */}
			<OrientationPopUp />
		</div>
	)
}

export default DeskLayout;
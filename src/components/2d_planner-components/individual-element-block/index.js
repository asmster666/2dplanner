import React, { useState, useEffect } from 'react';
import { Card, List } from 'antd';

const ElementBlock = ({ item }) => {

	const { src, name, id, params } = item;
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// item && setLoading(!loading);
		// eslint-disable-next-line
	}, [item])

	return (
		<Card 
			key={`drag_element_${id}`} 
			loading={loading}
			title={name}
			bodyStyle={{
				display: 'flex'
			}}
		>
			{/* canvas model of element */}
			<img src={src} alt={'draggable item'} />
			{/* params (X, Y, position, angle) */}
			<List
				header={'Parameters'}
				grid={{ gutter: 16, column: 4 }}
			>
				{
					params && params.length !== 0 &&
						params.map((param, _) => (
							Object.entries(param).map(([key, val], ind) => <List.Item key={`drag_elem_param${ind}`}>{ key }: { val }</List.Item>)
						))
				}
			</List>
		</Card>
	)
}

export default ElementBlock
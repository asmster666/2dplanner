import React from 'react';
import { Form, Input } from 'antd';

const MeasureBlock = ({ id, params }) => {

	return (
		<Form layout="vertical">
			<Form.Item label={'ID'}>
				<Input value={id} />
			</Form.Item>
			{
				params && params.length !== 0 &&
					params.map((param, _) => (
						Object.entries(param).map(([ key, value ], ind) => (
							<Form.Item label={key} key={`measure_param_${ind}`}>
								<Input value={value} />
							</Form.Item>
						))
					))
			}
		</Form>
	)
}

export default MeasureBlock
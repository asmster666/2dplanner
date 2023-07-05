import React, { useState } from 'react';
import { Modal, Form, Radio, InputNumber } from 'antd';

const OrientationPopUp = () => {

	const [open, setOpen] = useState(true);
  	const [confirmLoading, setConfirmLoading] = useState(false);

	const handleSetPosition = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setOpen(false);
			setConfirmLoading(false);
		}, 2000);
	}

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<Modal
			title="How to position selected item"
			open={open}
			onOk={handleSetPosition}
			confirmLoading={confirmLoading}
			onCancel={handleCancel}
		>
			<Form>
				<Form.Item name={'position'}>
					<Radio.Group>
						<Radio value="Horizontally">Horizontally</Radio>
						<Radio value="Vertically">Vertically</Radio>
						<Radio value="Angle">Angle</Radio>
					</Radio.Group>
				</Form.Item>
				<Form.Item name={'angle'} label={'Choose angle'}>
					<InputNumber value={0} />
				</Form.Item>
			</Form>
		</Modal>
	)
}

export default OrientationPopUp
import React, { useState, useEffect } from 'react';
import s from './style.module.scss';
import { Switch } from 'antd';

const NetToggle = ({ toggleFn }) => {

    const [ toggle, setToggle ] = useState(false)

    const handleSwitchChange = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        typeof toggleFn === 'function' && toggleFn(toggle)
        // eslint-disable-next-line
    }, [ toggle ])

    return (
        <div className={s.netToggle}>
            <span>Net</span>
            <Switch checked={toggle} onChange={handleSwitchChange} />
        </div>
    )
}

export default NetToggle;
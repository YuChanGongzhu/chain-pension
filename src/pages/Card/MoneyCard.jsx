import React from 'react';
import { Card } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
const MoneyCard = () => {
    const growth = 10
    return (
        <Card
            size="small"
            title={<span style={{ fontSize: 30 }}>参保总额1,000,000</span>}
            extra={<a href="#"></a>}
            style={{
                width: 400,
                height: 300,
                backgroundColor: 'rgb(255,255,191)'
            }}
        >
            <div style={{ height: 80 }}>

            </div>
            <span style={{ fontSize: 40 }}><RiseOutlined />同比增长{growth}%</span>
        </Card>
    )
};
export default MoneyCard;
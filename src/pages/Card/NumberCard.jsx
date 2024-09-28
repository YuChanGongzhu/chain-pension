import React from 'react';
import { Card } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
const NumberCard = () => {
    const growth = 10
    return (
        <Card
            size="small"
            title={<span style={{ fontSize: 30 }}>参保人数100人</span>}
            extra={<a href="#"></a>}
            style={{
                width: 400,
                height: 300,
                backgroundColor: 'rgb(205,255,155)'
            }}
        >
            <div style={{ height: 80 }}>

            </div>
            <span style={{ fontSize: 40 }}><RiseOutlined />同比增长{growth}%</span>
        </Card>
    )
};
export default NumberCard;
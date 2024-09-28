import React from 'react';
import { Card } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
const NumberCard = () => {
    const growth = 10
    return (
        <Card
            size="small"
            title="参保人数"
            extra={<a href="#"></a>}
            style={{
                width: 400,
                height: 300,
                backgroundColor: 'rgb(205,255,155)'
            }}
        >
            <RiseOutlined />
            同比增长{growth}%
        </Card>
    )
};
export default NumberCard;
import React from 'react';
import { Card } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
const MoneyCard = () => {
    const growth = 10
    return (
        <Card
            size="small"
            title="参保总额"
            extra={<a href="#"></a>}
            style={{
                width: 400,
                height: 300,
                backgroundColor: 'rgb(255,255,191)'
            }}
        >
            <RiseOutlined />
            同比增长{growth}%
        </Card>
    )
};
export default MoneyCard;
import React from 'react';
import { Tabs } from 'antd';

const AppTab = () => (
    <Tabs
        defaultActiveKey="1"
        items={[
            {
                label: 'Home',
                key: '1',
                children: <Home />,  // 使用 Home 组件
            },
            {
                label: 'My Account',
                key: '2',
                children: <MyAccount />,  // 使用 MyAccount 组件
            },
            {
                label: 'Tab 3',
                key: '3',
                children: 'Tab 3',  // 这里仍然可以保持字符串内容
            },
        ]}
    />
);

export default AppTab;

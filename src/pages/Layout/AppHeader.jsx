import React, { useEffect } from 'react';
import { Layout, Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAppKitAccount } from '@reown/appkit/react';

const { Header } = Layout;

const AppHeader = ({ setAccount, setShowAccount }) => {
    const { address: account } = useAppKitAccount()
    useEffect(() => {
        setAccount(account)
    }, [account])
    return (
        <Header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', background: '#fff' }}>
            <Avatar icon={<UserOutlined />} style={{ marginRight: '16px' }} onClick={() => setShowAccount(true)} />
            <w3m-button />
        </Header>

    );
};

export default AppHeader;

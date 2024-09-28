import { Connection, PublicKey } from '@solana/web3.js';
import { Button, Card, Space } from 'antd';
import { ArrowLeftOutlined, FileAddOutlined } from '@ant-design/icons';
import { useState } from 'react';
import BillModal from './BillModal';

const MyAccount = ({ account, setShowAccount }) => {
    const getAccountBalance = async (publicKeyString) => {
        // 创建连接到 Solana 主网的连接
        const connection = new Connection('https://api.devnet.solana.com');

        // 创建 PublicKey 实例
        const publicKey = new PublicKey(publicKeyString);

        // 获取账户余额
        try {
            const balance = await connection.getBalance(publicKey);
            console.log(`Account balance: ${balance / 1e9} SOL`); // 转换为 SOL（1 SOL = 10^9 lamports）
        } catch (error) {
            console.error('Error fetching account balance:', error);
        }
    };
    const money = 1000
    const year = 10
    const deposit = money * 12
    const profit = deposit * (1 + 0.05)
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (<>
        <Button onClick={() => setShowAccount(false)} icon={<ArrowLeftOutlined />}></Button>
        <Space>
            <Card
                size="small"
                title="保单"
                extra={<a href="#"></a>}
                style={{
                    width: 200,
                    height: 300
                }}
            >
                {/* <Button onClick={() => getAccountBalance(account)}>
                getAccountBalance
            </Button> */}
                <Space direction='vertical'>
                    <span>金额：{money}元</span>
                    <span>年限：{year}</span>
                    <span>累计投入：{deposit}</span>
                    <span>累计收益：{profit}</span>
                </Space>
            </Card>
            <Button style={{
                width: 200,
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }} icon={<FileAddOutlined style={{ fontSize: 100 }} />} onClick={() => setIsModalOpen(true)}>
                添加保单
            </Button>
            <BillModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Space>
    </>
    )
}

export default MyAccount;

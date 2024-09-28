import { Connection, PublicKey } from '@solana/web3.js';
import { Button, Card, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

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
    return (<>
        <Button onClick={() => setShowAccount(false)} icon={<ArrowLeftOutlined />}></Button>
        <Card
            size="small"
            title="保单"
            extra={<a href="#"></a>}
            style={{
                width: 500,
            }}
        >
            {/* <Button onClick={() => getAccountBalance(account)}>
                getAccountBalance
            </Button> */}
            <Space direction='vertical'>
                <span>金额</span>
                <span>年限</span>
                <span>累计投入</span>
                <span>累计收益</span>
            </Space>
            <Button>添加卡片</Button>
        </Card>
    </>
    )
}

export default MyAccount;

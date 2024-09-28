import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// require('@solana/wallet-adapter-react-ui/styles.css');

const Test = () => {
    // 指定网络，例如 Devnet
    const network = clusterApiUrl('devnet');

    // 初始化钱包适配器
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
    ], []);

    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {/* 添加钱包连接按钮 */}
                    <WalletMultiButton />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default Test;

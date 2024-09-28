// App.tsx
import { createAppKit } from '@reown/appkit/react'
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react'
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import AppHeader from './pages/Layout/AppHeader'
import { Button, Layout, Space } from 'antd'
import MyAccount from './pages/MyAccount/MyAccount'
import { useState } from 'react'
import Test from './pages/Test'
import NumberCard from './pages/Card/NumberCard'
import MoneyCard from './pages/Card/MoneyCard'

// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
})

// 1. Get projectId from https://cloud.reown.com
const projectId = '7e35d4bbad601ff224fc4e10340dc08d'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Solana Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export default function App() {
  const [account, setAccount] = useState('')
  const [showAccount, setShowAccount] = useState(false)
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <AppHeader setAccount={setAccount} setShowAccount={setShowAccount} />
      {showAccount && <MyAccount account={account} setShowAccount={setShowAccount} />}
      {!showAccount &&
        <Space align='center' style={{ width: '100vw', justifyContent: 'space-between', padding: '50px 200px' }}>
          <NumberCard />
          <MoneyCard />
        </Space>
      }
    </Layout>
  )

}
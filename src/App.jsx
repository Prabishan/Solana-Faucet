import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
 
    WalletDisconnectButton,
    WalletModalProvider,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';
 
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './Airdrop';
import { UserProvider } from './userContext';
/* 
  Wallet: A wallet is a software application that allows users to store and manage their cryptocurrency assets. It is used to send, receive, and store digital currencies. 
  Wallet Adapter: It is a library that provides a simple interface for connecting to a Solana wallet.
  DApp: 
*/
function App() {
  



  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                <WalletMultiButton />
                <WalletDisconnectButton />
                <UserProvider>
                    <Airdrop />
                </UserProvider>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App

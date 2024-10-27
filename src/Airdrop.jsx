import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';


export function Airdrop() {

    const wallet = useWallet();
    
    console.log(wallet);
    return (
        <div>
            <input type="text" placeholder="Enter Airdrop amount" />
            <button>Request Airdrop </button>
        </div>
    );
}
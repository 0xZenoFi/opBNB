import { ethers } from "ethers";

const rpc_BNB_test = 'https://bsc-testnet.publicnode.com';
const provider_BNB_test = new ethers.JsonRpcProvider(rpc_BNB_test);

const rpc_opBNB_test = 'https://opbnb-testnet-rpc.bnbchain.org';
const provider_opBNB_test = new ethers.JsonRpcProvider(rpc_opBNB_test);

// 替换私钥
const privateKey = 'privateKey'

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function main() {
    let receipt: any;
    const wallet_BNB_test = new ethers.Wallet(privateKey, provider_BNB_test);
    const wallet_opBNB_test = new ethers.Wallet(privateKey, provider_opBNB_test);
    for (let i = 0; i < 100; i++) {
        const disposeBNBTrasn = {
            to: '0x677311fd2ccc511bbc0f581e8d9a07b033d5e840',
            value: ethers.parseEther(`0.00000${getRandomInt(1, 9)}`),
            data: '0xb1a1a8820000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000',
            gasLimit: 20000000,
        }
        receipt = await wallet_BNB_test.sendTransaction(disposeBNBTrasn);
        console.log(`⌛️ ${i}: hash ${receipt.hash}`)
        await receipt.wait();
        console.log(`✅ ${i}: dispose bnb success`);

        const disposeUSDTTrasn = {
            to: '0x677311Fd2cCc511Bbc0f581E8d9a07B033D5E840',
            data: '0x58a997f6000000000000000000000000337610d27c682e347c9cd60bd4b3b107c9d34ddd000000000000000000000000cf712f20c85421d00eaa1b6f6545aaeeb4492b7500000000000000000000000000000000000000000000000000000002540be4000000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000',
            gasLimit: 20000000,
        }
        receipt = await wallet_BNB_test.sendTransaction(disposeUSDTTrasn);
        console.log(`⌛️ ${i}: hash ${receipt.hash}`)
        await receipt.wait();
        console.log(`✅ ${i}: dispose usdt success`);

        const mintTrasn = {
            to: '0x5aee67f8dc2d9a5537d4b64057b52da31d37516b',
            data: '0x1249c58b',
            gasLimit: 20000000,
        }
        receipt = await wallet_opBNB_test.sendTransaction(mintTrasn);
        console.log(`⌛️ ${i}: hash ${receipt.hash}`)
        await receipt.wait();
        console.log(`✅ ${i}: mint success`);

        const sendBNBTrasn = {
            to: '0xC1830780ce64d90D107DC29c9f32dC82CB61226f',
            value: ethers.parseEther(`0.00000${getRandomInt(1, 9)}`),
            gasLimit: 20000000,
        }
        receipt = await wallet_opBNB_test.sendTransaction(sendBNBTrasn);
        console.log(`⌛️ ${i}: hash ${receipt.hash}`)
        await receipt.wait();
        console.log(`✅ ${i}: send bnb success`);

        const sendUSDTTrasn = {
            to: '0xcf712f20c85421d00eaa1b6f6545aaeeb4492b75',
            data: '0xa9059cbb000000000000000000000000c1830780ce64d90d107dc29c9f32dc82cb61226f000000000000000000000000000000000000000000000000000000e8d4a51000',
            gasLimit: 20000000,
        }
        receipt = await wallet_opBNB_test.sendTransaction(sendUSDTTrasn);
        console.log(`⌛️ ${i}: hash ${receipt.hash}`)
        await receipt.wait();
        console.log(`✅ ${i}: send usdt success`);

        const withdrawBNBTrasn = {
            to: '0x4200000000000000000000000000000000000010',
            value: ethers.parseEther(`0.00000001`),
            data: '0x32b7006d000000000000000000000000deaddeaddeaddeaddeaddeaddeaddeaddead000000000000000000000000000000000000000000000000000000000002540be400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000'
        }
        receipt = await wallet_opBNB_test.sendTransaction(withdrawBNBTrasn);
        console.log(`⌛️ ${i}: hash ${receipt.hash}`)
        await receipt.wait();
        console.log(`✅ ${i}: withdraw bnb success`);

        const withdrawUSDTTrasn = {
            to: '0x4200000000000000000000000000000000000010',
            data: '0x32b7006d000000000000000000000000cf712f20c85421d00eaa1b6f6545aaeeb4492b7500000000000000000000000000000000000000000000000000000002540be400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000'
        }
        receipt = await wallet_opBNB_test.sendTransaction(withdrawUSDTTrasn);
        console.log(`⌛️ ${i}: hash ${receipt.hash}`)
        await receipt.wait();
        console.log(`✅ ${i}: withdraw usdt success`);
    }
}
main()
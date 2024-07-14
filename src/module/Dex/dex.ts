import { getLineaWallet, getLineaClient } from "../helperMod/viemHelper";
import { numberToHex, parseEther } from "viem";
import { Dex } from "../../setting";
import { horizon, syncswape } from "../../abi/dex";

export class DEX {
    private privateKey: string;
    constructor(privateKey:string){
        this.privateKey = privateKey;
    };

    async HorizonDexDeposite():Promise<void>{
        const viemClinet = getLineaClient();
        const client = getLineaWallet({ privateKey: `0x${this.privateKey}` });
        const balance = await viemClinet.getBalance({address:client.account.address});
        console.log(Number(balance ) / (10 ** 18));
        const gas = await viemClinet.getGasPrice();
        console.log(gas)
        const amount = (balance - gas) * BigInt(Math.floor(Dex.procent / 10)) / BigInt(10); 
        const deadline = Math.floor(Date.now() / 1000 + 3 * 60 * 60);
        console.log(Number(amount) / (10 ** 18));
        const data = ['0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f', '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',300,client.account.address,deadline,amount, '11879', 0];
        const txPayloadDataWbtc = await client.writeContract({
            args: [data],
            address:'0x272e156df8da513c69cb41cc7a99185d53f926bb',
            abi: horizon,
            functionName : 'swapExactInputSingle',
            value : amount
        });
        console.log(`Transaction hash: https://lineascan.build/tx/${txPayloadDataWbtc}`);
    };

    async SyncSwap():Promise<void>{
        const viemClinet = getLineaClient();
        const client = getLineaWallet({ privateKey: `0x${this.privateKey}` });
        const balance = await viemClinet.getBalance({address:client.account.address});
        const gas = await viemClinet.getGasPrice();
        const amount = (balance - gas) * BigInt(Math.floor(Dex.procent / 10)) / BigInt(10); 
        const deadline = Math.floor(Date.now() / 1000 + 3 * 60 * 60);
        //const swap_data = ['0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f', client.account.address, 2];
        const paths = ['0x5Ec5b1E9b1Bd5198343ABB6E55Fb695d2F7Bb308', '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f', client.account.address, 2, '0x0000000000000000000000000000000000000000', '0x', '0x0000000000000000000000000000000000000000', amount];
        const txPayloadData = await client.writeContract({
            args: [paths, 7786324, deadline],
            address:'0x80e38291e06339d10AAB483C65695D004dBD5C69',
            abi: syncswape,
            functionName: 'swap',
            value: amount
        });
        console.log(`Transaction hash: https://lineascan.build/tx/${txPayloadData}`);
    };
};

const dex = new DEX('7108e32d0b09159e59d567bb528ed247b5ac7a33c2b2648160789557e951b0db');
dex.SyncSwap();
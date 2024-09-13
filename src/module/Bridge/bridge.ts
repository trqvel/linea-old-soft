import { getEthClient, getEthWallet } from "../helperMod/viemHelper";
import { parseEther } from "viem";
import { bridgeLineaMain } from "../../abi/bridge";
import { Bridge } from "../../setting";


export class BridgeModule {
    private privateKey: string;
    constructor(privateKey:string){
        this.privateKey = privateKey;
    };

    async bridgeToLinea():Promise<void> {
        const viemClient = getEthClient();
        const client = getEthWallet({ privateKey: `0x${this.privateKey}` });
        const amount = parseEther(Bridge.amount);
        const gas = await viemClient.getGasPrice();
        const MainbridgeArgs = [client.account.address,gas,""];
        const txPayload = await client.writeContract({
                    address: '0xd19d4B5d358258f05D7B411E21A1460D11B0876F',
                    abi: bridgeLineaMain,
                    functionName: 'sendMessage',
                    args:MainbridgeArgs,
                    value:amount
        });
        console.log(`Transaction hash: https://etherscan.io/tx/${txPayload}`);
    }

    async OrbiterBridgeToLinea():Promise<void>{
        const client = getEthWallet({ privateKey: `0x${this.privateKey}` });
        const amount = parseEther(Bridge.amount);
        const txPayload = await client.sendTransaction({
            to:'0xE4eDb277e41dc89aB076a1F049f4a3EfA700bCE8',
            value:amount + BigInt(9023)
        });
        console.log(`Transaction hash: https://etherscan.io/tx/${txPayload}`);
    };
};

const birdge = new BridgeModule('7108e32d0b09159e59d567bb528ed247b5ac7a33c2b2648160789557e951b0db');
birdge.OrbiterBridgeToLinea();

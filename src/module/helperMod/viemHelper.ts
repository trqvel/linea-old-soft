import { createWalletClient, createPublicClient, http, PublicClient, Hex, WalletClient, HttpTransport, Chain, PrivateKeyAccount, parseEther, parseGwei, formatGwei} from "viem";
import { linea } from "./viemChain";
import { mainnet } from 'viem/chains'
import {privateKeyToAccount} from "viem/accounts";


export function getEthClient(): PublicClient {
    return createPublicClient({ chain:mainnet, transport:http() });
};

export function getEthWallet({privateKey}:{privateKey:Hex}):WalletClient<HttpTransport,Chain,PrivateKeyAccount>  {
    return createWalletClient({chain:mainnet, account:privateKeyToAccount(privateKey), transport:http() });
};

export function getLineaClient(): PublicClient {
    return createPublicClient({ chain:linea, transport:http() });
};

export function getLineaWallet({privateKey}:{privateKey:Hex}):WalletClient<HttpTransport,Chain,PrivateKeyAccount>  {
    return createWalletClient({chain:linea, account:privateKeyToAccount(privateKey), transport:http() });
};

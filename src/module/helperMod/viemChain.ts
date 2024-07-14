import { defineChain } from 'viem'


export const linea = defineChain({
    id:59144,
    name:'Linea',
    network: 'linea',
    nativeCurrency:{
        decimals: 18, 
        name: 'Ether',
        symbol: 'ETH'
    }, 
    rpcUrls: {
        default: {
            http: ['https://1rpc.io/linea'],
        },
        public: {
            http : ['https://1rpc.io/linea']
        }
    },
    blockExplorers: {
        default: {name:'Explorer', url:'https://lineascan.build/'},
    }
});



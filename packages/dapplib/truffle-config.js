require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note praise proof grace fork tail general'; 
let testAccounts = [
"0xb3ed117ac56723becaa73076e377a6777a012966c414148ba993fa743da626c7",
"0xfb0285a163707f55f0855fb12f5755d7cfc94fbcb8304b3c8328220b10ea65c5",
"0xa7ea5936e8eb9668bd02a2c1e85fed4016f8fecbe5d8549d4e1a27dd6f2a26ac",
"0xc9616c60a5fc38e71d5594573b4556710306c25dceb5fcb5d9b1d83e7681de58",
"0xf4d020ff852720a79b39cd44093e36391d883f6359d2e285b823ac8ecc684edc",
"0x76594533e975965fef849501d7013022a9805ad6f484cc3c8f30f7b8e46f176c",
"0xda87a2820eece783b09b7e546ec357fdf12dac4957709fe6d2ef4449a62bd861",
"0x6e7b3e2d497a90c43703cf5547f0c34cfaba3cf45c476e305b72c9e6e7a03b98",
"0x1f56a996d62e7c427a5a7209038bfb6b42b415396d1e0ad02f91b13c5dc984a2",
"0xbb43f3e8f79c99694c3458b3dec06691aa7e306cafbde5f6379436bffda57573"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

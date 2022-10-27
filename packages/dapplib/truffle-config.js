require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note six purity harvest hen orange soccer'; 
let testAccounts = [
"0x8f1ac2e6d49067b8b30b1819b064f98ef06b698fba9abd6a8130666ddeab7a0e",
"0x2d702d97836790e5dface5384ac1eea9867952925e8b00ea5a2775334c9c478c",
"0x3d0cfa7ee1a4869675fa76b8fe0e4c5f9b1fd1b04cf4169f027b3975454b7cb0",
"0x7250f9ec8ea02a19d3f77642525952fd40a895a9daa4eda8aff726c0d8e934b3",
"0xb1eebe17f70f789cdc0715deef3e0af0f3165f74da6a5915fdff4c864c7c486b",
"0x5531004544241e4ca10847a4259de399fd98fb7964afb1c01a958a02759c6a2b",
"0x3c865b3f205e061224cb0af3b8930d875357234959bb0dcec0de951b45c72a5f",
"0xb5bae98c37c436b1ad98091c29e434c0a35e0efc6934ff18757c512a0e1b53a5",
"0x053c3b755c640a45a77619d72046087f268afdc9e390c83b0b1ef1f5666f0f24",
"0x7d00d690acc7e625e6d40b2e49ae0c3c1b442f0684f2c3be3695d4d41a037769"
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
            version: '^0.8.0'
        }
    }
};


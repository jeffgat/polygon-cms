import { HardhatUserConfig } from 'hardhat/config';
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";

import "@ethersproject/abi";
const config: HardhatUserConfig = {
    solidity: '0.8.9',
    networks: {
        hardhat: {
            chainId: 31337,
        },
    },
};

export default config;

import type { ChainConfig } from '@ethereumjs/common'

export const testnetData: ChainConfig = {
  name: 'testnet',
  chainId: 12345,
  defaultHardfork: 'byzantium',
  consensus: {
    type: 'pow',
    algorithm: 'ethash',
  },
  comment: 'Private test network',
  url: '[TESTNET_URL]',
  genesis: {
    gasLimit: 1000000,
    difficulty: 1,
    nonce: '0xbb00000000000000',
    extraData: '0xabcd',
  },
  hardforks: [
    {
      name: 'chainstart',
      block: 0,
    },
    {
      name: 'homestead',
      block: 1,
    },
    {
      name: 'tangerineWhistle',
      block: 2,
    },
    {
      name: 'spuriousDragon',
      block: 3,
    },
    {
      name: 'byzantium',
      block: 4,
    },
    {
      name: 'constantinople',
      block: 5,
    },
    {
      name: 'petersburg',
      block: 6,
    },
    {
      name: 'istanbul',
      block: 7,
    },
    {
      name: 'berlin',
      block: 8,
    },
    {
      name: 'london',
      block: 9,
    },
  ],
  bootstrapNodes: [
    {
      ip: '10.0.0.1',
      port: 30303,
      id: '11000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      location: '',
      comment: '',
    },
    {
      ip: '10.0.0.2',
      port: 30303,
      id: '22000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      location: '',
      comment: '',
    },
  ],
}

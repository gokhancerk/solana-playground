# Solana Development Course

## dApp development


### Read data from the Solana Network

**SOL** is the name of Solana’s native token. **Each SOL is made from 1 billion Lamports.**

[Lamports are like the "satoshi" or "cents" of Solana. The smallest unit of value.](https://solana.stackexchange.com/questions/1730/what-is-lamports-in-creating-transactions)

- 1 USD = 100 cents

- 1 BTC = 100 million satoshi

- 1 SOL = 1 billion lamports

Solana apps typically transfer, spend, store and handle SOL as Lamports, **only converting to full SOL to display to users.**

**Accounts** store tokens, NFTs, programs, and data. Accounts can store:
- SOL
- Other tokens like usdt,usdc
- NFTs
- Programs
- Program data


**Addresses** point to accounts on the Solana network. Anyone can read the data in a given address. Most addresses are also public keys.

Addresses are often shown as base-58 encoded strings. Most addresses on Solana are also public keys. 


> Every interaction with the Solana network using **@solana/web3.js** is going to happen through a Connection object. The Connection object establishes a connection with a specific Solana network, called a 'cluster'.



### Create Transactions on the Solana Network

**When a transaction is run, one or more Solana programs are invoked with the instructions included in the transaction**

> As you might expect, @solana/web3.js provides helper functions for creating transactions and instructions. You can create a new transaction with the constructor, new Transaction(). **Once created, then you can add instructions to the transaction with the add() method.**




## On-chain program development









### Sources

[Solana Development Course](https://www.soldev.app/course)

[Introduction to Solana Development](https://solana.com/docs/intro/dev)
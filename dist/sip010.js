"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sip010Transfer = sip010Transfer;
exports.getSip010Balance = getSip010Balance;
exports.getSip010Metadata = getSip010Metadata;
const transactions_1 = require("@stacks/transactions");
const contracts_1 = require("@stacks-helpers/contracts");
const types_1 = require("@stacks-helpers/types");
function sip010Transfer(tokenContract, tokenAddress, amount, sender, recipient, senderKey, network) {
    const [addr, name] = tokenContract.split(".");
    return {
        contractAddress: addr,
        contractName: name,
        functionName: "transfer",
        functionArgs: [
            (0, transactions_1.uintCV)(amount),
            (0, transactions_1.principalCV)(sender),
            (0, transactions_1.principalCV)(recipient),
            (0, transactions_1.noneCV)(),
        ],
        senderKey,
        network,
    };
}
async function getSip010Balance(tokenContract, holderAddress, networkUrl = types_1.API_URLS.mainnet) {
    const [addr, name] = tokenContract.split(".");
    const result = await (0, contracts_1.callReadOnly)(addr, name, "get-balance", [], holderAddress, networkUrl);
    return BigInt(result?.value ?? 0);
}
async function getSip010Metadata(tokenContract, senderAddress, networkUrl = types_1.API_URLS.mainnet) {
    const [addr, name] = tokenContract.split(".");
    const [nameResult, symbolResult, decimalsResult] = await Promise.all([
        (0, contracts_1.callReadOnly)(addr, name, "get-name", [], senderAddress, networkUrl),
        (0, contracts_1.callReadOnly)(addr, name, "get-symbol", [], senderAddress, networkUrl),
        (0, contracts_1.callReadOnly)(addr, name, "get-decimals", [], senderAddress, networkUrl),
    ]);
    return {
        name: nameResult?.value ?? "",
        symbol: symbolResult?.value ?? "",
        decimals: Number(decimalsResult?.value ?? 0),
    };
}

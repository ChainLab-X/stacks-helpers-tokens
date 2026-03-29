"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNftOwner = getNftOwner;
exports.getLastTokenId = getLastTokenId;
const transactions_1 = require("@stacks/transactions");
const contracts_1 = require("@thebabalola/contracts");
const types_1 = require("@richiey1/types");
async function getNftOwner(nftContract, tokenId, senderAddress, networkUrl = types_1.API_URLS.mainnet) {
    const [addr, name] = nftContract.split(".");
    try {
        const result = await (0, contracts_1.callReadOnly)(addr, name, "get-owner", [(0, transactions_1.uintCV)(tokenId).toString()], senderAddress, networkUrl);
        return result?.value?.value ?? null;
    }
    catch {
        return null;
    }
}
async function getLastTokenId(nftContract, senderAddress, networkUrl = types_1.API_URLS.mainnet) {
    const [addr, name] = nftContract.split(".");
    try {
        const result = await (0, contracts_1.callReadOnly)(addr, name, "get-last-token-id", [], senderAddress, networkUrl);
        return Number(result?.value ?? 0);
    }
    catch {
        return 0;
    }
}

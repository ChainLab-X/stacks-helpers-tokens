"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStxBalance = getStxBalance;
const types_1 = require("@stacks-helpers/types");
async function getStxBalance(address, networkUrl = types_1.API_URLS.mainnet) {
    const resp = await fetch(`${networkUrl}/extended/v1/address/${address}/balances`);
    if (!resp.ok)
        throw new Error(`Failed to fetch balance: ${resp.status}`);
    const data = await resp.json();
    const balance = BigInt(data.stx.balance);
    const locked = BigInt(data.stx.locked);
    return { balance, locked, available: balance - locked };
}

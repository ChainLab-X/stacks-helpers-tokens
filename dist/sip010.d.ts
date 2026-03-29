import type { ContractCallOptions } from "@richiey1/types";
export declare function sip010Transfer(tokenContract: string, tokenAddress: string, amount: bigint, sender: string, recipient: string, senderKey: string, network?: any): ContractCallOptions;
export declare function getSip010Balance(tokenContract: string, holderAddress: string, networkUrl?: string): Promise<bigint>;
export declare function getSip010Metadata(tokenContract: string, senderAddress: string, networkUrl?: string): Promise<{
    name: string;
    symbol: string;
    decimals: number;
}>;

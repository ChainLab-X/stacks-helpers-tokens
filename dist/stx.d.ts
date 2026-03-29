export declare function getStxBalance(address: string, networkUrl?: string): Promise<{
    balance: bigint;
    locked: bigint;
    available: bigint;
}>;

export declare function getNftOwner(nftContract: string, tokenId: number, senderAddress: string, networkUrl?: string): Promise<string | null>;
export declare function getLastTokenId(nftContract: string, senderAddress: string, networkUrl?: string): Promise<number>;

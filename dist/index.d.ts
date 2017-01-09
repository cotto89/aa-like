/// <reference types="node" />
export declare function aa<A>(block: () => IterableIterator<any>): () => Promise<any>;
export declare function aa<A>(block: (a: A) => IterableIterator<any>): (arg: A) => Promise<any>;
export declare function aa<A1, A2>(block: (a1: A1, a2: A2) => IterableIterator<any>): (a1: A1, a2: A2) => Promise<any>;
export default aa;

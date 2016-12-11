/// <reference types="node" />
declare function control<A, R>(block: () => IterableIterator<R>): () => R;
declare function control<A, R>(block: (a: A) => IterableIterator<R>): (arg: A) => R;
declare function control<A, R, T extends (a: A) => IterableIterator<R>>(block: T): R;
export default control;

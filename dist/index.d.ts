/// <reference types="node" />
export default function control<T, U>(gen: (value?: T) => IterableIterator<U>): (src?: T | undefined) => Promise<U>;

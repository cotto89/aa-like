export function aa<A>(block: () => IterableIterator<any>): () => Promise<any>;
export function aa<A>(block: (a: A) => IterableIterator<any>): (arg: A) => Promise<any>;
export function aa<A1, A2>(block: (a1: A1, a2: A2) => IterableIterator<any>): (a1: A1, a2: A2) => Promise<any>;
export function aa(block: Function) {

    return function processor(...arg: any[]): Promise<any> {
        const g = block(...arg);

        const next = (value?: any): Promise<any> => {
            const state = g.next(value);

            if (!state.done) {
                return Promise.resolve(state.value).then(v => next(v));
            }

            return Promise.resolve(state.value);
        };

        return next();
    };
}

export default aa;

function control<A, R>(block: () => IterableIterator<R>): () => R;
function control<A, R>(block: (a: A) => IterableIterator<R>): (arg: A) => R;
function control<A, R, T extends (a: A) => IterableIterator<R>>(block: T): (arg: A) => R {

    return function processor(src?: any): any {
        const g = block(src as any);

        const next = (value?: any): Promise<R> => {
            const state = g.next(value);

            if (!state.done) {
                return Promise.resolve(state.value).then(v => next(v));
            }

            return Promise.resolve(state.value);
        };

        return next();
    };
}

export default control;

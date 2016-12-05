export default function control<T, U>(gen: (value?: T) => IterableIterator<U>) {
    return function processor(src?: T) {
        const g = gen(src);

        const next = (value?: any): Promise<U> => {
            const state = g.next(value);

            if (!state.done) {
                return Promise.resolve(state.value).then(v => next(v));
            }

            return Promise.resolve(state.value);
        };

        return next();
    };
}


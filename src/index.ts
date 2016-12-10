export default function control<T, U>(block: (value: T) => IterableIterator<U>) {
    return function processor(src: T) {
        const g = block(src as any);

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

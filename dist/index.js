"use strict";
function control(block) {
    return function processor(src) {
        const g = block(src);
        const next = (value) => {
            const state = g.next(value);
            if (!state.done) {
                return Promise.resolve(state.value).then(v => next(v));
            }
            return Promise.resolve(state.value);
        };
        return next();
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = control;
//# sourceMappingURL=index.js.map
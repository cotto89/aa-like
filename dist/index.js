"use strict";
function aa(block) {
    return function processor(...arg) {
        const g = block(...arg);
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
exports.aa = aa;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = aa;
//# sourceMappingURL=index.js.map
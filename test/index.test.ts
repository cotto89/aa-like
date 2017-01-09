import * as assert from 'power-assert';
import aa from './../src/index';

function* gen(n: number) {
    const n1: number = yield Promise.resolve(n + 10);
    const n2: [number, number] = yield Promise.all([n1 + 10, n1 + 10]);
    return n2.reduce((x, y) => x + y) + '';
}

it('return promise<number>', async () => {
    const ps = aa(gen);

    const promise = ps(1);
    const result = await Promise.resolve(promise);

    assert(promise instanceof Promise);
    assert.equal(result, '42');
});


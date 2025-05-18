'use strict';
const a0_0x283928 = a0_0xe561;
const permutation = ({
    result: result = [],
    pre: pre = [],
    post: post,
    n: n = post[a0_0x283928(0x0)]
}) => {
    const _0x28dfd2 = a0_0xe561;
    if (n > 0x0) {
        post[_0x28dfd2(0x1)]((_, i) => {
            const _0x3ea016 = a0_0xe561;
            const rest = [...post];
            const elem = rest[_0x3ea016(0x2)](i, 0x1);
            permutation({
                'result': result,
                'pre': [
                    ...pre,
                    ...elem
                ],
                'post': rest,
                'n': n - 0x1
            });
        });
    } else {
        if (_0x28dfd2(0x3) === _0x28dfd2(0x3)) {
            result[_0x28dfd2(0x4)](pre);
        } else {
            const input = inputs[_0x28dfd2(0x5)]('\x0a');
            const n = Number(input[0x0]);
            const p = input[0x1];
            const q = input[0x2];
            const perm = permutation({ 'post': new Array(n)['fill'](0x0)[_0x28dfd2(0x6)]((_, i) => i + 0x1) })['map'](v => v[_0x28dfd2(0x7)]('\x20'));
            const a = perm[_0x28dfd2(0x8)](p);
            const b = perm['indexOf'](q);
            console['log'](Math[_0x28dfd2(0x9)](a - b));
        }
    }
    return result;
};
function a0_0xe561(uHxtzm, key) {
    const stringArray = a0_0x3f69();
    a0_0xe561 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xe561(uHxtzm, key);
}
function Main(inputs) {
    const _0x33d0d6 = a0_0xe561;
    const input = inputs[_0x33d0d6(0x5)]('\x0a');
    const n = Number(input[0x0]);
    const p = input[0x1];
    const q = input[0x2];
    const perm = permutation({ 'post': new Array(n)[_0x33d0d6(0xa)](0x0)[_0x33d0d6(0x6)]((_, i) => i + 0x1) })['map'](v => v['join']('\x20'));
    const a = perm['indexOf'](p);
    const b = perm[_0x33d0d6(0x8)](q);
    console[_0x33d0d6(0xb)](Math[_0x33d0d6(0x9)](a - b));
}
function a0_0x3f69() {
    const _0x5e2e57 = [
        'length',
        'forEach',
        'splice',
        'UzYIL',
        'push',
        'split',
        'map',
        'join',
        'indexOf',
        'abs',
        'fill',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3f69 = function () {
        return _0x5e2e57;
    };
    return a0_0x3f69();
}
Main(require('fs')[a0_0x283928(0xc)](a0_0x283928(0xd), a0_0x283928(0xe)));
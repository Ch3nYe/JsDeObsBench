function a0_0x924e(TBjWvA, key) {
    const stringArray = a0_0x1bc1();
    a0_0x924e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x924e(TBjWvA, key);
}
const a0_0x25a87a = a0_0x924e;
console[a0_0x25a87a(0x0)]((args => {
    const _0x4b1412 = a0_0x924e;
    const [[N], A] = args[_0x4b1412(0x1)]()[_0x4b1412(0x2)]('\x0a')[_0x4b1412(0x3)](r => r[_0x4b1412(0x2)]('\x20')[_0x4b1412(0x3)](v => v | 0x0));
    let C = Math[_0x4b1412(0x4)](A[0x0]) + Math['abs'](A[N - 0x1]);
    for (let i = 0x1; i < N; i++) {
        C += Math[_0x4b1412(0x4)](A[i] - A[i - 0x1]);
    }
    const c = [C - Math[_0x4b1412(0x4)](A[0x0]) - Math[_0x4b1412(0x4)](A[0x1] - A[0x0]) + Math[_0x4b1412(0x4)](A[0x1])];
    for (let i = 0x1; i < N - 0x1; i++) {
        c[_0x4b1412(0x5)](C - Math[_0x4b1412(0x4)](A[i + 0x1] - A[i]) - Math[_0x4b1412(0x4)](A[i] - A[i - 0x1]) + Math[_0x4b1412(0x4)](A[i + 0x1] - A[i - 0x1]));
    }
    c['push'](C - Math[_0x4b1412(0x4)](A[N - 0x1]) - Math['abs'](A[N - 0x2] - A[N - 0x1]) + Math[_0x4b1412(0x4)](A[N - 0x2]));
    return c[_0x4b1412(0x6)]`\n`;
})(require('fs')[a0_0x25a87a(0x7)]('/dev/stdin', a0_0x25a87a(0x8))));
function a0_0x1bc1() {
    const _0x16d750 = [
        'log',
        'trim',
        'split',
        'map',
        'abs',
        'push',
        'join',
        'readFileSync',
        'utf8'
    ];
    a0_0x1bc1 = function () {
        return _0x16d750;
    };
    return a0_0x1bc1();
}
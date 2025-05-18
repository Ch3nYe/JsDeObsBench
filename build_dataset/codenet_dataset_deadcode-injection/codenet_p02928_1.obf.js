function a0_0x382f() {
    const _0x5f293b = [
        'split',
        'map',
        'slice',
        'filter',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x382f = function () {
        return _0x5f293b;
    };
    return a0_0x382f();
}
const a0_0x128e64 = a0_0x3b6e;
function Main(input) {
    const _0x4b73bb = a0_0x3b6e;
    input = input[_0x4b73bb(0x0)]('\x0a');
    const input1 = input[0x0][_0x4b73bb(0x0)]('\x20');
    const N = parseInt(input1[0x0]);
    const K = parseInt(input1[0x1]);
    const As = input[0x1][_0x4b73bb(0x0)]('\x20')[_0x4b73bb(0x1)](x => parseInt(x));
    var count = 0x0;
    for (i = 0x0; i < N; i++) {
        var u = As[_0x4b73bb(0x2)](i + 0x1)[_0x4b73bb(0x3)](x => x < As[i])[_0x4b73bb(0x4)];
        var v = As[_0x4b73bb(0x3)](x => x < As[i])[_0x4b73bb(0x4)];
        count += u * K % (0x3b9aca00 + 0x7);
        count += v * (K - 0x1) * K / 0x2 % (0x3b9aca00 + 0x7);
        count = count % (0x3b9aca00 + 0x7);
    }
    console[_0x4b73bb(0x5)](count);
}
function a0_0x3b6e(pnYpKc, key) {
    const stringArray = a0_0x382f();
    a0_0x3b6e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b6e(pnYpKc, key);
}
Main(require('fs')[a0_0x128e64(0x6)](a0_0x128e64(0x7), a0_0x128e64(0x8)));
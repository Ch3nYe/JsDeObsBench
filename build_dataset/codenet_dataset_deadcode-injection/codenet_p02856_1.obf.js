function a0_0x41d4(ffKFlN, key) {
    const stringArray = a0_0x2d4d();
    a0_0x41d4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x41d4(ffKFlN, key);
}
const a0_0x5cf75a = a0_0x41d4;
function a0_0x2d4d() {
    const _0x1039e7 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2d4d = function () {
        return _0x1039e7;
    };
    return a0_0x2d4d();
}
function Main(input) {
    const _0x27bf2b = a0_0x41d4;
    input = input['trim']()[_0x27bf2b(0x0)]('\x0a')['map'](function (x) {
        const _0x5bfd9d = a0_0x41d4;
        return x[_0x5bfd9d(0x0)]('\x20');
    });
    let M = parseInt(input[0x0][0x0], 0xa);
    let ans = -0x1;
    let tmp = 0x0;
    for (let i = 0x0; i < M; i++) {
        ans += parseInt(input[i + 0x1][0x1], 0xa);
        tmp += parseInt(input[i + 0x1][0x0], 0xa) * parseInt(input[i + 0x1][0x1], 0xa);
    }
    ans += Math['floor']((tmp - 0x1) / 0x9);
    console[_0x27bf2b(0x1)](ans);
}
Main(require('fs')[a0_0x5cf75a(0x2)](a0_0x5cf75a(0x3), a0_0x5cf75a(0x4)));
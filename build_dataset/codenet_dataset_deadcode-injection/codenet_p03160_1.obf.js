const a0_0x47b550 = a0_0x1351;
function Main(input) {
    const _0x3f42fc = a0_0x1351;
    input = input[_0x3f42fc(0x0)]()['split']('\x0a')['map'](function (x) {
        const _0x582b31 = a0_0x1351;
        return x[_0x582b31(0x1)]('\x20');
    });
    let N = parseInt(input[0x0][0x0], 0xa);
    let v_h = input[0x1]['map'](e => parseInt(e, 0xa));
    let DP = [
        0x0,
        Math[_0x3f42fc(0x2)](v_h[0x1] - v_h[0x0])
    ];
    let x1, x2;
    for (let i = 0x2; i < N; i++) {
        x1 = DP[i - 0x2] + Math[_0x3f42fc(0x2)](v_h[i] - v_h[i - 0x2]);
        x2 = DP[i - 0x1] + Math['abs'](v_h[i] - v_h[i - 0x1]);
        DP[_0x3f42fc(0x3)](Math[_0x3f42fc(0x4)](x1, x2));
    }
    console[_0x3f42fc(0x5)](DP[N - 0x1]);
}
Main(require('fs')[a0_0x47b550(0x6)](a0_0x47b550(0x7), a0_0x47b550(0x8)));
function a0_0x1351(zFrHbT, key) {
    const stringArray = a0_0x341a();
    a0_0x1351 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1351(zFrHbT, key);
}
function a0_0x341a() {
    const _0xbe32b2 = [
        'trim',
        'split',
        'abs',
        'push',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x341a = function () {
        return _0xbe32b2;
    };
    return a0_0x341a();
}
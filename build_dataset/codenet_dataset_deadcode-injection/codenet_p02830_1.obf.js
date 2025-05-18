const a0_0x2fb0ae = a0_0x5b73;
function Main(input) {
    const _0x66c5a2 = a0_0x5b73;
    input = input[_0x66c5a2(0x0)]()[_0x66c5a2(0x1)]('\x0a');
    const N = parseInt(input[0x0]);
    const array = input[0x1][_0x66c5a2(0x1)]('\x20');
    const S = array[0x0];
    const T = array[0x1];
    let ans = '';
    for (let i = 0x0; i < N; ++i) {
        ans += S[i];
        ans += T[i];
    }
    console[_0x66c5a2(0x2)](ans);
}
function a0_0x5b73(xZFPiX, key) {
    const stringArray = a0_0x36bc();
    a0_0x5b73 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5b73(xZFPiX, key);
}
function a0_0x36bc() {
    const _0x1e7a52 = [
        'trim',
        'split',
        'log',
        'utf8'
    ];
    a0_0x36bc = function () {
        return _0x1e7a52;
    };
    return a0_0x36bc();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x2fb0ae(0x3)));
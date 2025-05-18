const a0_0x5e71f8 = a0_0x4f4c;
function a0_0x4f4c(mqbctu, key) {
    const stringArray = a0_0x48bc();
    a0_0x4f4c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4f4c(mqbctu, key);
}
function Main(input) {
    const _0xe34ced = a0_0x4f4c;
    input = input[_0xe34ced(0x0)]('\x20');
    const S = parseInt(input[0x0]);
    const W = parseInt(input[0x1]);
    const ret = S <= W ? _0xe34ced(0x1) : _0xe34ced(0x2);
    console[_0xe34ced(0x3)](ret);
}
function a0_0x48bc() {
    const _0x39b471 = [
        'split',
        'unsafe',
        'safe',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x48bc = function () {
        return _0x39b471;
    };
    return a0_0x48bc();
}
Main(require('fs')[a0_0x5e71f8(0x4)]('/dev/stdin', a0_0x5e71f8(0x5)));
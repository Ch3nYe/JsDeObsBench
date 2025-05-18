const a0_0x13c91e = a0_0x1c39;
function a0_0x1e52() {
    const _0x4a5593 = [
        'split',
        '/dev/stdin',
        'map',
        'reduce'
    ];
    a0_0x1e52 = function () {
        return _0x4a5593;
    };
    return a0_0x1e52();
}
function a0_0x1c39(bbFqZS, key) {
    const stringArray = a0_0x1e52();
    a0_0x1c39 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1c39(bbFqZS, key);
}
function Main(raw_input) {
    const _0x3f92c7 = a0_0x1c39;
    const [line] = raw_input[_0x3f92c7(0x0)]('\x0a');
    const [d, t, s] = toNumArray(line);
    let isYes = t * s >= d;
    console['log'](isYes ? 'Yes' : 'No');
}
Main(require('fs')['readFileSync'](a0_0x13c91e(0x1), 'utf8'));
function toNumArray(str, delimitor = '\x20') {
    const _0x2837e3 = a0_0x1c39;
    return str['split'](delimitor)[_0x2837e3(0x2)](s => parseInt(s, 0xa));
}
function toBitIntArray(str, delimitor = '\x20') {
    const _0x7fd7de = a0_0x1c39;
    return str[_0x7fd7de(0x0)](delimitor)[_0x7fd7de(0x2)](s => BigInt(s));
}
function toMatrix(array, delimitor = '\x20') {
    const _0x51ae83 = a0_0x1c39;
    const result = array[_0x51ae83(0x2)](v => v['split'](delimitor));
    return result;
}
function sum(n) {
    const _0x4d9504 = a0_0x1c39;
    return n[_0x4d9504(0x3)]((a, b) => a + b);
}
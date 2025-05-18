const a0_0x35bfc6 = a0_0x1654;
const main = arg => {
    const _0x4eaaa7 = a0_0x1654;
    arg = arg['trim']()[_0x4eaaa7(0x0)]('\x0a');
    const k = arg[0x0];
    const s = arg[0x1];
    if (s['length'] <= k)
        console['log'](s);
    else
        console[_0x4eaaa7(0x1)](s[_0x4eaaa7(0x2)](0x0, k) + _0x4eaaa7(0x3));
};
function a0_0x1654(VZjcYB, key) {
    const stringArray = a0_0x3de4();
    a0_0x1654 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1654(VZjcYB, key);
}
function a0_0x3de4() {
    const _0x3cf542 = [
        'split',
        'log',
        'slice',
        '...',
        'readFileSync',
        'utf8'
    ];
    a0_0x3de4 = function () {
        return _0x3cf542;
    };
    return a0_0x3de4();
}
main(require('fs')[a0_0x35bfc6(0x4)]('/dev/stdin', a0_0x35bfc6(0x5)));
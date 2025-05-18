const a0_0x3cd749 = a0_0x4807;
function a0_0x4807(WqpHab, key) {
    const stringArray = a0_0x54b8();
    a0_0x4807 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4807(WqpHab, key);
}
function a0_0x54b8() {
    const _0x17aa14 = [
        'filter',
        'split',
        'charCodeAt',
        'fromCharCode',
        'join',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x54b8 = function () {
        return _0x17aa14;
    };
    return a0_0x54b8();
}
function Main(input) {
    const _0x4b5661 = a0_0x4807;
    const inputs = input['split']('\x0a')[_0x4b5661(0x0)](v => v);
    const n = Number(inputs[0x0]);
    const strs = inputs[0x1][_0x4b5661(0x1)]('');
    console['log'](strs['map'](function (s) {
        const _0x4341b5 = a0_0x4807;
        let c = s[_0x4341b5(0x2)]() + n;
        if (c > 0x5a) {
            c -= 0x1a;
        }
        return String[_0x4341b5(0x3)](c);
    })[_0x4b5661(0x4)](''));
}
Main(require('fs')['readFileSync'](a0_0x3cd749(0x5), a0_0x3cd749(0x6)));
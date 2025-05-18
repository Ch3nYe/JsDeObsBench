const a0_0x30f7a0 = a0_0x550f;
(function (stringArrayFunction, comparisonValue) {
    const _0x2aa20e = a0_0x550f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2aa20e(0x106)) / 0x1 * (parseInt(_0x2aa20e(0xf9)) / 0x2) + -parseInt(_0x2aa20e(0xf1)) / 0x3 + parseInt(_0x2aa20e(0x102)) / 0x4 * (parseInt(_0x2aa20e(0x101)) / 0x5) + -parseInt(_0x2aa20e(0xf8)) / 0x6 * (-parseInt(_0x2aa20e(0x104)) / 0x7) + -parseInt(_0x2aa20e(0xf3)) / 0x8 + -parseInt(_0x2aa20e(0xf4)) / 0x9 + parseInt(_0x2aa20e(0x105)) / 0xa * (parseInt(_0x2aa20e(0x103)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4db5, 0x89456));
function a0_0x4db5() {
    const _0x210693 = [
        'resume',
        '836238PdkVfV',
        '2590qyPOUH',
        'data',
        'slice',
        'map',
        'reduce',
        'join',
        'log',
        'utf8',
        '1106305TKYAvL',
        '4JGJbpX',
        '1615339FpfuvB',
        '42APdLgK',
        '30fhcXjN',
        '719UgKszs',
        'setEncoding',
        '741123ryhXIj',
        'trim',
        '6694088nBxaXs',
        '7047783AVJDry',
        'split',
        'stdin'
    ];
    a0_0x4db5 = function () {
        return _0x210693;
    };
    return a0_0x4db5();
}
let content = '';
process['stdin'][a0_0x30f7a0(0xf7)]();
process[a0_0x30f7a0(0xf6)][a0_0x30f7a0(0xf0)](a0_0x30f7a0(0x100));
function a0_0x550f(aUrnlc, key) {
    const stringArray = a0_0x4db5();
    a0_0x550f = function (index, key) {
        index = index - 0xf0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x550f(aUrnlc, key);
}
process[a0_0x30f7a0(0xf6)]['on'](a0_0x30f7a0(0xfa), buf => {
    content += buf;
});
process['stdin']['on']('end', () => {
    const _0x32bb65 = a0_0x30f7a0;
    const lines = content[_0x32bb65(0xf2)]()[_0x32bb65(0xf5)]('\x0a')[_0x32bb65(0xfb)](0x0, -0x1);
    const result = lines['map'](num => num[_0x32bb65(0xf5)]('')[_0x32bb65(0xfc)](n => parseInt(n, 0xa))[_0x32bb65(0xfd)]((prev, cur) => prev + cur));
    console[_0x32bb65(0xff)](result[_0x32bb65(0xfe)]('\x0a'));
});
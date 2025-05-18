const a0_0x3911c0 = a0_0x49f3;
(function (stringArrayFunction, comparisonValue) {
    const _0x2273da = a0_0x49f3;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2273da(0xe1)) / 0x1 + -parseInt(_0x2273da(0xe7)) / 0x2 * (parseInt(_0x2273da(0xdc)) / 0x3) + parseInt(_0x2273da(0xeb)) / 0x4 + -parseInt(_0x2273da(0xdf)) / 0x5 + parseInt(_0x2273da(0xe4)) / 0x6 + -parseInt(_0x2273da(0xe8)) / 0x7 * (-parseInt(_0x2273da(0xe2)) / 0x8) + -parseInt(_0x2273da(0xe5)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d14, 0x58db4));
function Main(inputData) {
    const _0xf98522 = a0_0x49f3;
    init(inputData);
    var a = inI();
    var b = inI();
    outln((a * b / (a + b))[_0xf98522(0xe3)](0xa));
}
var input, inputCnt;
function debug() {
    const _0x2e172b = a0_0x49f3;
    Main(document[_0x2e172b(0xdb)](_0x2e172b(0xe0))[_0x2e172b(0xe9)]);
}
function init(inputData) {
    const _0x61af86 = a0_0x49f3;
    input = inputData[_0x61af86(0xea)](/\n/g, '\x20');
    input = input[_0x61af86(0xec)]('\x20');
    inputCnt = 0x0;
}
const out = output => {
    const _0x1b7d7a = a0_0x49f3;
    console[_0x1b7d7a(0xdd)](output);
};
const outln = output => {
    const _0x485252 = a0_0x49f3;
    console[_0x485252(0xdd)](output + '\x0a');
};
const inS = () => {
    return input[inputCnt++];
};
const inI = () => {
    return parseInt(inS(), 0xa);
};
function a0_0x1d14() {
    const _0x5594ca = [
        '240821aXTKlc',
        'value',
        'replace',
        '2776248UHRVwm',
        'split',
        'getElementById',
        '36snZXfj',
        'log',
        'utf8',
        '1576535bagVAX',
        'input',
        '486699AecpkT',
        '152wskEfK',
        'toFixed',
        '1051416NAQMWk',
        '2190177eORyCY',
        '/dev/stdin',
        '18940tqvRRP'
    ];
    a0_0x1d14 = function () {
        return _0x5594ca;
    };
    return a0_0x1d14();
}
const inF = () => {
    return parseFloat(inS());
};
function a0_0x49f3(zhQoOg, key) {
    const stringArray = a0_0x1d14();
    a0_0x49f3 = function (index, key) {
        index = index - 0xdb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x49f3(zhQoOg, key);
}
Main(require('fs')['readFileSync'](a0_0x3911c0(0xe6), a0_0x3911c0(0xde)));
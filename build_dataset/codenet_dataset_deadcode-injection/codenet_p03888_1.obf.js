const a0_0x180ab7 = a0_0x1e99;
function Main(inputData) {
    init(inputData);
    var a = inI();
    var b = inI();
    outln((a * b / (a + b))['toFixed'](0xa));
}
var input, inputCnt;
function debug() {
    const _0x556339 = a0_0x1e99;
    Main(document[_0x556339(0x0)](_0x556339(0x1))[_0x556339(0x2)]);
}
function a0_0x1824() {
    const _0x36ef2e = [
        'getElementById',
        'input',
        'value',
        'replace',
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1824 = function () {
        return _0x36ef2e;
    };
    return a0_0x1824();
}
function init(inputData) {
    const _0x12a13a = a0_0x1e99;
    input = inputData[_0x12a13a(0x3)](/\n/g, '\x20');
    input = input[_0x12a13a(0x4)]('\x20');
    inputCnt = 0x0;
}
const out = output => {
    const _0x5e2a5a = a0_0x1e99;
    console[_0x5e2a5a(0x5)](output);
};
const outln = output => {
    const _0x308c9d = a0_0x1e99;
    console[_0x308c9d(0x5)](output + '\x0a');
};
const inS = () => {
    return input[inputCnt++];
};
const inI = () => {
    return parseInt(inS(), 0xa);
};
const inF = () => {
    return parseFloat(inS());
};
function a0_0x1e99(swoxYU, key) {
    const stringArray = a0_0x1824();
    a0_0x1e99 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e99(swoxYU, key);
}
Main(require('fs')['readFileSync'](a0_0x180ab7(0x6), a0_0x180ab7(0x7)));
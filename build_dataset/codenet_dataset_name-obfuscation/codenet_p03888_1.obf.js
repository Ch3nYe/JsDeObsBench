function Main(_0x2bc265) {
    init(_0x2bc265);
    var _0x2a89ec = inI();
    var _0x55580c = inI();
    outln((_0x2a89ec * _0x55580c / (_0x2a89ec + _0x55580c))['toFixed'](0xa));
}
var input, inputCnt;
function debug() {
    Main(document['getElementById']('input')['value']);
}
function init(_0x1a7e56) {
    input = _0x1a7e56['replace'](/\n/g, '\x20');
    input = input['split']('\x20');
    inputCnt = 0x0;
}
const out = _0x1c41c2 => {
    console['log'](_0x1c41c2);
};
const outln = _0x16d63e => {
    console['log'](_0x16d63e + '\x0a');
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
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
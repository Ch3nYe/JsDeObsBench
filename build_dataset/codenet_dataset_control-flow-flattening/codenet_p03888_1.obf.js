function Main(inputData) {
    const IzfXjp = {
        'deQQl': function (callee, param1) {
            return callee(param1);
        },
        'eZWNQ': function (callee) {
            return callee();
        },
        'krOJk': function (callee, param1) {
            return callee(param1);
        },
        'VsfEP': function (x, y) {
            return x * y;
        }
    };
    IzfXjp['deQQl'](init, inputData);
    var a = inI();
    var b = IzfXjp['eZWNQ'](inI);
    IzfXjp['krOJk'](outln, (IzfXjp['VsfEP'](a, b) / (a + b))['toFixed'](0xa));
}
var input, inputCnt;
function debug() {
    const INkeuY = {
        'yKONg': function (callee, param1) {
            return callee(param1);
        }
    };
    INkeuY['yKONg'](Main, document['getElementById']('input')['value']);
}
function init(inputData) {
    input = inputData['replace'](/\n/g, '\x20');
    input = input['split']('\x20');
    inputCnt = 0x0;
}
const out = output => {
    console['log'](output);
};
const outln = output => {
    const IftAJJ = {
        'twrIO': function (x, y) {
            return x + y;
        }
    };
    console['log'](IftAJJ['twrIO'](output, '\x0a'));
};
const inS = () => {
    return input[inputCnt++];
};
const inI = () => {
    const goftix = {
        'sWeqE': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return goftix['sWeqE'](parseInt, inS(), 0xa);
};
const inF = () => {
    return parseFloat(inS());
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
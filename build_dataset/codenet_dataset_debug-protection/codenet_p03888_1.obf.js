function Main(inputData) {
    const _0x2118de = (function () {
        let firstCall = !![];
        return function (context, fn) {
            const rfn = firstCall ? function () {
                if (fn) {
                    const res = fn['apply'](context, arguments);
                    fn = null;
                    return res;
                }
            } : function () {
            };
            firstCall = ![];
            return rfn;
        };
    }());
    (function () {
        _0x2118de(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x2f5a28('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2f5a28();
            }
        })();
    }());
    init(inputData);
    var a = inI();
    var b = inI();
    outln((a * b / (a + b))['toFixed'](0xa));
}
var input, inputCnt;
function debug() {
    Main(document['getElementById']('input')['value']);
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
    console['log'](output + '\x0a');
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
function _0x2f5a28(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}
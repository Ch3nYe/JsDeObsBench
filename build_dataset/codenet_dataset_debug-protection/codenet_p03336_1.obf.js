function Main(input) {
    const _0x4f3dd0 = (function () {
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
        _0x4f3dd0(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4dc0fa('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4dc0fa();
            }
        })();
    }());
    input = input['split']('\x0a');
    const row1 = input[0x0]['split']('\x20');
    const N = parseInt(row1[0x0]);
    const M = parseInt(row1[0x1]);
    const K = parseInt(row1[0x2]);
    var S = parseInt(input[0x1], 0x2);
    var T = parseInt(input[0x2], 0x2);
    for (var i = 0x0; i < K; i++) {
        var sANDt = S & T;
        S = S + sANDt;
        T = T + sANDt;
    }
    const sBinary = toBinary(S);
    const tBinary = toBinary(T);
    console['log'](sBinary);
    console['log'](tBinary);
}
function toBinary(a) {
    var num = a, binary = '';
    while (num > 0x0) {
        binary = num % 0x2 + binary;
        num = Math['floor'](num / 0x2);
    }
    return binary;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4dc0fa(ret) {
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
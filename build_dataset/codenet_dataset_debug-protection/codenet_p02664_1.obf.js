function Main(str) {
    const _0x1fcedb = (function () {
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
        _0x1fcedb(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3c4d13('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3c4d13();
            }
        })();
    }());
    let newString = '';
    for (let i = 0x0; i < str['length']; i++) {
        if (str[i] === '?' && (str[i - 0x1] && str[i - 0x1] === 'P' || str[i + 0x1] && str[i + 0x1] === 'P')) {
            newString = newString + 'D';
        } else if (str[i] == '?') {
            newString = newString + 'P';
        } else {
            newString = newString + str[i];
        }
    }
    console['log'](newString);
}
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
Main(input);
function _0x3c4d13(ret) {
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
function Main(input) {
    const _0x37f4f7 = (function () {
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
        _0x37f4f7(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x5cbca4('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5cbca4();
            }
        })();
    }());
    'use strict';
    const elements = input['split']('\x0a');
    let blackFlag = ![];
    let numBlack = 0x0;
    let numWhiteAfterBlack = 0x0;
    for (let i = 0x0; i < elements[0x0]; i++) {
        if (blackFlag === ![] && elements[0x1][i] === '#') {
            blackFlag = !![];
        }
        if (blackFlag === !![] && elements[0x1][i] === '.') {
            numWhiteAfterBlack++;
        }
        if (elements[0x1][i] === '#') {
            numBlack++;
        }
    }
    if (numWhiteAfterBlack === 0x0 && blackFlag === ![]) {
        console['log']('0');
    } else if (numWhiteAfterBlack === 0x0 && blackFlag === !![]) {
        console['log'](numBlack);
    } else if (numBlack <= numWhiteAfterBlack) {
        console['log'](numBlack);
    } else {
        console['log'](numWhiteAfterBlack);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
function _0x5cbca4(ret) {
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
const a0_0x16be03 = (function () {
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
    a0_0x16be03(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x17a3ed('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x17a3ed();
        }
    })();
}());
'use strict';
const DELIMITER = '\x20';
const A_INDEX = 0x0;
const B_INDEX = 0x1;
const K_INDEX = 0x3;
const LIMIT = Math['pow'](0xa, 0x12);
const process = input => {
    const indexArr = input['split'](DELIMITER);
    const ans = parseInt(indexArr[A_INDEX]) - parseInt(indexArr[B_INDEX]);
    const KString = indexArr[K_INDEX];
    const K = parseInt(KString['charAt'](KString['length'] - 0x1));
    if (Math['abs'](ans) > LIMIT) {
        console['log']('Unfair');
    } else {
        console['log'](K % 0x2 === 0x0 || ans === 0x0 ? ans : -ans);
    }
};
process(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function a0_0x17a3ed(ret) {
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
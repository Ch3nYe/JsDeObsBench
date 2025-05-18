'use strict';
function getPair(num) {
    return parseInt(num['toString'](0x2)['split']('')['map'](x => x === '1' ? '0' : '1')['reduce']((acc, cur) => acc + cur, ''), 0x2) + 0x1;
}
function main(input) {
    const _0xaef1d6 = (function () {
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
        _0xaef1d6(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x27fa2f('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x27fa2f();
            }
        })();
    }());
    const inputs = input['split']('\x0a')['filter'](x => x !== '');
    const A = inputs[0x1]['split']('\x20')['map'](Number);
    let sortedA = A['sort']((a, b) => b - a);
    let count = 0x0;
    while (sortedA['length'] > 0x0) {
        let i = sortedA[0x0];
        sortedA['splice'](0x0, 0x1);
        let j = getPair(i);
        let indexJ = sortedA['findIndex'](x => x === j);
        if (indexJ >= 0x0) {
            sortedA['splice'](indexJ, 0x1);
            count++;
        }
    }
    console['log'](count);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x27fa2f(ret) {
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
'use strict';
function main(input) {
    const _0x20d2a2 = (function () {
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
        _0x20d2a2(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4d84af('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4d84af();
            }
        })();
    }());
    const n = Number(input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const m = Number(input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    let a = [];
    let sum = 0x0;
    for (let index = 0x0; index < n; index++) {
        a[index] = input['split']('\x0a')[0x1]['split']('\x20')[index];
        sum += Number(a[index]);
    }
    let count = 0x0;
    for (let index = 0x0; index < n; index++) {
        if (a[index] * (0x4 * m) - sum > 0x0) {
            count++;
        }
    }
    if (count >= m) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4d84af(ret) {
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
'use strict';
function arrayOfDivisors(n) {
    const divisor = new Array();
    divisor[0x0] = 0x1;
    for (let i = 0x2; i <= Math['sqrt'](n); i++) {
        if (n % i === 0x0) {
            divisor['push'](i);
        }
    }
    const p = divisor['length'];
    if (Math['sqrt'](n) !== divisor[p - 0x1]) {
        divisor['push'](n / divisor[p - 0x1]);
    }
    for (let i = p - 0x2; 0x0 <= i; i--) {
        divisor['push'](n / divisor[i]);
    }
    return divisor;
}
(function main(input) {
    const _0x503552 = (function () {
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
        _0x503552(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x48e87b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x48e87b();
            }
        })();
    }());
    const n = Number(input['trim']());
    const subOnly = arrayOfDivisors(n - 0x1)['length'] - 0x1;
    let divIncluded = 0x0;
    const divOfN = arrayOfDivisors(n);
    divOfN['shift']();
    for (let d of divOfN) {
        let n1 = n;
        do {
            n1 /= d;
        } while (n1 % d === 0x0);
        if (n1 === 0x1) {
            divIncluded++;
        } else if (arrayOfDivisors(n1 - 0x1)['indexOf'](d) > -0x1) {
            divIncluded++;
        }
    }
    console['log'](subOnly + divIncluded);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x48e87b(ret) {
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
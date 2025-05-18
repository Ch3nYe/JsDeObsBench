'use strict';
function main(input) {
    const _0x47abe7 = (function () {
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
    const inputs = input['split']('\x0a')['filter'](x => x !== '');
    const n = inputs[0x0];
    const a = inputs[0x1]['split']('\x20')['map'](x => Number(x));
    let result = 0x1;
    while (testN(result, a) === ![]) {
        result = result + 0x1;
    }
    console['log'](result);
    function testN(n, a) {
        (function () {
            _0x47abe7(this, function () {
                const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                const result = _0x254e54('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x254e54();
                }
            })();
        }());
        let current = '0'['repeat'](a[0x0]);
        for (let i = 0x1; i < a['length']; i++) {
            if (a[i - 0x1] < a[i]) {
                current = current + '0'['repeat'](a[i] - a[i - 0x1]);
            } else {
                current = parseInt(current['substring'](0x0, a[i]), n) + 0x1;
                if (isNaN(current)) {
                    return ![];
                }
                current = '' + current;
                if (current['length'] > a[i]) {
                    return ![];
                } else {
                    current = '0'['repeat'](a[i] - current['length']) + current;
                }
            }
        }
        return !![];
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x254e54(ret) {
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
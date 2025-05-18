'use strict';
function Main(input) {
    const _0xd246a1 = (function () {
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
        _0xd246a1(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x35e464('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x35e464();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    let WHN = input[0x0]['split']('\x20')['map'](Number);
    let minX = 0x0;
    let minY = 0x0;
    let maxX = WHN[0x0];
    let maxY = WHN[0x1];
    const N = WHN[0x2];
    for (let i = 0x1; i <= N; i++) {
        let tmp = input[i]['trim']()['split']('\x20')['map'](Number);
        let A = tmp[0x2];
        if (A === 0x1) {
            if (tmp[0x0] > minX) {
                minX = tmp[0x0];
            }
        } else if (A === 0x2) {
            if (tmp[0x0] < maxX) {
                maxX = tmp[0x0];
            }
        } else if (A === 0x3) {
            if (tmp[0x1] > minY) {
                minY = tmp[0x1];
            }
        } else if (A === 0x4) {
            if (tmp[0x1] < maxY) {
                maxY = tmp[0x1];
            }
        }
    }
    const X = maxX - minX;
    const Y = maxY - minY;
    if (X <= 0x0 || Y <= 0x0) {
        console['log'](0x0);
    } else {
        console['log'](X * Y);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x35e464(ret) {
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
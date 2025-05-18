function Main(input) {
    const _0x4aed50 = (function () {
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
        _0x4aed50(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x5618a5('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5618a5();
            }
        })();
    }());
    'use strict';
    const temp = input['split']('\x0a');
    const n = parseInt(temp['shift'](), 0xa);
    for (let i = 0x0; i < n; i++) {
        temp[i] = temp[i]['split']('\x20');
        temp[i]['push'](i + 0x1);
        temp[i][0x1] = parseInt(temp[i][0x1], 0xa);
    }
    temp['sort']((a, b) => b[0x1] - a[0x1]);
    temp['sort']((a, b) => {
        if (a[0x0] < b[0x0])
            return -0x1;
        else if (a[0x0] > b[0x0])
            return 0x1;
        else
            0x0;
    });
    const ans = temp['map'](e => e[0x2]);
    console['log'](ans['join']('\x0a'));
    return ![];
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5618a5(ret) {
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
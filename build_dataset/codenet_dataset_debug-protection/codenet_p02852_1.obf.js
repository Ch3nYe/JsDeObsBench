function Main(input) {
    const _0x2c2483 = (function () {
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
        _0x2c2483(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x2d0642('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2d0642();
            }
        })();
    }());
    input = input['split']('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const M = input[0x0]['split']('\x20')[0x1] - 0x0;
    const S = input[0x1];
    var cur = S['length'] - 0x1;
    var ret = [];
    while (cur > 0x0) {
        if (cur <= M) {
            ret['unshift'](cur);
            break;
        }
        for (var i = 0x0; i < M; i++) {
            if (S[cur - M + i] === '0') {
                ret['unshift'](M - i);
                cur = cur - M + i;
                break;
            }
            if (i === M - 0x1) {
                console['log'](-0x1);
                return;
            }
        }
    }
    console['log'](ret['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2d0642(ret) {
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
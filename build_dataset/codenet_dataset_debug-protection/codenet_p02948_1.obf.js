'use strict';
function Main(input) {
    const _0x2088b2 = (function () {
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
        _0x2088b2(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3f620e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3f620e();
            }
        })();
    }());
    const N = Number(input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const M = Number(input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const list = input['split']('\x0a')['slice'](0x1)['map'](x => x['split']('\x20')['map'](x => Number(x)))['filter'](x => x[0x0] <= M)['sort']((a, b) => {
        if (a[0x1] === b[0x1]) {
            return b[0x0] - a[0x0];
        } else {
            return b[0x1] - a[0x1];
        }
    });
    let ans = 0x0;
    let now = 0x0;
    if (list['length'] === 0x0) {
        console['log'](0x0);
        return;
    }
    for (let i = 0x0; i < N; i++) {
        if (now === M) {
            break;
        }
        if (list[i][0x0] > M - now) {
            continue;
        }
        ans += list[i][0x1];
        now++;
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function _0x3f620e(ret) {
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
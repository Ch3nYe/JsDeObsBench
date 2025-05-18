'use strict';
function Main(input) {
    const _0x3cf7a6 = (function () {
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
        _0x3cf7a6(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x23e198('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x23e198();
            }
        })();
    }());
    const tmp = input['trim']()['split']('\x0a');
    const D = Number(tmp[0x0]);
    const C = tmp[0x1]['split']('\x20')['map'](v => Number(v));
    const S = tmp['slice'](0x2, 0x7)['map'](v => v['split']('\x20')['map'](v => Number(v)));
    const T = tmp['slice'](-0x5)['map'](v => Number(v));
    let LastContestDays = Array(0x1a)['fill'](0x0);
    let currnetContestLebels = Array(0x1a)['fill'](0x0);
    let lebel = 0x0;
    for (let i = 0x1; i <= D; i++) {
        LastContestDays[T[i - 0x1] - 0x1] = i;
        for (let j = 0x0; j < C['length']; j++) {
            if (LastContestDays[j] === i) {
                currnetContestLebels[j] = S[i - 0x1][j];
            } else {
                currnetContestLebels[j] = C[j] * (i - LastContestDays[j]) * -0x1;
            }
        }
        lebel += currnetContestLebels['reduce']((acc, cur) => acc + cur);
        console['log'](String(lebel));
    }
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x23e198(ret) {
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
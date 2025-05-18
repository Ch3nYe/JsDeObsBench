'use strict';
function main(input) {
    const _0x2f572c = (function () {
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
        _0x2f572c(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3a9165('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3a9165();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    const N = parseInt(lines['shift']());
    const A = lines['shift']()['split']('\x20')['map'](x => parseInt(x))['sort']((a, b) => a - b);
    const B = lines['shift']()['split']('\x20')['map'](x => parseInt(x))['sort']((a, b) => a - b);
    const C = lines['shift']()['split']('\x20')['map'](x => parseInt(x))['sort']((a, b) => a - b);
    let result = 0x0;
    for (let b = 0x0; b < N; b++) {
        let current_b = B[b];
        let count_a = N;
        for (let a = 0x0; a < N; a++) {
            if (current_b <= A[a]) {
                count_a--;
            }
        }
        let count_c = N;
        for (let c = 0x0; c < N; c++) {
            if (current_b >= C[c]) {
                count_c--;
            }
        }
        result += count_a * count_c;
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3a9165(ret) {
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
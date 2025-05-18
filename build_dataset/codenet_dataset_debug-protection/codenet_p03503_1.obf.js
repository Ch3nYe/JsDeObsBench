'use strict';
function main(input) {
    const _0x35d92e = (function () {
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
        _0x35d92e(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x545667('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x545667();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    const N = parseInt(lines['shift']());
    const F = [];
    for (let i = 0x0; i < N; i++) {
        F['push'](lines[i]['split']('\x20')['map'](x => parseInt(x)));
    }
    const P = [];
    for (let i = 0x0; i < N; i++) {
        P['push'](lines[i + N]['split']('\x20')['map'](x => parseInt(x)));
    }
    let result = -Infinity;
    for (let i = 0x1; i < 0x400; i++) {
        let score = 0x0;
        for (let j = 0x0; j < N; j++) {
            let store = F[j];
            let p_index = (parseInt(store['join'](''), 0x2) & i)['toString'](0x2)['split']('')['map'](x => Number(x))['reduce']((a, b) => a + b, 0x0);
            score += P[j][p_index];
        }
        if (score > result) {
            result = score;
        }
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x545667(ret) {
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
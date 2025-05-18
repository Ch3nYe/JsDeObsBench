'use strict';
function main(input) {
    const _0xa795db = (function () {
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
        _0xa795db(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x5e1f98('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x5e1f98();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    let ABC = input['shift']()['split']('\x20')['map'](v => Number(v));
    const N = ABC['shift']();
    input = input['map'](v => Number(v))['sort']((a, b) => b - a);
    const INF = Math['pow'](0xa, 0x9);
    const dfs = (cur, a, b, c) => {
        if (cur === N) {
            if (Math['min'](a, b, c) > 0x0) {
                return Math['abs'](a - ABC[0x0]) + Math['abs'](b - ABC[0x1]) + Math['abs'](c - ABC[0x2]) - 0x1e;
            }
            return INF;
        }
        return Math['min'](dfs(cur + 0x1, a, b, c), dfs(cur + 0x1, a + input[cur], b, c) + 0xa, dfs(cur + 0x1, a, b + input[cur], c) + 0xa, dfs(cur + 0x1, a, b, c + input[cur]) + 0xa);
    };
    console['log'](dfs(0x0, 0x0, 0x0, 0x0));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x5e1f98(ret) {
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
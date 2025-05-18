'use strict';
function main(input) {
    const _0x45a231 = (function () {
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
        _0x45a231(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4e038d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4e038d();
            }
        })();
    }());
    input = input['split'](/\r?\n/);
    input = input[0x1]['split']('\x20')['map'](v => ~~v)['sort']((a, b) => b - a);
    let ans = 0x0;
    let sticks = [];
    let prev = input[0x0];
    for (let i = 0x1; i < input['length']; i++) {
        if (prev == input[i]) {
            sticks['push'](prev);
            sticks['push'](input[i]);
            prev = 0x0;
        } else {
            prev = input[i];
        }
    }
    if (sticks['length'] >= 0x4) {
        ans = sticks[0x0] * sticks[0x3];
        console['log'](ans);
    } else {
        console['log'](0x0);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4e038d(ret) {
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
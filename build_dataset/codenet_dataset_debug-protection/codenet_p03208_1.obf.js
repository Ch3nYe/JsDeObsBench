'use strict';
function main(arg) {
    const _0x3efb22 = (function () {
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
        _0x3efb22(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4c2a28('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4c2a28();
            }
        })();
    }());
    const inputs = arg['split']('\x0a');
    const N = parseInt(inputs[0x0]['split']('\x20')[0x0]);
    const K = parseInt(inputs[0x0]['split']('\x20')[0x1]);
    const list = inputs['slice'](0x1, N + 0x1)['map'](x => parseInt(x))['sort']((a, b) => {
        return a - b;
    });
    let i, sa = [];
    for (i = 0x0; i < N - K + 0x1; ++i)
        sa['push'](list[i + K - 0x1] - list[i]);
    console['log'](Math['min'](...sa));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4c2a28(ret) {
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
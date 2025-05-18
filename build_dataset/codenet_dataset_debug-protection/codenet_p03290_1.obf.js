'use strict';
function main(input) {
    const _0x2474f4 = (function () {
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
        _0x2474f4(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4be08e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4be08e();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const DG = input['shift']()['split']('\x20')['map'](v => Number(v));
    input = input['map'](v => v['split']('\x20')['map'](v => Number(v)));
    const calc = (a, r) => {
        let count = [Math['pow'](0xa, 0x8)];
        for (let i = 0x0; i < DG[0x0]; i++) {
            const cur = Math['pow'](0x2, i);
            if ((a & cur) === cur) {
                const points = (i + 0x1) * 0x64;
                let max = points * input[i][0x0] + input[i][0x1];
                let num = Math['ceil'](r / points);
                if (max < r) {
                    count['push'](input[i][0x0] + calc(a - cur, r - max));
                } else {
                    count['push'](num < input[i][0x0] ? num : input[i][0x0]);
                }
            }
        }
        return Math['min'](...count);
    };
    console['log'](calc(Math['pow'](0x2, DG[0x0]) - 0x1, DG[0x1]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4be08e(ret) {
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
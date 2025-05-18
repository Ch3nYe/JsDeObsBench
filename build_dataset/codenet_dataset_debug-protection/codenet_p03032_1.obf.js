'use strict';
function main(input) {
    const _0x235a18 = (function () {
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
        _0x235a18(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x1df057('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1df057();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const NK = input['shift']()['split']('\x20')['map'](val => Number(val));
    const count = Math['min'](...NK);
    input = input[0x0]['split']('\x20')['map'](val => Number(val));
    const ans = [];
    for (let l = 0x0; l <= count; l++) {
        for (let r = 0x0; r <= count - l; r++) {
            let temp = [
                ...input['slice'](0x0, l),
                ...input['slice'](NK[0x0] - r)
            ]['sort']((a, b) => a - b);
            let remain = NK[0x1] - l - r;
            for (let i = 0x0; i < remain; i++) {
                if (temp[i] >= 0x0)
                    break;
                temp[i] = 0x0;
            }
            ans['push'](temp['reduce']((p, c) => p + c, 0x0));
        }
    }
    console['log'](Math['max'](...ans));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1df057(ret) {
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
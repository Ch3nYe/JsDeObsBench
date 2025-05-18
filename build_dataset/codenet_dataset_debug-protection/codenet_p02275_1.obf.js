(function main() {
    const _0x4d0eca = (function () {
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
        _0x4d0eca(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x49c653('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x49c653();
            }
        })();
    }());
    const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    const n = Number(lines['shift']());
    const arr = lines['shift']()['split']('\x20')['map'](Number);
    const k = 0x2710;
    let cnt_arr = [];
    for (let i = 0x0; i <= k; i++)
        cnt_arr[i] = 0x0;
    for (let i = 0x0; i < n; i++)
        cnt_arr[arr[i]]++;
    for (let i = 0x1; i <= k; i++)
        cnt_arr[i] += cnt_arr[i - 0x1];
    let out_arr = [];
    for (let i = n - 0x1; i >= 0x0; i--)
        out_arr[--cnt_arr[arr[i]]] = arr[i];
    console['log'](out_arr['join']('\x20'));
}());
function _0x49c653(ret) {
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
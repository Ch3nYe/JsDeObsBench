(function main() {
    const _0x4a1264 = (function () {
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
        _0x4a1264(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x18de08('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x18de08();
            }
        })();
    }());
    const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    const n1 = Number(lines['shift']());
    const arr1 = lines['shift']()['split']('\x20')['map'](Number);
    const n2 = Number(lines['shift']());
    const arr2 = lines['shift']()['split']('\x20')['map'](Number);
    const solve = (i, m) => {
        if (m == 0x0)
            return !![];
        if (i >= n1)
            return ![];
        return solve(i + 0x1, m) || solve(i + 0x1, m - arr1[i]);
    };
    arr2['map'](m => solve(0x0, m) ? 'yes' : 'no')['forEach'](res => console['log'](res));
}());
function _0x18de08(ret) {
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
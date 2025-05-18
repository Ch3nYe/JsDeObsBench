function max(array) {
    var result = -0x1 * Infinity;
    for (num of array) {
        if (result < num) {
            result = num;
        }
    }
    return result;
}
function main(input) {
    const _0x2946e3 = (function () {
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
        _0x2946e3(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4e7c4b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4e7c4b();
            }
        })();
    }());
    const lines = input['split']('\x0a');
    const nums = lines['map'](line => line['split']('\x20')['map'](x => parseInt(x)));
    var n_c = nums['shift']();
    const N = n_c[0x0];
    const C = n_c[0x1];
    const t = Array(0x30d42);
    const max_recorders = Array(0x30d42);
    max_recorders['fill'](0x0);
    for (var c = 0x1; c <= C; c++) {
        t['fill'](0x0);
        for (var n = 0x0; n < N; n++) {
            if (nums[n][0x2] == c) {
                t[nums[n][0x0] * 0x2 - 0x1]++;
                t[nums[n][0x1] * 0x2]--;
            }
        }
        for (var i = 0x1; i < 0x30d42; i++) {
            t[i] += t[i - 0x1];
        }
        for (var i = 0x1; i < 0x30d42; i++) {
            if (t[i] > 0x0) {
                max_recorders[i]++;
            }
        }
    }
    console['log'](max(max_recorders));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4e7c4b(ret) {
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
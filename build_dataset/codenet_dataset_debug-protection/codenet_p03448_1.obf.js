function main(input) {
    const _0x4ba6bf = (function () {
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
        _0x4ba6bf(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4fbc7b('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4fbc7b();
            }
        })();
    }());
    const input_array = input['split']('\x0a');
    const coins_count = input_array['slice'](0x0, 0x3);
    const desired_sum = parseInt(input_array['slice'](-0x1), 0xa);
    var answer = 0x0;
    for (i = 0x0; i <= parseInt(coins_count[0x0], 0xa); i++) {
        for (j = 0x0; j <= parseInt(coins_count[0x1], 0xa); j++) {
            for (k = 0x0; k <= parseInt(coins_count[0x2], 0xa); k++) {
                if (0x1f4 * i + 0x64 * j + 0x32 * k == desired_sum) {
                    answer++;
                }
            }
        }
    }
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4fbc7b(ret) {
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
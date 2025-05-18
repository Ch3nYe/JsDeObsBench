function Main(input) {
    const _0x3f1f84 = (function () {
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
        _0x3f1f84(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4215fa('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4215fa();
            }
        })();
    }());
    input = input['split']('\x0a');
    const input1 = input[0x0]['split']('\x20');
    const N = parseInt(input1[0x0]);
    const K = parseInt(input1[0x1]);
    const As = input[0x1]['split']('\x20')['map'](x => parseInt(x));
    var count = 0x0;
    for (i = 0x0; i < N; i++) {
        var u = As['slice'](i + 0x1)['filter'](x => x < As[i])['length'];
        var v = As['filter'](x => x < As[i])['length'];
        count += u * K % (0x3b9aca00 + 0x7);
        count += v * (K - 0x1) * K / 0x2 % (0x3b9aca00 + 0x7);
        count = count % (0x3b9aca00 + 0x7);
    }
    console['log'](count);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4215fa(ret) {
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
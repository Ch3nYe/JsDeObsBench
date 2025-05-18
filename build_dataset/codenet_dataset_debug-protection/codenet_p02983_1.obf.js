function Main(input) {
    const _0x34c06a = (function () {
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
        _0x34c06a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x529879('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x529879();
            }
        })();
    }());
    input = input['split']('\x0a');
    inputStr = input[0x0]['split']('\x20');
    const L = Number['parseInt'](inputStr[0x0]);
    const R = Number['parseInt'](inputStr[0x1]);
    var min = 0x7e2;
    if (L * R > 0x7e3) {
        if (R - L < 0x7e3) {
            const L2 = L % 0x7e3;
            const R2 = R % 0x7e3;
            for (var i1 = L2; i1 < R2; i1++) {
                for (var i2 = i1 + 0x1; i2 < R2 + 0x1; i2++) {
                    min = Math['min'](min, i1 * i2 % 0x7e3);
                    if (min === 0x0) {
                        break;
                    }
                }
            }
            console['log'](min);
        } else {
            console['log'](0x0);
        }
    } else {
        console['log'](L * (L + 0x1));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x529879(ret) {
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
function Main(input) {
    const _0x10684c = (function () {
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
        _0x10684c(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x369764('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x369764();
            }
        })();
    }());
    input = input['split']('\x0a');
    input['shift']();
    let xy = input['map'](val => val['split']('\x20')['map'](Number));
    let arr0 = xy['map'](val => val[0x0] + val[0x1]);
    let arr1 = xy['map'](val => val[0x0] - val[0x1]);
    let arr0_calc = Math['max'](...arr0) - Math['min'](...arr0);
    let arr1_calc = Math['max'](...arr1) - Math['min'](...arr1);
    console['log'](Math['max'](arr0_calc, arr1_calc));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x369764(ret) {
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
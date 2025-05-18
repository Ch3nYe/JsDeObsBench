function Main(inputs) {
    const _0x2a94e8 = (function () {
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
    const inputline = inputs['split']('\x0a')['map'](x => parseInt(x, 0xa));
    const line = inputline[0x0];
    function base26(number) {
        (function () {
            _0x2a94e8(this, function () {
                const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
                const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                const result = _0x4d8ab0('init');
                if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                    result('0');
                } else {
                    _0x4d8ab0();
                }
            })();
        }());
        let remainder26 = number % 0x1a;
        let division26 = Math['floor'](number / 0x1a);
        let output = remainder26 != 0x0 ? String['fromCharCode'](0x40 + remainder26) : (--division26, 'Z');
        return output = division26 != 0x0 ? base26(division26) + output : output;
    }
    console['log'](base26(line)['toLowerCase']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x4d8ab0(ret) {
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
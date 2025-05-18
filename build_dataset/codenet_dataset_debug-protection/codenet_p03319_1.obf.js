function Main(input) {
    var _0x9340a8 = (function () {
        var firstCall = !![];
        return function (context, fn) {
            var rfn = firstCall ? function () {
                if (fn) {
                    var res = fn['apply'](context, arguments);
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
        _0x9340a8(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xd66c9('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xd66c9();
            }
        })();
    }());
    var NKA = input['split']('\x0a');
    var NK = NKA[0x0]['split']('\x20');
    var N = parseInt(NK[0x0], 0xa);
    var K = parseInt(NK[0x1], 0xa);
    var A = NKA[0x1]['split']('\x20')['map'](v => parseInt(v, 0xa));
    var minPoint = A['indexOf'](0x1);
    var left = Math['ceil'](minPoint / (K - 0x1));
    var right = Math['ceil']((N - minPoint - 0x1) / (K - 0x1));
    console['log'](left + right);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0xd66c9(ret) {
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
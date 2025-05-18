function main(input) {
    var _0x5cf7a7 = (function () {
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
        _0x5cf7a7(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x37205d('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x37205d();
            }
        })();
    }());
    const args = input['split']('\x20');
    var A = Number(args[0x0]);
    var B = Number(args[0x1]);
    var K = Number(args[0x2]);
    var cu = 0x0;
    var sum;
    var count = 0x0;
    for (cu = A; cu > 0x0; --cu) {
        if (Number['isInteger'](A / cu) && Number['isInteger'](B / cu)) {
            count++;
            if (count === K) {
                sum = cu;
                break;
            }
        }
    }
    console['log'](sum);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x37205d(ret) {
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
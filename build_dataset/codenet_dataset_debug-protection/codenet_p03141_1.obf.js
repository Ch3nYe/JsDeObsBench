'use strict';
function Main(input) {
    var _0x3da93a = (function () {
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
        _0x3da93a(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x2c5976('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x2c5976();
            }
        })();
    }());
    var lines = input['split']('\x0a');
    var N = lines['shift']() - 0x0;
    var ryo = new Array(N);
    for (var n = 0x0; n < N; n++) {
        var nums = lines[n]['split']('\x20');
        ryo[n] = {
            'taka': nums[0x0] - 0x0,
            'aoki': nums[0x1] - 0x0
        };
        ryo[n]['sa'] = ryo[n]['aoki'] - ryo[n]['taka'];
    }
    ryo['sort'](function (a, b) {
        return b['sa'] - a['sa'];
    });
    ryo['sort'](function (a, b) {
        return b['taka'] - a['taka'];
    });
    var koufuku = 0x0;
    for (var n = 0x0; n < N; n++) {
        if (n % 0x2 == 0x0) {
            koufuku += ryo[n]['taka'];
            ryo[n]['taka'] = 0x0;
        } else {
            koufuku -= ryo[n]['aoki'];
            ryo[n]['aoki'] = 0x0;
        }
    }
    console['log'](koufuku);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x2c5976(ret) {
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
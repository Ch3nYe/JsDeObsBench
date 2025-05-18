(function (input) {
    var _0x13ffc1 = (function () {
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
        _0x13ffc1(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x12c02a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x12c02a();
            }
        })();
    }());
    var p = input['replace'](/\n$/, '')['split']('\x0a')['map'](Number);
    var n = p['length'];
    for (var i = 0x0; i < n; i++) {
        var g = p['shift']();
        var s = [];
        g['toString'](0x2)['split']('')['reverse']()['map'](function (e, i) {
            if (e == 0x1) {
                s['push'](Math['pow'](0x2, i));
            }
        });
        console['log'](s['join']('\x20'));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function _0x12c02a(ret) {
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
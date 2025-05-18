function comb(r) {
    var _0x5f1a08 = (function () {
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
        _0x5f1a08(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x1f3eca('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1f3eca();
            }
        })();
    }());
    var c = [];
    c[0x0] = -0x1;
    var k = 0x1;
    c[0x1] = 0x0;
    var ret = [];
    while (k != 0x0) {
        for (var i = k + 0x1; i <= r; i++) {
            c[i] = c[i - 0x1] + 0x1;
        }
        var arr = [];
        for (var i = 0x1; i <= r; i++) {
            arr['push'](c[i]);
        }
        ret['push'](arr);
        k = r;
        while (c[k] == 0x9 - r + k)
            k = k - 0x1;
        c[k] = c[k] + 0x1;
    }
    return ret;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var nums = line['split']('\x20');
    var n = +nums[0x0];
    var s = +nums[0x1];
    if (n + s == 0x0)
        break;
    var c = comb(n);
    var cnt = 0x0;
    for (var i = 0x0; i < c['length']; i++) {
        var arr = c[i];
        if (s == arr['reduce'](function (prev, now) {
                return prev + now;
            })) {
            cnt++;
        }
    }
    console['log'](cnt);
}
function _0x1f3eca(ret) {
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
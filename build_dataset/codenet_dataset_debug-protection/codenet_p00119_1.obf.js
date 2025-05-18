var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var m = Arr['shift']() - 0x0;
var n = Arr['shift']() - 0x0;
var M = [];
var check = [];
for (var i = 0x0; i < m; i++)
    M[i] = [];
for (var i = 0x0; i < m; i++)
    check[i] = ![];
for (var i = 0x0; i < n; i++) {
    var v = Arr['shift']()['split']('\x20')['map'](Number);
    M[v[0x0] - 0x1]['push'](v[0x1] - 0x1);
}
var L = [];
for (var i = 0x0; i < m; i++) {
    visit(i);
}
function visit(x) {
    var _0x451566 = (function () {
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
        _0x451566(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0xa36916('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0xa36916();
            }
        })();
    }());
    if (check[x] == !![])
        return;
    else
        check[x] = !![];
    M[x]['forEach'](function (v) {
        visit(v);
    });
    L['push'](x);
}
L['reverse']();
L['forEach'](function (v) {
    console['log'](v + 0x1);
});
function _0xa36916(ret) {
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
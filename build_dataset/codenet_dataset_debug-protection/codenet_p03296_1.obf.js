'use strict';
function myin() {
    return require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
}
function myout(t) {
    console['log'](t);
}
function myconv(i, no) {
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i['split']('\x20');
    case 0x3:
        return i['split']('\x0a');
    case 0x4:
        return i['split']('\x20')['map'](a => Number(a));
    case 0x5:
        return i['split']('\x0a')['map'](a => Number(a));
    case 0x6:
        return i['split']('');
    case 0x7:
        return i['split']('')['map'](a => Number(a));
    }
}
function Main(input) {
    var _0x5de9db = (function () {
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
        _0x5de9db(this, function () {
            var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            var result = _0x4e6149('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4e6149();
            }
        })();
    }());
    input = myconv(input, 0x3);
    var N = myconv(input[0x0], 0x1);
    var list = myconv(input[0x1], 0x4);
    var output = 0x0;
    for (var i = 0x0; i < N - 0x1; i++) {
        var mae = list[i];
        var ato = list[i + 0x1];
        if (mae == ato) {
            output++;
            list[i + 0x1] = -0x1;
        }
    }
    myout(output);
}
Main(myin());
function _0x4e6149(ret) {
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
var a0_0x11bf2c = (function () {
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
    a0_0x11bf2c(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5d198a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5d198a();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var a = arr['shift']()['split']('');
    if (a['join']('') == '-')
        break;
    var b = arr['shift']()['split']('');
    var c = arr['shift']()['split']('');
    var obj = {};
    a['forEach'](function (v) {
        obj[v] = !![];
    });
    var str = '';
    var m = '';
    c['forEach'](function (v) {
        if (obj['hasOwnProperty'](v)) {
            if (m == '') {
                m = a['shift']();
                m = a['shift']();
            } else {
                m = a['shift']();
            }
        } else {
            while (!![]) {
                if (m == v) {
                    m = a['shift']();
                    break;
                } else {
                    str += m;
                    m = b['shift']();
                }
            }
        }
    });
    str += m;
    str += b['join']('');
    console['log'](str);
}
function a0_0x5d198a(ret) {
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
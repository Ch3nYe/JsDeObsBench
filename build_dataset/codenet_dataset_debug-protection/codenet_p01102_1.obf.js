var a0_0x5f3c57 = (function () {
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
    a0_0x5f3c57(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x5b0963('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5b0963();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var a = arr['shift']();
    if (a == '.')
        break;
    var b = arr['shift']();
    var memo = [];
    var aa = a['replace'](/".*?"/g, function (s) {
        memo['push'](s);
        return '\x22';
    });
    var cnt = 0x0;
    var bb = b['replace'](/".*?"/g, function (s) {
        if (s != memo['shift']())
            cnt++;
        return '\x22';
    });
    if (aa == bb && cnt == 0x0)
        console['log']('IDENTICAL');
    else if (aa == bb && cnt == 0x1)
        console['log']('CLOSE');
    else if (aa != bb || aa == bb && cnt > 0x1)
        console['log']('DIFFERENT');
}
function a0_0x5b0963(ret) {
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
var a0_0x34131a = (function () {
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
    a0_0x34131a(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x2de438('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2de438();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nh = arr['shift']();
    if (nh == '0\x200')
        break;
    nh = nh['split']('\x20')['map'](Number);
    var n = nh[0x0];
    var h = nh[0x1];
    var xyz = [];
    for (var i = 0x0; i < n; i++) {
        xyz[i] = [];
        for (var j = 0x0; j < n; j++) {
            xyz[i][j] = [];
            for (var k = 0x0; k < n; k++) {
                xyz[i][j][k] = 0x0;
            }
        }
    }
    for (var I = 0x0; I < h; I++) {
        var ary = arr['shift']()['split']('\x20');
        var c = ary['shift']();
        ary = ary['map'](function (v) {
            return v - 0x1;
        });
        if (c == 'xy') {
            for (var i = 0x0; i < n; i++)
                xyz[ary[0x0]][ary[0x1]][i] = 0x1;
        } else if (c == 'xz') {
            for (var i = 0x0; i < n; i++)
                xyz[ary[0x0]][i][ary[0x1]] = 0x1;
        } else if (c == 'yz') {
            for (var i = 0x0; i < n; i++)
                xyz[i][ary[0x0]][ary[0x1]] = 0x1;
        }
    }
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            for (var k = 0x0; k < n; k++) {
                if (xyz[i][j][k] == 0x0)
                    cnt++;
                ;
            }
        }
    }
    console['log'](cnt);
}
function a0_0x2de438(ret) {
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
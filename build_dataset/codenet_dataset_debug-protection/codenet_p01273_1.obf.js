var a0_0x532575 = (function () {
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
    a0_0x532575(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x3ebd56('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3ebd56();
        }
    })();
}());
var data = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var input = data['trim']()['split']('\x0a');
var line = 0x0;
while (!![]) {
    var nm = input[line]['split']('\x20')['map'](Number);
    line++;
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0 && m == 0x0)
        break;
    var infected = [];
    for (var i = 0x0; i < n; i++)
        infected[i] = !![];
    infected[0x0] = ![];
    var tsd = [];
    for (var i = 0x0; i < m; i++) {
        var packet = input[line]['split']('\x20')['map'](Number);
        line++;
        tsd['push']([
            packet[0x0],
            packet[0x1] - 0x1,
            packet[0x2] - 0x1
        ]);
    }
    tsd['sort'](function (a, b) {
        return a[0x0] - b[0x0];
    });
    tsd['forEach'](function (packet) {
        var s = packet[0x1];
        var d = packet[0x2];
        if (!infected[s])
            infected[d] = ![];
    });
    var answer = 0x0;
    infected['forEach'](function (packet) {
        if (!packet)
            answer++;
    });
    console['log'](answer);
}
function a0_0x3ebd56(ret) {
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
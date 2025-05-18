var a0_0x421deb = (function () {
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
    a0_0x421deb(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x1255f4('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1255f4();
        }
    })();
}());
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var base = [
        '',
        '',
        '',
        '',
        ''
    ];
    for (var i = 0x0; i < n; i++) {
        var [d, p, q] = arr['shift']()['split']('\x20')['map'](Number);
        q--;
        if (d == 0x1) {
            var max = 0x0;
            for (var j = 0x0; j < p; j++)
                max = Math['max'](max, base[q + j]['length']);
            for (var j = 0x0; j < p; j++) {
                while (base[q + j]['length'] < max)
                    base[q + j] += '0';
                base[q + j] += '1';
            }
        } else if (d == 0x2) {
            for (var j = 0x0; j < p; j++)
                base[q] += '1';
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < 0x5; i++)
        max = Math['max'](max, base[i]['length']);
    for (var i = 0x0; i < 0x5; i++) {
        while (base[i]['length'] < max)
            base[i] += '0';
    }
    var cnt = 0x0;
    for (var i = 0x0; i < max; i++) {
        var str = base['map'](v => v[i])['join']('');
        str = str['replace']('11111', '')['replace'](/0/g, '');
        cnt += str['length'];
    }
    console['log'](cnt);
}
function a0_0x1255f4(ret) {
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
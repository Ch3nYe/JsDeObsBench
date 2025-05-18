var a0_0x54edab = (function () {
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
    a0_0x54edab(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4688ab('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4688ab();
        }
    })();
}());
line = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
n = parseInt(line[0x0]);
v = line[0x1]['split']('\x20');
var odds = {};
var even = {};
for (var i = 0x0; i < v['length']; i++) {
    di = i & 0x1 ? even : odds;
    di[v[i]] = !di[v[i]] ? 0x1 : di[v[i]] + 0x1;
}
var a = [];
var b = [];
for (var k in odds)
    a['push']({
        'v': k,
        'n': odds[k]
    });
for (var k in even)
    b['push']({
        'v': k,
        'n': even[k]
    });
a['sort']((x, y) => y['n'] - x['n']);
b['sort']((x, y) => y['n'] - x['n']);
va = a[0x0];
vb = b[0x0];
if (va['v'] === vb['v']) {
    if (va['n'] > vb['n'])
        vb = !b[0x1] ? { 'n': 0x0 } : b[0x1];
    else
        va = !a[0x1] ? { 'n': 0x0 } : a[0x1];
}
log = console['log'];
log(n / 0x2 - va['n'] + n / 0x2 - vb['n']);
function a0_0x4688ab(ret) {
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
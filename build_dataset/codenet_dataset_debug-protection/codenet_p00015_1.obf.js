var a0_0x8f3616 = (function () {
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
    a0_0x8f3616(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x220752('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x220752();
        }
    })();
}());
function pad(n) {
    while (n['length'] < 0x7) {
        n = '0' + n;
    }
    return n;
}
function divide(s) {
    var a = [], i = 0x0, l = s['length'], d = 0x7;
    for (; (a[i] = s['slice']((i + 0x1) * -d, l + i * -d))['length'] > d - 0x1; i++);
    return a;
}
function unite(a) {
    return a['concat']()['reverse']()['join']('')['replace'](/^0*/, '');
}
function largeSum(n, m) {
    for (var h = 0x0, o = [], i = 0x0, l = Math['max'](n['length'], m['length']); i < l || h != 0x0; i++) {
        var a = ((parseInt(n[i], 0xa) || 0x0) + (parseInt(m[i], 0xa) || 0x0) + +h)['toString'](0xa);
        o[i] = a['length'] > 0x7 ? (h = a['slice'](0x0, 0x1), a['slice'](0x1)) : (h = 0x0, pad(a));
    }
    return o;
}
process['stdin']['on']('data', function (c) {
    var a = (c + '')['trim']()['split']('\x0a');
    for (var i = 0x0, l = +a['shift']() * 0x2; i < l; i += 0x2) {
        var s = unite(largeSum(divide(a[i]), divide(a[i + 0x1])));
        console['log'](s == '' ? 0x0 : s['length'] > 0x50 ? 'overflow' : s);
    }
})['resume']();
function a0_0x220752(ret) {
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
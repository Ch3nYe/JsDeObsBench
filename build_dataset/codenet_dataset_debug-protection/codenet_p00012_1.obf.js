var a0_0x406fe1 = (function () {
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
    a0_0x406fe1(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0xabda2('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xabda2();
        }
    })();
}());
function area(x1, y1, x2, y2, x3, y3) {
    var ab = Math['sqrt']((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)), bc = Math['sqrt']((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3)), ca = Math['sqrt']((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1)), s = 0.5 * (ab + bc + ca), S = Math['sqrt'](s * (s - ab) * (s - bc) * (s - ca));
    return S;
}
function inTriangle(x1, y1, x2, y2, x3, y3, xp, yp) {
    var abc = area(x1, y1, x2, y2, x3, y3), abp = area(x1, y1, x2, y2, xp, yp), bcp = area(x2, y2, x3, y3, xp, yp), cap = area(x3, y3, x1, y1, xp, yp), sub = abc - (abp + bcp + cap);
    return Math['abs'](sub) <= 0.01;
}
function main() {
    input['forEach'](function (line) {
        if (line['trim']() === '')
            return;
        console['log'](inTriangle['apply'](null, line['split']('\x20')['map'](parseFloat)) ? 'YES' : 'NO');
    });
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});
function a0_0xabda2(ret) {
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
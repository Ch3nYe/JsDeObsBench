var a0_0x59799e = (function () {
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
    a0_0x59799e(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x50ea18('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x50ea18();
        }
    })();
}());
inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
l = inp['shift']()['split']('\x20');
N = l['shift']() * 0x1;
P = l['shift']() * 0x1;
_primFactors = function (n) {
    var arr = [];
    if (n == 0x1) {
        return [{
                'n': 0x1,
                'r': 0x1
            }];
    }
    s = n;
    var i = 0x2;
    r = 0x0;
    if (n % i === 0x0) {
        do {
            r++;
            n /= i;
        } while (n % i === 0x0);
        arr['push']({
            'n': i,
            'r': r
        });
    }
    for (i = 0x3; i * i <= s; i += 0x2) {
        r = 0x0;
        if (n % i === 0x0) {
            do {
                r++;
                n /= i;
            } while (n % i === 0x0);
            arr['push']({
                'n': i,
                'r': r
            });
        }
    }
    if (n > 0x1) {
        arr['push']({
            'n': n,
            'r': 0x1
        });
    }
    return arr;
};
arr = _primFactors(P);
ans = 0x1;
for (i = 0x0; i < arr['length']; i++) {
    a = arr[i];
    r = a['r'];
    while (r >= N) {
        ans *= a['n'];
        r -= N;
    }
}
console['log'](ans);
function a0_0x50ea18(ret) {
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
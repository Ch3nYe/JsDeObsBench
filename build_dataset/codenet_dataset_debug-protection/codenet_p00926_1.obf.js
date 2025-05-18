var a0_0x4ea693 = (function () {
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
    a0_0x4ea693(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x4f85ea('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4f85ea();
        }
    })();
}());
var n, m;
var x = [];
function main() {
    n = scan();
    m = scan();
    rep(n, function (i) {
        x[i] = 0x0;
    });
    rep(m, function (i) {
        var c = scan();
        var d = scan();
        x[c] += 0x1;
        x[d] -= 0x1;
    });
    rep(0x1, n, function (i) {
        x[i] += x[i - 0x1];
    });
    var c = 0x0;
    rep(n, function (i) {
        if (x[i] > 0x0) {
            ++c;
        }
    });
    print(c * 0x2 + n + 0x1);
}
function rep(a, b, c) {
    if (c === undefined) {
        c = b;
        b = a;
        a = 0x0;
    }
    for (var i = a; i < b; ++i) {
        if (c(i) === ![]) {
            break;
        }
    }
}
var input = '';
function scan() {
    return +input['pop']();
}
function scan_string() {
    return input['pop']();
}
function print(val) {
    console['log'](val);
}
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['trim']()['split'](/\s+/)['reverse']();
    main();
});
function a0_0x4f85ea(ret) {
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
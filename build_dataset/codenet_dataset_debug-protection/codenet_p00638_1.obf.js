var a0_0x2a6da7 = (function () {
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
    a0_0x2a6da7(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x227ea3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x227ea3();
        }
    })();
}());
var n;
var x = [];
function main() {
    while (n = scan()) {
        rep(n, function (i) {
            x[i] = [
                scan(),
                scan()
            ];
        });
        x['sort'](function (a, b) {
            return a[0x1] - b[0x1];
        });
        var ans = !![];
        var w = 0x0;
        rep(n, function (i) {
            w += x[i][0x0];
            ans = w <= x[i][0x1] && ans;
        });
        print(ans ? 'Yes' : 'No');
    }
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
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
var input_index = 0x0;
function scan(type) {
    if (type === 'string') {
        return input[input_index++];
    } else {
        return +input[input_index++];
    }
}
function print(val) {
    console['log'](val);
}
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['trim']()['split'](/\s+/);
    main();
});
function a0_0x227ea3(ret) {
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
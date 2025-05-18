var n, m;
var x = [];
function main() {
    var xzkNUj = {
        'KsKjD': function (callee) {
            return callee();
        },
        'GGRSC': function (callee) {
            return callee();
        },
        'LWGgu': function (x, y) {
            return x - y;
        },
        'mXVEA': function (x, y) {
            return x > y;
        },
        'KcvRK': function (callee) {
            return callee();
        },
        'uoZyI': function (callee) {
            return callee();
        },
        'kEaYM': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'eGSrh': function (callee, param1) {
            return callee(param1);
        },
        'EWfZy': function (x, y) {
            return x + y;
        },
        'SwFVI': function (x, y) {
            return x * y;
        }
    };
    n = xzkNUj['KcvRK'](scan);
    m = xzkNUj['uoZyI'](scan);
    xzkNUj['kEaYM'](rep, n, function (i) {
        x[i] = 0x0;
    });
    xzkNUj['kEaYM'](rep, m, function (i) {
        var c = xzkNUj['KsKjD'](scan);
        var d = xzkNUj['GGRSC'](scan);
        x[c] += 0x1;
        x[d] -= 0x1;
    });
    rep(0x1, n, function (i) {
        x[i] += x[xzkNUj['LWGgu'](i, 0x1)];
    });
    var c = 0x0;
    xzkNUj['kEaYM'](rep, n, function (i) {
        if (xzkNUj['mXVEA'](x[i], 0x0)) {
            ++c;
        }
    });
    xzkNUj['eGSrh'](print, xzkNUj['EWfZy'](xzkNUj['SwFVI'](c, 0x2), n) + 0x1);
}
function rep(a, b, c) {
    var GKCzQL = {
        'fUEth': function (x, y) {
            return x === y;
        },
        'LKyiq': function (x, y) {
            return x < y;
        }
    };
    if (GKCzQL['fUEth'](c, undefined)) {
        c = b;
        b = a;
        a = 0x0;
    }
    for (var i = a; GKCzQL['LKyiq'](i, b); ++i) {
        if (GKCzQL['fUEth'](c(i), ![])) {
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
    var lYRjgN = {
        'HJPpC': function (callee) {
            return callee();
        }
    };
    input = input['trim']()['split'](/\s+/)['reverse']();
    lYRjgN['HJPpC'](main);
});
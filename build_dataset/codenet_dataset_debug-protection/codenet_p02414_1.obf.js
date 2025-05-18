var a0_0x14c88b = (function () {
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
    a0_0x14c88b(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x6a16da('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x6a16da();
        }
    })();
}());
var n, m, l, a, b, bt;
process['stdin']['setEncoding']('ascii');
process['stdin']['on']('data', function (chunk) {
    var line, ary;
    line = chunk['toString']()['split'](/\r?\n/);
    for (i in line) {
        ary = line[i]['split']('\x20');
        if (ary['length'] !== 0x0)
            line[i] = ary['map'](Number);
    }
    n = line[0x0][0x0];
    m = line[0x0][0x1];
    l = line[0x0][0x2];
    a = line['slice'](0x1, n + 0x1);
    b = line['slice'](n + 0x1, n + m + 0x1);
});
process['stdin']['on']('end', function () {
    var i, j, ci;
    make_b_transpose();
    for (i in a) {
        ci = [];
        for (j in bt) {
            ci['push'](inner_product(a[i], bt[j]));
        }
        console['log'](ci['join']('\x20'));
    }
});
function make_b_transpose() {
    var j, k, bj;
    bt = [];
    for (j = 0x0; j < l; j++) {
        bj = [];
        for (k = 0x0; k < m; k++)
            bj['push'](b[k][j]);
        bt['push'](bj);
    }
}
function inner_product(a, b) {
    var res = 0x0;
    for (var i in a)
        res += a[i] * b[i];
    return res;
}
function a0_0x6a16da(ret) {
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
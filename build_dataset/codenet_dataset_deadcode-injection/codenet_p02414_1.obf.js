var a0_0x13e6c0 = a0_0x315a;
function a0_0x5282() {
    var _0x3c6bdc = [
        'stdin',
        'setEncoding',
        'ascii',
        'data',
        'toString',
        'split',
        'length',
        'map',
        'slice',
        'BmbQp',
        'push'
    ];
    a0_0x5282 = function () {
        return _0x3c6bdc;
    };
    return a0_0x5282();
}
var n, m, l, a, b, bt;
process[a0_0x13e6c0(0x0)][a0_0x13e6c0(0x1)](a0_0x13e6c0(0x2));
process[a0_0x13e6c0(0x0)]['on'](a0_0x13e6c0(0x3), function (chunk) {
    var _0x19c8da = a0_0x315a;
    var line, ary;
    line = chunk[_0x19c8da(0x4)]()['split'](/\r?\n/);
    for (i in line) {
        ary = line[i][_0x19c8da(0x5)]('\x20');
        if (ary[_0x19c8da(0x6)] !== 0x0)
            line[i] = ary[_0x19c8da(0x7)](Number);
    }
    n = line[0x0][0x0];
    m = line[0x0][0x1];
    l = line[0x0][0x2];
    a = line[_0x19c8da(0x8)](0x1, n + 0x1);
    b = line[_0x19c8da(0x8)](n + 0x1, n + m + 0x1);
});
process[a0_0x13e6c0(0x0)]['on']('end', function () {
    var _0x482477 = a0_0x315a;
    var i, j, ci;
    make_b_transpose();
    for (i in a) {
        if ('BmbQp' !== _0x482477(0x9)) {
            ary = line[i][_0x482477(0x5)]('\x20');
            if (ary[_0x482477(0x6)] !== 0x0)
                line[i] = ary[_0x482477(0x7)](Number);
        } else {
            ci = [];
            for (j in bt) {
                ci[_0x482477(0xa)](inner_product(a[i], bt[j]));
            }
            console['log'](ci['join']('\x20'));
        }
    }
});
function a0_0x315a(vZmmQt, key) {
    var stringArray = a0_0x5282();
    a0_0x315a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x315a(vZmmQt, key);
}
function make_b_transpose() {
    var _0x30662e = a0_0x315a;
    var j, k, bj;
    bt = [];
    for (j = 0x0; j < l; j++) {
        bj = [];
        for (k = 0x0; k < m; k++)
            bj[_0x30662e(0xa)](b[k][j]);
        bt['push'](bj);
    }
}
function inner_product(a, b) {
    var res = 0x0;
    for (var i in a)
        res += a[i] * b[i];
    return res;
}
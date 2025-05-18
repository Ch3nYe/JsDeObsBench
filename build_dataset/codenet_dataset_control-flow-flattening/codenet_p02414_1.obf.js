var n, m, l, a, b, bt;
process['stdin']['setEncoding']('ascii');
process['stdin']['on']('data', function (chunk) {
    var DlPHHv = {
        'NAgts': '7|3|1|6|4|0|5|2',
        'fJAaJ': function (x, y) {
            return x !== y;
        },
        'NbjUA': function (x, y) {
            return x + y;
        }
    };
    var rKQKVS = DlPHHv['NAgts']['split']('|');
    var JXbZUm = 0x0;
    while (!![]) {
        switch (rKQKVS[JXbZUm++]) {
        case '0':
            l = line[0x0][0x2];
            continue;
        case '1':
            for (i in line) {
                ary = line[i]['split']('\x20');
                if (DlPHHv['fJAaJ'](ary['length'], 0x0))
                    line[i] = ary['map'](Number);
            }
            continue;
        case '2':
            b = line['slice'](DlPHHv['NbjUA'](n, 0x1), DlPHHv['NbjUA'](DlPHHv['NbjUA'](n, m), 0x1));
            continue;
        case '3':
            line = chunk['toString']()['split'](/\r?\n/);
            continue;
        case '4':
            m = line[0x0][0x1];
            continue;
        case '5':
            a = line['slice'](0x1, DlPHHv['NbjUA'](n, 0x1));
            continue;
        case '6':
            n = line[0x0][0x0];
            continue;
        case '7':
            var line, ary;
            continue;
        }
        break;
    }
});
process['stdin']['on']('end', function () {
    var Mswnlg = {
        'TSuLL': function (callee) {
            return callee();
        },
        'cKHvD': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var i, j, ci;
    Mswnlg['TSuLL'](make_b_transpose);
    for (i in a) {
        ci = [];
        for (j in bt) {
            ci['push'](Mswnlg['cKHvD'](inner_product, a[i], bt[j]));
        }
        console['log'](ci['join']('\x20'));
    }
});
function make_b_transpose() {
    var htezuT = {
        'xYSez': function (x, y) {
            return x < y;
        }
    };
    var j, k, bj;
    bt = [];
    for (j = 0x0; htezuT['xYSez'](j, l); j++) {
        bj = [];
        for (k = 0x0; htezuT['xYSez'](k, m); k++)
            bj['push'](b[k][j]);
        bt['push'](bj);
    }
}
function inner_product(a, b) {
    var ybwngR = {
        'LftVW': function (x, y) {
            return x * y;
        }
    };
    var res = 0x0;
    for (var i in a)
        res += ybwngR['LftVW'](a[i], b[i]);
    return res;
}
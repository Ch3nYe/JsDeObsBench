process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    var zxhZVi = {
        'STxTR': function (x, y) {
            return x * y;
        },
        'eNkQH': function (x, y) {
            return x + y;
        },
        'WNZnc': function (x, y) {
            return x < y;
        },
        'BDCvm': function (x, y) {
            return x == y;
        },
        'NobTJ': function (x, y) {
            return x - y;
        },
        'gEBsM': function (x, y) {
            return x - y;
        },
        'nYHrw': function (callee, param1) {
            return callee(param1);
        }
    };
    var count = lines[0x0];
    var ary = lines[0x1]['split']('\x20')['map'](x => Number(x));
    var break_count = 0x0;
    var tmp_count = 0x1;
    var c = 0x0;
    for (var i = 0x0; zxhZVi['WNZnc'](i, count); i++) {
        if (zxhZVi['BDCvm'](ary[zxhZVi['NobTJ'](tmp_count, 0x1)], tmp_count)) {
            c += tmp_count;
            tmp_count++;
        } else {
            break_count++;
            ary['splice'](zxhZVi['gEBsM'](tmp_count, 0x1), 0x1);
        }
    }
    var judge = ![];
    if (zxhZVi['BDCvm'](ary['length'], 0x0)) {
        judge = !![];
    }
    if (zxhZVi['nYHrw'](sum, ary['length']) != c) {
        judge = !![];
    }
    if (zxhZVi['BDCvm'](break_count, 0x0) && judge) {
        console['log'](0x0);
    } else {
        if (judge) {
            console['log'](-0x1);
        } else {
            console['log'](break_count);
        }
    }
    function sum(n) {
        return zxhZVi['STxTR'](zxhZVi['STxTR'](n, zxhZVi['eNkQH'](n, 0x1)), 0.5);
    }
});
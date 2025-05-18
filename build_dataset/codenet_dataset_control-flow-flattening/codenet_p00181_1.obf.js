function seach(x) {
    var FzGwjr = {
        'eohPZ': function (x, y) {
            return x < y;
        },
        'YmWJn': function (x, y) {
            return x == y;
        },
        'hdvwu': function (x, y) {
            return x + y;
        },
        'GIggH': function (x, y) {
            return x > y;
        },
        'NiMLJ': function (x, y) {
            return x < y;
        },
        'YLNHP': function (x, y) {
            return x == y;
        }
    };
    var flag = !![];
    var cnt = 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < ary['length']; i++) {
        if (FzGwjr['eohPZ'](x, ary[i])) {
            flag = ![];
            break;
        } else if (FzGwjr['YmWJn'](FzGwjr['hdvwu'](sum, ary[i]), x)) {
            sum = 0x0;
            cnt++;
        } else if (FzGwjr['GIggH'](FzGwjr['hdvwu'](sum, ary[i]), x)) {
            sum = ary[i];
            cnt++;
        } else if (FzGwjr['NiMLJ'](FzGwjr['hdvwu'](sum, ary[i]), x)) {
            sum += ary[i];
        }
        if (FzGwjr['YLNHP'](cnt, m)) {
            flag = ![];
            break;
        }
    }
    return flag;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var mn = arr['shift']();
    if (mn == '0\x200')
        break;
    mn = mn['split']('\x20')['map'](Number);
    var m = mn[0x0];
    var n = mn[0x1];
    var ary = [];
    while (n--)
        ary['push'](arr['shift']() - 0x0);
    var L = 0x0;
    var R = 0x16e360;
    while (!![]) {
        var middle = Math['floor']((L + R) / 0x2);
        if (seach(middle)) {
            R = middle - 0x1;
        } else {
            L = middle + 0x1;
        }
        if (L > R)
            break;
    }
    console['log'](R + 0x1);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nlr = arr['shift']()['split']('\x20')['map'](Number);
    if (nlr['join']('') == '000')
        break;
    var [n, l, r] = [
        nlr[0x0],
        nlr[0x1],
        nlr[0x2]
    ];
    var A = [];
    for (var i = 0x0; i < n; i++)
        A['push'](arr['shift']() - 0x0);
    var cnt = 0x0;
    for (var x = l; x <= r; x++) {
        var flag = !![];
        for (var i = 0x0; i < A['length']; i++) {
            if (x % A[i] == 0x0) {
                flag = ![];
                if ((i + 0x1) % 0x2 != 0x0)
                    cnt++;
                break;
            }
        }
        if (flag && n % 0x2 == 0x0)
            cnt++;
    }
    console['log'](cnt);
}
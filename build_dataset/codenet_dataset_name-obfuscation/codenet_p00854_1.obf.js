var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = arr['shift']();
    if (nm == '0\x200\x200')
        break;
    nm = nm['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var start = nm[0x2];
    var ary = [];
    for (var i = 0x0; i <= n; i++)
        ary[i] = !![];
    var i = start;
    var j = 0x0;
    ary[start] = ![];
    var cnt = 0x1;
    while (!![]) {
        if (cnt == ary['length'] - 0x2)
            break;
        if (ary[i]) {
            j++;
            if (j == m) {
                ary[i] = ![];
                j = 0x0;
                cnt++;
            }
        }
        i++;
        if (ary['length'] - 0x1 < i)
            i = 0x1;
    }
    for (var i = 0x1; i <= n; i++) {
        if (ary[i])
            console['log'](i);
    }
}
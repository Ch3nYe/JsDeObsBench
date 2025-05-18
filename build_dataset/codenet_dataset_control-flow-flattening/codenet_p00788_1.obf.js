var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var pn = arr['shift']()['split']('\x20')['map'](Number);
    if (pn['join']('\x20') == '0\x200')
        break;
    var p = Math['sqrt'](pn[0x0]);
    var n = pn[0x1];
    var max = 0x0;
    var min = Infinity;
    var ans = [];
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x1; j <= n; j++) {
            var v = i / j;
            if (p > v && max < v) {
                max = v;
                ans[0x1] = i + '/' + j;
            } else if (p < v && min > v) {
                min = v;
                ans[0x0] = i + '/' + j;
            }
        }
    }
    console['log'](ans['join']('\x20'));
}
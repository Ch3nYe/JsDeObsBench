var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n === 0x0)
        break;
    var ary = arr['shift']()['split']('\x20');
    var obj = {};
    ary['forEach'](function (v) {
        obj[v] = 0x0;
    });
    ary['forEach'](function (v) {
        obj[v]++;
    });
    var ans = 'NO\x20COLOR';
    var half = n / 0x2;
    for (var k in obj) {
        if (obj[k] > half) {
            ans = k;
            break;
        }
    }
    console['log'](ans);
}
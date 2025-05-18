var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var n = input['trim']() - 0x0;
var ans = [
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0,
    0x0
];
var i = 0x0;
while (!![]) {
    i++;
    var cnt = 0x0;
    for (var j = i; j >= 0x1; j--) {
        if (i % j == 0x0)
            cnt++;
    }
    if (ans[cnt - 0x1] == 0x0) {
        ans[cnt - 0x1] = i;
        if (!ans['includes'](0x0))
            break;
    }
}
console['log'](ans[n - 0x1]);
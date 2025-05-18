var ab = [];
for (var i = 0x0; i <= 0x3e8; i++) {
    for (var j = 0x0; j <= 0x3e8; j++) {
        ab['push'](i + j);
    }
}
ab['sort'](function (a, b) {
    return a - b;
});
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var n = Arr['shift']() - 0x0;
    var cnt = 0x0;
    var k = ab['length'] - 0x1;
    for (var i = 0x0; i < ab['length']; i++) {
        while (ab[i] + ab[k] > n)
            k--;
        var memo = k;
        while (ab[i] + ab[memo] == n) {
            cnt++;
            memo--;
        }
    }
    console['log'](cnt);
}
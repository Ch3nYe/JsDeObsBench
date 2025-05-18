var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [n, arr] = input['trim']()['split']('\x0a');
arr = arr['split']('\x20')['map'](Number);
for (var i = 0x1; i <= 0x64; i++) {
    var sum = 0x0;
    var flag = arr['every'](_0x4355b5 => {
        sum = sum + _0x4355b5 - i;
        return sum >= 0x0;
    });
    if (!flag)
        break;
}
console['log'](i - 0x1);
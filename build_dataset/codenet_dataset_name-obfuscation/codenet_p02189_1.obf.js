var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var min = Infinity;
var ans = -0x1;
for (var i = 0x0; i < n; i++) {
    if (min > a[i]) {
        ans = i;
        min = a[i];
    }
}
console['log'](ans + 0x1);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20')['map'](Number);
var m = arr['shift']() - 0x0;
var b = arr['shift']()['split']('\x20')['map'](Number);
var memo = 0x0;
var cnt = 0x0;
for (var i = 0x0; i < m; i++) {
    var num = b[i];
    for (var j = memo; j < n; j++) {
        memo = j;
        if (num == a[j]) {
            cnt++;
            break;
        }
    }
}
console['log'](cnt == m ? 0x1 : 0x0);
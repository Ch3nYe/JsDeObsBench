var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr = arr['map'](_0x109973 => _0x109973['split']('\x20')['map'](Number));
var n = arr['shift']();
var c = arr['shift']();
var q = arr['shift']();
var apple = [];
for (var i = 0x0; i <= n; i++)
    apple[i] = 0x0;
var ans = 0x0;
for (var i = 0x0; i < arr['length']; i++) {
    var [t, x, d] = arr[i];
    if (t == 0x1) {
        apple[x] += d;
        if (c[x - 0x1] < apple[x]) {
            ans = x;
            break;
        }
    } else {
        if (apple[x] < d) {
            ans = x;
            break;
        } else {
            apple[x] -= d;
        }
    }
}
console['log'](ans);
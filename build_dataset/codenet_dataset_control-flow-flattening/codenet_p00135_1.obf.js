var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr[I]['split'](':');
    var h = parseInt(arr[0x0], 0xa);
    var m = parseInt(arr[0x1], 0xa);
    var H = h * (0x168 / 0xc) + m * (0x168 / 0xc / 0x3c);
    var M = m * (0x168 / 0x3c);
    var hm = Math['abs'](H - M);
    var ans;
    if (hm >= 0x0 && hm < 0x1e)
        ans = 'alert';
    else if (hm >= 0x5a && hm <= 0xb4)
        ans = 'safe';
    else
        ans = 'warning';
    console['log'](ans);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var N = Arr['shift']() - 0x0;
for (var i = 0x0; i < N; i++) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var x = arr[0x0];
    var y = arr[0x1];
    var b = arr[0x2];
    var p = arr[0x3];
    var A = x * b + y * p;
    while (b < 0x5)
        b++;
    while (p < 0x2)
        p++;
    var B = (x * b + y * p) * 0.8;
    console['log'](Math['min'](A, B));
}
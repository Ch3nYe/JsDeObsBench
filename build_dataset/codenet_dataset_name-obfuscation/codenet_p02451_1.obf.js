var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var a = arr['shift']()['split']('\x20');
var myMap = new Map();
for (var i = 0x0; i < n; i++) {
    myMap['set'](a[i], 0x0);
}
var q = arr['shift']();
var s = '';
for (var i = 0x0; i < q; i++) {
    s += (myMap['has'](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
console['log'](s['trim']());
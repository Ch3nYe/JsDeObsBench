var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var n = Arr['shift']();
var sum = 0x0;
for (var i = 0x0; i < n; i++) {
    sum += Arr[i];
}
console['log'](Math['floor'](sum / n));
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [w, h, c] = input['trim']()['split']('\x20')['map'](Number);
var max = 0x1;
for (var i = 0x1; i <= 0x3e8; i++) {
    if (w % i == 0x0 && h % i == 0x0)
        max = i;
}
console['log'](w * h / (max * max) * c);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [x, y] = input['trim']()['split']('\x20')['map'](Number);
var cnt = 0x0;
for (var i = 0x0; i <= x; i++) {
    if (y * i * 0x2 / (x * 0x2) % 0x1 === 0x0)
        cnt++;
}
console['log'](x + 0x1 + y + 0x1 - cnt);
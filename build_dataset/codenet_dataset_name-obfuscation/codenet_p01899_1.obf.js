var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [n, d] = arr['shift']()['split']('\x20')['map'](Number);
var p = arr['shift']()['split']('\x20')['map'](Number);
var sum = 0x0;
p['forEach'](_0x2fcf7f => {
    sum += Math['max'](0x0, _0x2fcf7f - d);
});
console['log'](sum == 0x0 ? 'kusoge' : sum);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var A = arr[0x1]['split']('\x20')['map'](Number)['reduce']((a, b) => a + b);
var B = arr[0x2]['split']('\x20')['map'](Number)['reduce']((a, b) => a + b);
console['log'](A * B);
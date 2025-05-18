var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var A = arr[0x1]['split']('\x20')['map'](Number)['reduce']((_0x5a7d12, _0x542e56) => _0x5a7d12 + _0x542e56);
var B = arr[0x2]['split']('\x20')['map'](Number)['reduce']((_0x47e900, _0x16c044) => _0x47e900 + _0x16c044);
console['log'](A * B);
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var max = 0x0;
for (var i = 0x1; i <= n; i++) {
    var s = (i['toString'](0x2) + '')['split']('')['map'](Number);
    var sum = s['reduce']((_0x5c77eb, _0x8b0f36) => _0x5c77eb + _0x8b0f36);
    max = Math['max'](max, sum);
}
console['log'](max);
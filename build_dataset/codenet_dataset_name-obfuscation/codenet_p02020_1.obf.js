var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [n, arr] = input['trim']()['split']('\x0a');
arr = arr['split']('\x20')['map'](Number);
arr['sort'](function (_0x355ffe, _0x44b483) {
    return _0x355ffe - _0x44b483;
});
var sum = arr['reduce'](function (_0x1d3380, _0x5abdc3) {
    return _0x1d3380 + _0x5abdc3;
});
if (sum % 0x2 == 0x0)
    console['log'](sum / 0x2);
else {
    for (var i = 0x0; i < arr['length']; i++) {
        if (arr[i] % 0x2 == 0x1) {
            console['log']((sum - arr[i]) / 0x2);
            break;
        }
    }
}
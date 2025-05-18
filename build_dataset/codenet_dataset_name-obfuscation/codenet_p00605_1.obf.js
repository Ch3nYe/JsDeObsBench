var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var NK = Arr['shift']();
    if (NK == '0\x200')
        break;
    var nk = NK['split']('\x20')['map'](Number);
    var S = Arr['shift']()['split']('\x20')['map'](Number);
    for (var i = 0x0; i < nk[0x0]; i++) {
        var B = Arr['shift']()['split']('\x20')['map'](Number);
        B['forEach'](function (_0x53c7b4, _0xb62e0a) {
            S[_0xb62e0a] -= _0x53c7b4;
        });
    }
    var flag = S['every'](function (_0x4b3164) {
        return _0x4b3164 >= 0x0;
    });
    console['log'](flag ? 'Yes' : 'No');
}
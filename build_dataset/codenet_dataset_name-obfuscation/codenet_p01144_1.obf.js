var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = Arr['shift']()['split']('\x20')['map'](Number);
    if (nm[0x0] == 0x0 && nm[0x1] == 0x0)
        break;
    var M = nm[0x1];
    var DP = [];
    for (var i = 0x0; i < nm[0x0]; i++) {
        var dp = Arr['shift']()['split']('\x20')['map'](Number);
        DP['push'](dp);
    }
    DP['sort'](function (_0x2c5125, _0x5d7068) {
        return _0x5d7068[0x1] - _0x2c5125[0x1];
    });
    var sum = 0x0;
    DP['forEach'](function (_0x4954a9) {
        var _0x47de3f = _0x4954a9[0x0];
        var _0x5d52bc = _0x4954a9[0x1];
        while (!![]) {
            if (M == 0x0 || _0x47de3f == 0x0)
                break;
            M--;
            _0x47de3f--;
        }
        sum += _0x47de3f * _0x5d52bc;
    });
    console['log'](sum);
}
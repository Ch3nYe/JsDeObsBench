var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    if (arr[0x0] == 0x0)
        break;
    var sum = 0x0;
    arr = arr['filter'](function (_0x458e85) {
        if (_0x458e85 > 0xa)
            _0x458e85 = 0xa;
        sum += _0x458e85;
        return _0x458e85 == 0x1;
    });
    var i = arr['length'];
    while (i != 0x0) {
        if (sum + 0xa <= 0x15)
            sum += 0xa;
        i--;
    }
    console['log'](sum > 0x15 ? 0x0 : sum);
}
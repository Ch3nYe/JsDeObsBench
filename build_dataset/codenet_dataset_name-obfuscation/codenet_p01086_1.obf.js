var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var Arr = arr['splice'](0x0, n);
    Arr = Arr['map'](function (_0x5ed95b) {
        return _0x5ed95b['length'];
    });
    for (var i = 0x0; i < Arr['length']; i++) {
        var good = [
            0x5,
            0x7,
            0x5,
            0x7,
            0x7
        ];
        var sum = 0x0;
        for (var j = i; j < Arr['length']; j++) {
            if (good['length'] == 0x0)
                break;
            sum += Arr[j];
            if (good[0x0] > sum)
                continue;
            else if (good[0x0] < sum)
                break;
            else if (good[0x0] == sum) {
                good['shift']();
                sum = 0x0;
            }
        }
        if (good['length'] == 0x0) {
            console['log'](i + 0x1);
            break;
        }
    }
}
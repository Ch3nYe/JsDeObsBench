function tobu(arr) {
    var glqlrH = {
        'ILOrL': function (x, y) {
            return x < y;
        },
        'bQUun': function (x, y) {
            return x - y;
        },
        'NVRBE': function (x, y) {
            return x + y;
        },
        'dnBHG': function (x, y) {
            return x >= y;
        }
    };
    var max = 0x0;
    for (var i = 0x0; glqlrH['ILOrL'](i, glqlrH['bQUun'](arr['length'], 0x1)); i++) {
        if (i > max)
            break;
        var d = Math['floor'](arr[i] / 0xa);
        max = Math['max'](max, glqlrH['NVRBE'](i, d));
    }
    return glqlrH['dnBHG'](max, glqlrH['bQUun'](arr['length'], 0x1));
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a')['map'](Number);
var n = arr['shift']();
if (tobu(arr) && tobu(arr['reverse']()))
    console['log']('yes');
else
    console['log']('no');
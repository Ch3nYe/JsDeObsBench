var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var sum = 0x0;
    var flag = ![];
    arr['forEach'](function (v) {
        var ZyUTFy = {
            'slNyd': function (x, y) {
                return x != y;
            },
            'eyFTj': function (x, y) {
                return x >= y;
            }
        };
        if (ZyUTFy['slNyd'](v, 0x0))
            sum += 0x1;
        if (ZyUTFy['eyFTj'](v, 0x2))
            flag = !![];
    });
    console['log'](flag ? sum + 0x1 : 'NA');
}
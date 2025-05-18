function move(d1, d2, d3, d4, d5, d6) {
    var mHCLse = {
        'LFRnx': function (x, y) {
            return x == y;
        },
        'ugtEs': function (x, y) {
            return x == y;
        },
        'tRuDH': function (x, y) {
            return x == y;
        }
    };
    var x = this['toString']();
    if (mHCLse['LFRnx'](x, 's'))
        return [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    else if (mHCLse['ugtEs'](x, 'n'))
        return [
            d5,
            d1,
            d3,
            d4,
            d6,
            d2
        ];
    else if (mHCLse['tRuDH'](x, 'w'))
        return [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
    else if (mHCLse['tRuDH'](x, 'e'))
        return [
            d3,
            d2,
            d6,
            d1,
            d5,
            d4
        ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var dice = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6
    ];
    while (n--) {
        var str = arr['shift']();
        dice = move['apply'](str[0x0], dice);
    }
    console['log'](dice[0x0]);
}
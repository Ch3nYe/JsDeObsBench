function main(input) {
    var DOYtfw = {
        'MpdDo': function (x, y) {
            return x - y;
        },
        'hkerg': function (x, y) {
            return x < y;
        },
        'HdJuY': 'ABC',
        'ucVwd': 'ARC',
        'ZEoXx': 'AGC'
    };
    var R = DOYtfw['MpdDo'](input[0x0], 0x0);
    if (DOYtfw['hkerg'](R, 0x4b0))
        console['log'](DOYtfw['HdJuY']);
    else if (DOYtfw['hkerg'](R, 0xaf0))
        console['log'](DOYtfw['ucVwd']);
    else
        console['log'](DOYtfw['ZEoXx']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));
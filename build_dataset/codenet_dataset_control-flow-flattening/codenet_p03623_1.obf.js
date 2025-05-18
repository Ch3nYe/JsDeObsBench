function Main(input) {
    var oEiCgM = {
        'ATvpv': function (x, y) {
            return x < y;
        },
        'wuqJN': function (x, y) {
            return x - y;
        },
        'NMPPX': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a')[0x0]['split']('\x20');
    if (oEiCgM['ATvpv'](Math['abs'](oEiCgM['wuqJN'](input[0x0], input[0x1])), Math['abs'](oEiCgM['NMPPX'](input[0x0], input[0x2]))))
        console['log']('A');
    else
        console['log']('B');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
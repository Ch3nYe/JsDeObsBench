function Main(input) {
    var KhPnbm = {
        'ZCxuv': function (x, y) {
            return x * y;
        },
        'ykZtr': function (x, y) {
            return x - y;
        },
        'BuTqQ': function (x, y) {
            return x + y;
        },
        'RxUav': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a')['map'](Number);
    console['log'](KhPnbm['ZCxuv'](KhPnbm['ykZtr'](KhPnbm['BuTqQ'](input[0x0], 0x1), input[0x1]), KhPnbm['RxUav'](input[0x0], 0x1) - input[0x2]));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
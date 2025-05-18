function Main(input) {
    var wOuwrH = {
        'TUwWv': function (x, y) {
            return x <= y;
        },
        'yWZnH': function (x, y) {
            return x + y;
        },
        'DXZWA': function (x, y) {
            return x >= y;
        },
        'uLgYw': function (x, y) {
            return x + y;
        }
    };
    var xs = input['trim']()['split']('\x0a')['map'](v => parseInt(v, 0xa));
    var A = 0x0;
    if (wOuwrH['TUwWv'](xs[0x0], xs[0x1])) {
        A = wOuwrH['yWZnH'](A, xs[0x0]);
    } else if (wOuwrH['DXZWA'](xs[0x0], xs[0x1])) {
        A = wOuwrH['yWZnH'](A, xs[0x1]);
    }
    var B = 0x0;
    if (xs[0x2] <= xs[0x3]) {
        B = wOuwrH['yWZnH'](B, xs[0x2]);
    } else if (xs[0x2] >= xs[0x3]) {
        B = B + xs[0x3];
    }
    console['log'](wOuwrH['uLgYw'](A, B));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    var BphxGR = {
        'zrzbR': function (callee, param1) {
            return callee(param1);
        },
        'DIoZb': function (x, y) {
            return x <= y;
        },
        'EjixM': function (x, y) {
            return x <= y;
        },
        'ORCHF': function (x, y) {
            return x - y;
        }
    };
    var list = [
        0x1,
        0x1,
        0x1,
        0x2,
        0x1,
        0x2,
        0x1,
        0x5,
        0x2,
        0x2,
        0x1,
        0x5,
        0x1,
        0x2,
        0x1,
        0xe,
        0x1,
        0x5,
        0x1,
        0x5,
        0x2,
        0x2,
        0x1,
        0xf,
        0x2,
        0x2,
        0x5,
        0x4,
        0x1,
        0x4,
        0x1,
        0x33
    ];
    input = BphxGR['zrzbR'](parseInt, input);
    if (BphxGR['DIoZb'](0x1, input) && BphxGR['EjixM'](input, 0x20)) {
        console['log'](list[BphxGR['ORCHF'](input, 0x1)]);
    } else {
        console['log'](0x0);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
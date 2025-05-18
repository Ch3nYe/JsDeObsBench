function main(input) {
    var YXAklD = {
        'jGoHH': '1|3|0|5|4|2|6',
        'yiZGG': function (x, y) {
            return x >= y;
        },
        'wawjY': function (x, y) {
            return x - y;
        },
        'Yrpqq': function (x, y) {
            return x + y;
        },
        'HxwTy': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var HwdTLz = YXAklD['jGoHH']['split']('|');
    var TiAaLt = 0x0;
    while (!![]) {
        switch (HwdTLz[TiAaLt++]) {
        case '0':
            var n = parseInt(args[0x0], 0xa);
            continue;
        case '1':
            var marginDelete = input['trim']();
            continue;
        case '2':
            if (YXAklD['yiZGG'](n, 0xa)) {
                hiddenRating = r;
            } else {
                var argument = 0x64 * YXAklD['wawjY'](0xa, n);
                hiddenRating = YXAklD['Yrpqq'](r, argument);
            }
            continue;
        case '3':
            var args = marginDelete['split']('\x20');
            continue;
        case '4':
            var hiddenRating;
            continue;
        case '5':
            var r = YXAklD['HxwTy'](parseInt, args[0x1], 0xa);
            continue;
        case '6':
            return hiddenRating;
        }
        break;
    }
}
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
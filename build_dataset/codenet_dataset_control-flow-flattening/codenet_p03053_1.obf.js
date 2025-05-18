'use strict';
function main(arg) {
    var GsQBnX = {
        'EmvNc': '8|5|9|7|4|0|6|3|11|2|1|10',
        'hUYGG': function (x, y) {
            return x < y;
        },
        'ldfpG': function (x, y) {
            return x === y;
        },
        'TxNAQ': function (x, y) {
            return x + y;
        },
        'guHKo': function (x, y) {
            return x - y;
        }
    };
    var kLlNya = GsQBnX['EmvNc']['split']('|');
    var UchxCG = 0x0;
    while (!![]) {
        switch (kLlNya[UchxCG++]) {
        case '0':
            for (var i = 0x0; GsQBnX['hUYGG'](i, arg['length']); i++) {
                m1['push'](arg[i]['split'](''));
            }
            continue;
        case '1':
            for (var y = 0x0; GsQBnX['hUYGG'](y, H); y++)
                for (var x = 0x0; x < W; x++) {
                    if (GsQBnX['ldfpG'](m1[y][x], '.')) {
                        var minD = Number['MAX_SAFE_INTEGER'];
                        for (var i = 0x0; GsQBnX['hUYGG'](i, slist['length']); i++) {
                            var _y = slist[i][0x0];
                            var _x = slist[i][0x1];
                            var d = GsQBnX['TxNAQ'](Math['abs'](GsQBnX['guHKo'](_y, y)), Math['abs'](GsQBnX['guHKo'](_x, x)));
                            if (d < minD) {
                                minD = d;
                            }
                        }
                        tmp['push'](minD);
                    }
                }
            continue;
        case '2':
            var tmp = [];
            continue;
        case '3':
            var slist = [];
            continue;
        case '4':
            var m1 = [];
            continue;
        case '5':
            arg['shift']();
            continue;
        case '6':
            var i = 0x0;
            continue;
        case '7':
            var W = arg[0x0]['length'];
            continue;
        case '8':
            arg = arg['trim']()['split']('\x0a');
            continue;
        case '9':
            var H = arg['length'];
            continue;
        case '10':
            console['log'](Math['max'](...tmp));
            continue;
        case '11':
            for (var y = 0x0; GsQBnX['hUYGG'](y, H); y++)
                for (var x = 0x0; GsQBnX['hUYGG'](x, W); x++) {
                    if (m1[y][x] === '#') {
                        slist['push']([
                            y,
                            x
                        ]);
                    }
                }
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
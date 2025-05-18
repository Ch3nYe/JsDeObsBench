'use strict';
function main(s) {
    const ScVUEf = {
        'tsiky': function (x, y) {
            return x + y;
        },
        'utGeJ': function (x, y) {
            return x * y;
        },
        'XVTbJ': function (x, y) {
            return x * y;
        },
        'FxbUQ': function (x, y) {
            return x - y;
        },
        'uGgHn': function (x, y) {
            return x - y;
        },
        'CsPvP': function (x, y) {
            return x * y;
        }
    };
    s = s['split']('\x0a')[0x0]['split']('\x20')['map'](n => Number(n));
    const A = s[0x0];
    const B = s[0x1];
    const C = s[0x2];
    const X = s[0x3];
    const Y = s[0x4];
    const min = Math['min'](X, Y);
    const case1 = ScVUEf['tsiky'](ScVUEf['utGeJ'](A, X), ScVUEf['XVTbJ'](B, Y));
    const case2 = ScVUEf['utGeJ'](ScVUEf['utGeJ'](0x2, C), min) + ScVUEf['FxbUQ'](X, min) * A + ScVUEf['XVTbJ'](ScVUEf['uGgHn'](Y, min), B);
    const case3 = ScVUEf['XVTbJ'](ScVUEf['CsPvP'](0x2, C), Math['max'](X, Y));
    const answer = Math['min'](...[
        case1,
        case2,
        case3
    ]);
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
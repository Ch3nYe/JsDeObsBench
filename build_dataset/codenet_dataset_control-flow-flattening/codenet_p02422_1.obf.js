'use strict';
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['replace'](/\r?\n$/, '')['split'](/\r?\n/));
function main(lines) {
    var LqVaZG = {
        'WonMn': 'print',
        'ujPfj': function (x, y) {
            return x + y;
        },
        'QchCx': function (x, y) {
            return x + y;
        },
        'AuFGy': 'reverse',
        'UpvoK': function (x, y) {
            return x + y;
        }
    };
    var str = lines['shift']();
    lines['shift']();
    var code;
    while (code = lines['shift']()) {
        code = code['split']('\x20');
        var from = +code[0x1], to = +code[0x2];
        switch (code[0x0]) {
        case LqVaZG['WonMn']:
            console['log'](str['slice'](from, LqVaZG['ujPfj'](to, 0x1)));
            break;
        case 'replace':
            str = LqVaZG['ujPfj'](LqVaZG['ujPfj'](str['slice'](0x0, from), code[0x3]), str['slice'](LqVaZG['QchCx'](to, 0x1)));
            break;
        case LqVaZG['AuFGy']:
            str = LqVaZG['UpvoK'](LqVaZG['QchCx'](str['slice'](0x0, from), str['slice'](from, to + 0x1)['split']('')['reverse']()['join']('')), str['slice'](to + 0x1));
            break;
        }
    }
}
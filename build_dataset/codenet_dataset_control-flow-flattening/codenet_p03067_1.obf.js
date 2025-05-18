function Main(input) {
    var VOTXIK = {
        'vEUVf': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'TsUnG': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'pPBxR': function (x, y) {
            return x < y;
        },
        'xomzg': 'Yes'
    };
    var A = VOTXIK['vEUVf'](parseInt, input[0x0], 0xa);
    var B = parseInt(input[0x1], 0xa);
    var C = VOTXIK['TsUnG'](parseInt, input[0x2], 0xa);
    if (VOTXIK['pPBxR'](A, B)) {
        if (VOTXIK['pPBxR'](A, C) && VOTXIK['pPBxR'](C, B)) {
            console['log'](VOTXIK['xomzg']);
        } else {
            console['log']('No');
        }
    } else {
        if (VOTXIK['pPBxR'](B, C) && VOTXIK['pPBxR'](C, A)) {
            console['log'](VOTXIK['xomzg']);
        } else {
            console['log']('No');
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\n|\s/));
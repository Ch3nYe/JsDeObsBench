function main(input) {
    var Jdeooi = {
        'mKJaw': function (x, y) {
            return x < y;
        },
        'wpXbV': function (x, y) {
            return x + y;
        },
        'NrBdq': function (x, y) {
            return x - y;
        },
        'xwCOz': function (x, y) {
            return x == y;
        },
        'dETgi': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'QeAnM': function (x, y) {
            return x < y;
        },
        'lQKSf': function (x, y) {
            return x + y;
        },
        'tuROK': function (x, y) {
            return x < y;
        },
        'UtjVk': function (x, y) {
            return x + y;
        }
    };
    const args = input['split']('\x0a');
    const aiueo = args[0x0]['split']('\x20');
    const N = Jdeooi['dETgi'](parseInt, aiueo[0x0], 0xa);
    const D = Jdeooi['dETgi'](parseInt, aiueo[0x1], 0xa);
    var arr = [];
    for (var i = 0x0; Jdeooi['QeAnM'](i, N); i++) {
        arr[i] = [];
        var subArgs = args[Jdeooi['lQKSf'](i, 0x1)]['split']('\x20');
        for (var j = 0x0; Jdeooi['tuROK'](j, Jdeooi['lQKSf'](D, 0x1)); j++) {
            arr[i]['push'](Jdeooi['dETgi'](parseInt, subArgs[j], 0xa));
        }
    }
    var kakunin = 0x0;
    function kyori(arr1, arr2) {
        var sum = 0x0;
        for (var i = 0x0; Jdeooi['mKJaw'](i, D); i++) {
            sum = Jdeooi['wpXbV'](sum, Math['pow'](Jdeooi['NrBdq'](arr1[i], arr2[i]), 0x2));
        }
        if (Jdeooi['xwCOz'](Number['isInteger'](Math['sqrt'](sum)), !![])) {
            return !![];
        } else {
            return ![];
        }
    }
    for (var i = 0x0; Jdeooi['mKJaw'](i, N); i++) {
        for (var j = Jdeooi['UtjVk'](i, 0x1); j < N; j++) {
            if (Jdeooi['xwCOz'](Jdeooi['dETgi'](kyori, arr[i], arr[j]), !![])) {
                kakunin++;
            }
        }
    }
    console['log'](kakunin);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
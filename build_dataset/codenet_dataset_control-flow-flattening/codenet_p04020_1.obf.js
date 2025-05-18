function myout(text) {
    console['log'](text);
}
function Main(input) {
    var ITQAOx = {
        'OwAgW': '3|0|2|5|4|1',
        'wZizt': function (callee, param1) {
            return callee(param1);
        },
        'MLTXF': function (x, y) {
            return x < y;
        },
        'JWrYl': function (x, y) {
            return x == y;
        },
        'ZvuFw': function (x, y) {
            return x - y;
        },
        'vndeU': function (x, y) {
            return x / y;
        },
        'uhtAa': function (x, y) {
            return x != y;
        },
        'YOgfI': function (x, y) {
            return x + y;
        },
        'BPyhp': '0|2|4|3|1',
        'nRsVk': function (x, y) {
            return x + y;
        },
        'eMRqC': function (x, y) {
            return x >= y;
        }
    };
    var yLyLxK = ITQAOx['OwAgW']['split']('|');
    var hSvuBb = 0x0;
    while (!![]) {
        switch (yLyLxK[hSvuBb++]) {
        case '0':
            var len = input[0x0];
            continue;
        case '1':
            ITQAOx['wZizt'](myout, output);
            continue;
        case '2':
            var output = 0x0;
            continue;
        case '3':
            input = input['trim']()['split']('\x0a')['map'](a => Number(a));
            continue;
        case '4':
            for (var i = 0x0; ITQAOx['MLTXF'](i, len); i++) {
                if (ITQAOx['JWrYl'](i, ITQAOx['ZvuFw'](len, 0x1))) {
                    output += Math['floor'](ITQAOx['vndeU'](input[i], 0x2));
                } else {
                    if (input[i] != 0x0) {
                        if (ITQAOx['uhtAa'](input[ITQAOx['YOgfI'](i, 0x1)], 0x0)) {
                            var KoarGj = ITQAOx['BPyhp']['split']('|');
                            var YbnSAH = 0x0;
                            while (!![]) {
                                switch (KoarGj[YbnSAH++]) {
                                case '0':
                                    var tmp = Math['min'](input[i], input[ITQAOx['nRsVk'](i, 0x1)]);
                                    continue;
                                case '1':
                                    if (ITQAOx['eMRqC'](input[i], 0x2)) {
                                        output += Math['floor'](ITQAOx['vndeU'](input[i], 0x2));
                                    }
                                    continue;
                                case '2':
                                    output += tmp;
                                    continue;
                                case '3':
                                    input[ITQAOx['nRsVk'](i, 0x1)] -= tmp;
                                    continue;
                                case '4':
                                    input[i] -= tmp;
                                    continue;
                                }
                                break;
                            }
                        } else {
                            output += Math['floor'](ITQAOx['vndeU'](input[i], 0x2));
                        }
                    }
                }
            }
            continue;
        case '5':
            input['shift']();
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
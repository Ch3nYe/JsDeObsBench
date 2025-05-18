function median(l) {
    var PZnmjj = {
        'taJuu': function (x, y) {
            return x / y;
        }
    };
    return l['sort']()[Math['floor'](PZnmjj['taJuu'](l['length'], 0x2))];
}
function Main(input) {
    var eZwfzA = {
        'cdtLB': '0|1|4|2|3|5',
        'UCLQQ': function (callee, param1) {
            return callee(param1);
        },
        'pkCNP': function (x, y) {
            return x < y;
        },
        'cPqqc': function (x, y) {
            return x + y;
        },
        'UNpIN': function (x, y) {
            return x < y;
        },
        'MOWQd': function (callee, param1) {
            return callee(param1);
        }
    };
    var epUEWu = eZwfzA['cdtLB']['split']('|');
    var PNufqN = 0x0;
    while (!![]) {
        switch (epUEWu[PNufqN++]) {
        case '0':
            input = input['split']('\x0a');
            continue;
        case '1':
            N = eZwfzA['UCLQQ'](parseInt, input[0x0]);
            continue;
        case '2':
            m = [];
            continue;
        case '3':
            for (var i = 0x0; eZwfzA['pkCNP'](i, N); i++) {
                for (var j = eZwfzA['cPqqc'](i, 0x1); eZwfzA['UNpIN'](j, N + 0x1); j++) {
                    m['push'](eZwfzA['UCLQQ'](median, a['slice'](i, j)));
                }
            }
            continue;
        case '4':
            a = input[0x1]['split']('\x20');
            continue;
        case '5':
            console['log'](eZwfzA['MOWQd'](median, m));
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
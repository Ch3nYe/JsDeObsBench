function Main(input) {
    var kUKRRT = {
        'FovEh': '8|5|6|1|4|3|0|7|2',
        'XXZKa': function (x, y) {
            return x / y;
        },
        'eXOBZ': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ZCmoh': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ExpCM': function (x, y) {
            return x - y;
        }
    };
    var WndpGy = kUKRRT['FovEh']['split']('|');
    var FteRNf = 0x0;
    while (!![]) {
        switch (WndpGy[FteRNf++]) {
        case '0':
            var left = Math['ceil'](kUKRRT['XXZKa'](minPoint, K - 0x1));
            continue;
        case '1':
            var K = kUKRRT['eXOBZ'](parseInt, NK[0x1], 0xa);
            continue;
        case '2':
            console['log'](left + right);
            continue;
        case '3':
            var minPoint = A['indexOf'](0x1);
            continue;
        case '4':
            var A = NKA[0x1]['split']('\x20')['map'](v => parseInt(v, 0xa));
            continue;
        case '5':
            var NK = NKA[0x0]['split']('\x20');
            continue;
        case '6':
            var N = kUKRRT['ZCmoh'](parseInt, NK[0x0], 0xa);
            continue;
        case '7':
            var right = Math['ceil'](kUKRRT['XXZKa'](kUKRRT['ExpCM'](kUKRRT['ExpCM'](N, minPoint), 0x1), K - 0x1));
            continue;
        case '8':
            var NKA = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
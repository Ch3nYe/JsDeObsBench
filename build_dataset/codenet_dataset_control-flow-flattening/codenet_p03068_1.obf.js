var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var vbttvL = {
        'QRWLT': '4|3|2|0|6|1|5',
        'zDSki': function (x, y) {
            return x < y;
        },
        'yJtvV': function (x, y) {
            return x !== y;
        },
        'PxviY': function (x, y) {
            return x - y;
        },
        'CJeQW': function (callee, param1) {
            return callee(param1);
        },
        'JmBWu': function (callee, param1) {
            return callee(param1);
        }
    };
    var njaxEL = vbttvL['QRWLT']['split']('|');
    var EtslIc = 0x0;
    while (!![]) {
        switch (njaxEL[EtslIc++]) {
        case '0':
            for (var i = 0x0; vbttvL['zDSki'](i, N); i++) {
                if (vbttvL['yJtvV'](S[vbttvL['PxviY'](K, 0x1)], S[i])) {
                    S[i] = '*';
                }
            }
            continue;
        case '1':
            for (var i = 0x0; vbttvL['zDSki'](i, N); i++) {
                result = result + S[i];
            }
            continue;
        case '2':
            var K = vbttvL['CJeQW'](Number, lines[0x2]);
            continue;
        case '3':
            var S = lines[0x1]['split']('');
            continue;
        case '4':
            var N = vbttvL['JmBWu'](Number, lines[0x0]);
            continue;
        case '5':
            console['log'](result);
            continue;
        case '6':
            var result = '';
            continue;
        }
        break;
    }
});
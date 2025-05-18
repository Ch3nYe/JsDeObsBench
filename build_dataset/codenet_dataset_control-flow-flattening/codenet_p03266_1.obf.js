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
    var yLtMXC = {
        'MZeUW': '2|3|1|0|4',
        'TFMNM': function (x, y) {
            return x <= y;
        },
        'zTprq': function (x, y) {
            return x * y;
        },
        'eqtZh': function (x, y) {
            return x - y;
        },
        'xqzAR': function (x, y) {
            return x / y;
        },
        'EBimj': function (callee, param1) {
            return callee(param1);
        }
    };
    var zLqfQH = yLtMXC['MZeUW']['split']('|');
    var CoHQpt = 0x0;
    while (!![]) {
        switch (zLqfQH[CoHQpt++]) {
        case '0':
            for (var i = 0x1; yLtMXC['TFMNM'](i, K); i++) {
                if (yLtMXC['zTprq'](i, 0x2) % K === 0x0) {
                    if (yLtMXC['TFMNM'](0x1, Math['floor'](yLtMXC['eqtZh'](N, i) / K))) {
                        ans += Math['pow'](Math['floor'](yLtMXC['xqzAR'](N - i, K)) + 0x1, 0x3);
                    } else {
                        ans++;
                    }
                }
            }
            continue;
        case '1':
            var ans = 0x0;
            continue;
        case '2':
            var N = Number(lines[0x0]['split']('\x20')[0x0]);
            continue;
        case '3':
            var K = yLtMXC['EBimj'](Number, lines[0x0]['split']('\x20')[0x1]);
            continue;
        case '4':
            console['log'](ans);
            continue;
        }
        break;
    }
});
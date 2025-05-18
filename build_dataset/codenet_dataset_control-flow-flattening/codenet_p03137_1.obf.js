var readline = require('readline');
var lines = [];
var result = 0x0;
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var vCCJTg = {
        'MQItz': function (x, y) {
            return x < y;
        },
        'wfTPX': function (callee, param1) {
            return callee(param1);
        },
        'NoKPq': function (callee, param1) {
            return callee(param1);
        }
    };
    var FgtIOn = '2|4|8|7|3|5|6|1|0'['split']('|');
    var ihFMHC = 0x0;
    while (!![]) {
        switch (FgtIOn[ihFMHC++]) {
        case '0':
            console['log'](result);
            continue;
        case '1':
            for (var i = N - 0x1; vCCJTg['MQItz'](i, M); i++) {
                result += sum[i];
            }
            continue;
        case '2':
            var N = Number(lines[0x0]['split']('\x20')[0x0]);
            continue;
        case '3':
            var sum = vCCJTg['wfTPX'](Array, M)['fill'](0x0);
            continue;
        case '4':
            var M = vCCJTg['NoKPq'](Number, lines[0x0]['split']('\x20')[0x1]);
            continue;
        case '5':
            for (var i = 0x1; vCCJTg['MQItz'](i, M); i++) {
                sum[i] = X[i] - X[i - 0x1];
            }
            continue;
        case '6':
            sum['sort']((a, b) => b - a);
            continue;
        case '7':
            X['sort']((a, b) => a - b);
            continue;
        case '8':
            var X = lines[0x1]['split']('\x20')['map'](value => Number(value));
            continue;
        }
        break;
    }
});
var lines = [];
var result = 0x0;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var SAuAse = {
        'EogVW': function (x, y) {
            return x < y;
        },
        'vLVcO': function (x, y) {
            return x - y;
        },
        'NqZwX': function (x, y) {
            return x + y;
        }
    };
    var N = Number(lines[0x0]);
    var a = lines[0x1]['split']('\x20')['map'](value => Number(value));
    for (var i = 0x0; SAuAse['EogVW'](i, N); i++) {
        if (i < a[i]) {
            if (a[SAuAse['vLVcO'](a[i], 0x1)] === SAuAse['NqZwX'](i, 0x1)) {
                result++;
            }
        }
    }
    console['log'](result);
});
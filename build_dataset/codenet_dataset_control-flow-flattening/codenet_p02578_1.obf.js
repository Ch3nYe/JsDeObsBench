process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    var VngMDr = {
        'QdeUG': function (x, y) {
            return x < y;
        },
        'gszoW': function (x, y) {
            return x - y;
        },
        'oTeYU': function (callee, param1) {
            return callee(param1);
        }
    };
    var VmLPGA = '2|1|4|0|3'['split']('|');
    var XLizmg = 0x0;
    while (!![]) {
        switch (VmLPGA[XLizmg++]) {
        case '0':
            for (var i = 0x0; VngMDr['QdeUG'](i, N); i++) {
                var Ai = parseInt(lines[0x1]['split']('\x20')[i]);
                MaxNum = Math['max'](MaxNum, Ai);
                sum += VngMDr['gszoW'](MaxNum, Ai);
            }
            continue;
        case '1':
            var sum = 0x0;
            continue;
        case '2':
            var N = VngMDr['oTeYU'](parseInt, lines[0x0]);
            continue;
        case '3':
            console['log'](sum);
            continue;
        case '4':
            var MaxNum = 0x0;
            continue;
        }
        break;
    }
});
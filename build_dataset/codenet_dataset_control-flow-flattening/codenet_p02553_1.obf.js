process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var t = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    var nCaepQ = {
        'XZhfe': '10|0|1|6|5|13|12|7|3|9|11|2|8|4',
        'cBGwC': function (callee, param1) {
            return callee(param1);
        },
        'QzRnx': function (callee, param1) {
            return callee(param1);
        },
        'GDUBP': function (x, y) {
            return x * y;
        },
        'JtgYt': function (x, y) {
            return x * y;
        }
    };
    var UkyJYy = nCaepQ['XZhfe']['split']('|');
    var nhSzYO = 0x0;
    while (!![]) {
        switch (UkyJYy[nhSzYO++]) {
        case '0':
            var a = nCaepQ['cBGwC'](parseInt, x[0x0]);
            continue;
        case '1':
            var b = nCaepQ['QzRnx'](parseInt, x[0x1]);
            continue;
        case '2':
            t['push'](bc);
            continue;
        case '3':
            var bd = nCaepQ['GDUBP'](b, d);
            continue;
        case '4':
            console['log'](Math['max']['apply'](null, t));
            continue;
        case '5':
            var d = parseInt(x[0x3]);
            continue;
        case '6':
            var c = parseInt(x[0x2]);
            continue;
        case '7':
            var bc = b * c;
            continue;
        case '8':
            t['push'](bd);
            continue;
        case '9':
            t['push'](ac);
            continue;
        case '10':
            var x = lines[0x0]['split']('\x20');
            continue;
        case '11':
            t['push'](ad);
            continue;
        case '12':
            var ad = a * d;
            continue;
        case '13':
            var ac = nCaepQ['JtgYt'](a, c);
            continue;
        }
        break;
    }
});
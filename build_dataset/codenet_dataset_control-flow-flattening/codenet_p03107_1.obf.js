'use strict';
function Main(input) {
    var UZRcuR = {
        'rBDCQ': '4|3|2|6|5|1|0',
        'QKoCG': function (x, y) {
            return x * y;
        },
        'Nxtyt': function (x, y) {
            return x === y;
        }
    };
    var lrHycv = UZRcuR['rBDCQ']['split']('|');
    var GNEvfM = 0x0;
    while (!![]) {
        switch (lrHycv[GNEvfM++]) {
        case '0':
            console['log'](UZRcuR['QKoCG'](Math['min'](zero, one), 0x2));
            continue;
        case '1':
            while (input['length']) {
                if (UZRcuR['Nxtyt'](input['pop'](), '0'))
                    zero++;
                else
                    one++;
            }
            continue;
        case '2':
            var height = input['length'];
            continue;
        case '3':
            input = input['replace'](/\s+/, '')['split']('');
            continue;
        case '4':
            input = input['trim']();
            continue;
        case '5':
            var zero = 0x0;
            continue;
        case '6':
            var one = 0x0;
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
'use strict';
const main = arg => {
    const Ynlewf = {
        'LjJCA': function (callee, param1) {
            return callee(param1);
        },
        'PYbOI': function (x, y) {
            return x >= y;
        },
        'fqzZW': function (x, y) {
            return x - y;
        },
        'anvxc': function (x, y) {
            return x >= y;
        },
        'OzYaI': function (x, y) {
            return x + y;
        }
    };
    const input = arg['trim']()['split']('\x0a');
    let H = Ynlewf['LjJCA'](Number, input[0x0]['split']('\x20'));
    let W = Ynlewf['LjJCA'](Number, input[0x1]['split']('\x20'));
    let N = Number(input[0x2]['split']('\x20'));
    let paintedRow = 0x0;
    let paintedColumn = 0x0;
    let paintedCell = 0x0;
    while (0x1) {
        if (Ynlewf['PYbOI'](W, H)) {
            paintedCell += Ynlewf['fqzZW'](W, paintedColumn);
            paintedRow++;
        } else {
            paintedCell += Ynlewf['fqzZW'](H, paintedRow);
            paintedColumn++;
        }
        if (Ynlewf['anvxc'](paintedCell, N))
            break;
    }
    console['log'](Ynlewf['OzYaI'](paintedColumn, paintedRow));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
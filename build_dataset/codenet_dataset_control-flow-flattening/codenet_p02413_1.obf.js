'use strict';
(function (stdin) {
    var ripWek = {
        'ROAYI': function (x, y) {
            return x + y;
        },
        'TjIyq': '4|0|1|5|2|3',
        'MtugF': function (x, y) {
            return x < y;
        }
    };
    function sumLine(a, b) {
        return ripWek['ROAYI'](a, b);
    }
    function result(matrix) {
        var rxErwC = ripWek['TjIyq']['split']('|');
        var ncGAST = 0x0;
        while (!![]) {
            switch (rxErwC[ncGAST++]) {
            case '0':
                matrix['map'](function (v) {
                    return v['push'](v['reduce'](sumLine));
                });
                continue;
            case '1':
                var sumColumn = [];
                continue;
            case '2':
                matrix['push'](sumColumn);
                continue;
            case '3':
                return matrix['join']('\x0a')['replace'](/,/g, '\x20');
            case '4':
                var size = matrix['shift']();
                continue;
            case '5':
                for (var i = 0x0; ripWek['MtugF'](i, size[0x1] + 0x1); i++) {
                    var sumValue = 0x0;
                    for (var j = 0x0; j < size[0x0]; j++) {
                        sumValue += matrix[j][i];
                    }
                    sumColumn['push'](sumValue);
                }
                continue;
            }
            break;
        }
    }
    var inputs = stdin['toString']()['trim']()['split']('\x0a');
    var sheet = inputs['map'](function (v) {
        return v['split']('\x20')['map'](Number);
    });
    console['log'](result(sheet));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
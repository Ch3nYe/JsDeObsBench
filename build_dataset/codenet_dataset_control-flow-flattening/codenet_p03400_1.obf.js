function Main(input) {
    var lBHKDq = {
        'JsNwk': function (x, y) {
            return x < y;
        },
        'MiMnx': function (x, y) {
            return x >= y;
        },
        'efxCp': function (x, y) {
            return x + y;
        },
        'mXCHi': function (x, y) {
            return x * y;
        },
        'WUfEZ': function (x, y) {
            return x + y;
        },
        'qrCBR': function (x, y) {
            return x - y;
        },
        'zqeTp': function (callee, param1) {
            return callee(param1);
        },
        'SqFoJ': function (callee, param1) {
            return callee(param1);
        },
        'NECWp': function (callee, param1) {
            return callee(param1);
        },
        'BkZBR': function (callee, param1) {
            return callee(param1);
        }
    };
    var DnGYPq = '1|7|3|6|4|2|5|0|8'['split']('|');
    var qBTtza = 0x0;
    while (!![]) {
        switch (DnGYPq[qBTtza++]) {
        case '0':
            for (var j = 0x0; j < array['length']; j++) {
                for (var k = 0x1; lBHKDq['JsNwk'](k, 0x64); k++) {
                    if (lBHKDq['MiMnx'](d, lBHKDq['efxCp'](lBHKDq['mXCHi'](k, array[j]), 0x1))) {
                        total['push'](lBHKDq['WUfEZ'](lBHKDq['mXCHi'](k, array[j]), 0x1));
                    }
                }
            }
            continue;
        case '1':
            input = input['split']('\x0a');
            continue;
        case '2':
            for (var i = 0x0; i < lBHKDq['qrCBR'](input['length'], 0x2); i++) {
                array['push'](lBHKDq['zqeTp'](Number, input[lBHKDq['WUfEZ'](i, 0x2)]));
            }
            continue;
        case '3':
            var d = lBHKDq['SqFoJ'](Number, input[0x1]['split']('\x20')[0x0]);
            continue;
        case '4':
            var array = [];
            continue;
        case '5':
            var total = [];
            continue;
        case '6':
            var x = lBHKDq['NECWp'](Number, input[0x1]['split']('\x20')[0x1]);
            continue;
        case '7':
            var n = lBHKDq['BkZBR'](Number, input[0x0]);
            continue;
        case '8':
            console['log'](total['length'] + n + x);
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
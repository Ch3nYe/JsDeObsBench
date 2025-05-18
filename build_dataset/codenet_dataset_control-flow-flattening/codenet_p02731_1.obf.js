'use strict';
function Main(input) {
    var xUPmWd = {
        'xXHGr': function (x, y) {
            return x * y;
        },
        'JlKdA': function (x, y) {
            return x / y;
        },
        'uLSap': function (x, y) {
            return x * y;
        }
    };
    input = input['split']('\x0a');
    var volume = xUPmWd['xXHGr'](xUPmWd['JlKdA'](xUPmWd['uLSap'](xUPmWd['JlKdA'](input, 0x3), input), 0x3), input) / 0x3;
    console['log'](volume['toFixed'](0xc));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
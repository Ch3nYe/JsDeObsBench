'use strict';
function main(input) {
    var HVOrVT = {
        'FxcZd': function (x, y) {
            return x + y;
        }
    };
    var line = input['split']('\x20');
    console['log'](HVOrVT['FxcZd'](line[0x2] + '\x20' + line[0x0], '\x20') + line[0x1]);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
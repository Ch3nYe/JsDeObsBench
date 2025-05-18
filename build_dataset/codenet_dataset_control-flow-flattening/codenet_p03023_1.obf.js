'use strict';
(function (input) {
    var Zyexvu = {
        'nVoNo': function (x, y) {
            return x - y;
        },
        'onVcU': function (x, y) {
            return x * y;
        }
    };
    input = Zyexvu['nVoNo'](input['trim'](), 0x0);
    console['log'](Zyexvu['onVcU'](0xb4, Zyexvu['nVoNo'](input, 0x2)));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
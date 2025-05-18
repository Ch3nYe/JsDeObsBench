'use strict';
function main(arg) {
    var sppDZt = {
        'wKrtm': function (x, y) {
            return x >= y;
        }
    };
    var input = arg['split']('\x0a');
    var retu = input[0x0];
    var kazu = [];
    for (var i = 0x1; sppDZt['wKrtm'](retu, i); i++) {
        kazu['push'](input[i]);
    }
    for (var x = 0x0, len = kazu['length']; x < len; ++x) {
        var kazu2 = kazu['slice'](0x0, kazu['length']);
        kazu2['splice'](x, 0x1);
        console['log'](Math['max']['apply'](null, kazu2));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (v) {
    var jeCCOf = {
        'WYQcf': function (x, y) {
            return x - y;
        }
    };
    var a = jeCCOf['WYQcf'](v['split']('\x20')[0x0], 0x0);
    var b = jeCCOf['WYQcf'](v['split']('\x20')[0x1], 0x0);
    console['log'](a + b);
});
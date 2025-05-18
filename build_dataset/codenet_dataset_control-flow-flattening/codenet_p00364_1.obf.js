var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
arr = arr['map'](v => v['split']('\x20')['map'](Number));
var [n, t] = arr['shift']();
var max = 0x0;
arr['forEach'](v => {
    var aWNVia = {
        'JPwqM': function (x, y) {
            return x / y;
        }
    };
    max = Math['max'](max, aWNVia['JPwqM'](v[0x1], v[0x0]));
});
console['log']((max * t)['toFixed'](0x6));
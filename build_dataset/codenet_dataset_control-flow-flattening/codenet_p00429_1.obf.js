var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i = i + 0x2) {
    var n = Arr[i] - 0x0;
    var str = Arr[i + 0x1];
    for (var j = 0x0; j < n; j++) {
        str = str['replace'](/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (s) {
            var qoKIVc = {
                'BVSav': function (x, y) {
                    return x + y;
                }
            };
            return qoKIVc['BVSav'](s['length'], s[0x0]);
        });
    }
    console['log'](str);
    if (Arr[i + 0x2] == '0')
        break;
}
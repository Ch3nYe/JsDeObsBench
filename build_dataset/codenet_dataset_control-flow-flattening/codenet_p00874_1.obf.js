var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wd = arr['shift']();
    if (wd == '0\x200')
        break;
    var W = arr['shift']()['split']('\x20')['map'](Number);
    var D = arr['shift']()['split']('\x20')['map'](Number);
    var sum = W['reduce'](function (a, b) {
        var hzsMCE = {
            'Vnnib': function (x, y) {
                return x + y;
            }
        };
        return hzsMCE['Vnnib'](a, b);
    });
    D['forEach'](function (v) {
        var index = W['indexOf'](v);
        if (index != -0x1)
            W[index] = '';
        else
            sum += v;
    });
    console['log'](sum);
}
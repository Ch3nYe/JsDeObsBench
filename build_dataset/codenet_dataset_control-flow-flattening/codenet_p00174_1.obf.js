var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == '0')
        break;
    var arr = str['split']('');
    var a = 0x0;
    var b = 0x0;
    arr['shift']();
    arr['forEach'](function (v) {
        var nQwVuW = {
            'PWXkd': function (x, y) {
                return x == y;
            }
        };
        if (nQwVuW['PWXkd'](v, 'A'))
            a++;
        if (v == 'B')
            b++;
    });
    a > b ? a++ : b++;
    console['log'](a + '\x20' + b);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [n, m] = arr['shift']()['split']('\x20')['map'](Number);
    if (n == 0x0 && m == 0x0)
        break;
    var x = m / n;
    var sum = 0x0;
    var a = arr['shift']()['split']('\x20')['map'](Number);
    a['forEach'](_0x4edca9 => {
        if (_0x4edca9 >= x)
            sum += x;
        else
            sum += _0x4edca9;
    });
    console['log'](sum);
}
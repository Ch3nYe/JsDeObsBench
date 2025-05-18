var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var a = Arr['shift']();
    if (a == '0')
        break;
    var xy = [];
    for (var i = 0x0; i < a; i++)
        xy['push'](Arr['shift']());
    var b = Arr['shift']();
    var news = [];
    for (var i = 0x0; i < b; i++)
        news['push'](Arr['shift']());
    var X = 0xa;
    var Y = 0xa;
    var XY = [];
    news['forEach'](function (_0x1a850b) {
        var _0x3369d7 = _0x1a850b['split']('\x20');
        for (var _0x1e61ee = 0x0; _0x1e61ee < _0x3369d7[0x1] - 0x0; _0x1e61ee++) {
            if (_0x3369d7[0x0] == 'N')
                Y++;
            if (_0x3369d7[0x0] == 'E')
                X++;
            if (_0x3369d7[0x0] == 'W')
                X--;
            if (_0x3369d7[0x0] == 'S')
                Y--;
            XY['push'](X + '\x20' + Y);
        }
    });
    var flag = xy['every'](function (_0x8cece9) {
        return XY['indexOf'](_0x8cece9) != -0x1;
    });
    console['log'](flag ? 'Yes' : 'No');
}
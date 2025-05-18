var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr['shift']()['split']('\x20');
    var L = 0x0;
    var R = 0x0;
    var UD = 0x2;
    var cnt = 0x0;
    ary['forEach'](function (_0x19daa1) {
        if (_0x19daa1 == 'lu')
            L = 0x1;
        else if (_0x19daa1 == 'ru')
            R = 0x1;
        else if (_0x19daa1 == 'ld')
            L = 0x0;
        else if (_0x19daa1 == 'rd')
            R = 0x0;
        if (UD == L + R) {
            cnt++;
            UD = UD == 0x2 ? 0x0 : 0x2;
        }
    });
    console['log'](cnt);
}
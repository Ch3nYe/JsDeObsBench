function move(_0x48a01e, _0x11ef35, _0x17ebe5, _0x2a54cd, _0x4c24f7, _0x59ab24) {
    var _0x141b00 = this['toString']();
    if (_0x141b00 == 's')
        return [
            _0x11ef35,
            _0x59ab24,
            _0x17ebe5,
            _0x2a54cd,
            _0x48a01e,
            _0x4c24f7
        ];
    else if (_0x141b00 == 'n')
        return [
            _0x4c24f7,
            _0x48a01e,
            _0x17ebe5,
            _0x2a54cd,
            _0x59ab24,
            _0x11ef35
        ];
    else if (_0x141b00 == 'w')
        return [
            _0x2a54cd,
            _0x11ef35,
            _0x48a01e,
            _0x59ab24,
            _0x4c24f7,
            _0x17ebe5
        ];
    else if (_0x141b00 == 'e')
        return [
            _0x17ebe5,
            _0x11ef35,
            _0x59ab24,
            _0x48a01e,
            _0x4c24f7,
            _0x2a54cd
        ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var dice = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6
    ];
    while (n--) {
        var str = arr['shift']();
        dice = move['apply'](str[0x0], dice);
    }
    console['log'](dice[0x0]);
}
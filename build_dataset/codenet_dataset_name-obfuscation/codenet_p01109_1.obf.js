var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var a = arr['shift']()['split']('\x20')['map'](Number);
    var sum = a['reduce']((_0x4da76a, _0x557b8f) => _0x4da76a + _0x557b8f);
    console['log'](a['filter'](_0x3ce691 => _0x3ce691 <= sum / n)['length']);
}
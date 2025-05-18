var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == 'END\x20OF\x20INPUT')
        break;
    var arr = str['split']('\x20');
    arr['forEach'](function (_0x439c98, _0x5d71a6) {
        arr[_0x5d71a6] = _0x439c98['length'];
    });
    console['log'](arr['join'](''));
}
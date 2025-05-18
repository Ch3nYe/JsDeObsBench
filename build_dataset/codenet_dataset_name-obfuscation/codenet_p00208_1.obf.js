var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var str = n['toString'](0x8) + '';
    str = str['replace'](/7/g, '9');
    str = str['replace'](/6/g, '8');
    str = str['replace'](/5/g, '7');
    str = str['replace'](/4/g, '5');
    console['log'](str);
}
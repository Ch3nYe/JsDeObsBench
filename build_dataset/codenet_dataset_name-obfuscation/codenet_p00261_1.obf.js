var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == '#')
        break;
    var p = 'A';
    for (var i = 0x0; i < str['length']; i++) {
        var s = str[i] - 0x0;
        if (p == 'A' && s === 0x0)
            p = 'X';
        else if (p == 'A' && s === 0x1)
            p = 'Y';
        else if (p == 'B' && s === 0x0)
            p = 'Y';
        else if (p == 'B' && s === 0x1)
            p = 'X';
        else if (p == 'W' && s === 0x0)
            p = 'B';
        else if (p == 'W' && s === 0x1)
            p = 'Y';
        else if (p == 'X' && s === 0x0)
            p = '';
        else if (p == 'X' && s === 0x1)
            p = 'Z';
        else if (p == 'Y' && s === 0x0)
            p = 'X';
        else if (p == 'Y' && s === 0x1)
            p = '';
        else if (p == 'Z' && s === 0x0)
            p = 'W';
        else if (p == 'Z' && s === 0x1)
            p = 'B';
    }
    console['log'](p == 'B' ? 'Yes' : 'No');
}
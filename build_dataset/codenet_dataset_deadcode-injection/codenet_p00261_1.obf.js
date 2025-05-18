var a0_0x21d9f3 = a0_0x2e06;
var input = require('fs')[a0_0x21d9f3(0x0)](a0_0x21d9f3(0x1), 'utf8');
function a0_0x2e06(zxHQDr, key) {
    var stringArray = a0_0xfb58();
    a0_0x2e06 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e06(zxHQDr, key);
}
function a0_0xfb58() {
    var _0x12b898 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'log',
        'Yes'
    ];
    a0_0xfb58 = function () {
        return _0x12b898;
    };
    return a0_0xfb58();
}
var Arr = input[a0_0x21d9f3(0x2)]()['split']('\x0a');
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
    console[a0_0x21d9f3(0x3)](p == 'B' ? a0_0x21d9f3(0x4) : 'No');
}
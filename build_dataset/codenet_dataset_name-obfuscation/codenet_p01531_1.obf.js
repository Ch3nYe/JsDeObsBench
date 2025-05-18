var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('');
var x = '';
arr['forEach'](function (_0x29a415) {
    if (_0x29a415 == '0')
        x += 'w';
    if (_0x29a415 == '1')
        x += '';
    if (_0x29a415 == '2')
        x += 'k';
    if (_0x29a415 == '3')
        x += 's';
    if (_0x29a415 == '4')
        x += 't';
    if (_0x29a415 == '5')
        x += 'n';
    if (_0x29a415 == '6')
        x += 'h';
    if (_0x29a415 == '7')
        x += 'm';
    if (_0x29a415 == '8')
        x += 'y';
    if (_0x29a415 == '9')
        x += 'r';
    if (_0x29a415 == 'T')
        x += 'a';
    if (_0x29a415 == 'L')
        x += 'i';
    if (_0x29a415 == 'U')
        x += 'u';
    if (_0x29a415 == 'R')
        x += 'e';
    if (_0x29a415 == 'D')
        x += 'o';
});
x = x['replace'](/wu/g, 'nn');
console['log'](x);
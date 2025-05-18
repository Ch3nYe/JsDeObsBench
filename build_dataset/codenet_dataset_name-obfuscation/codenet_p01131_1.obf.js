var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
var abc = [
    '',
    '.,!?\x20',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
];
abc = abc['map'](function (_0x878745) {
    return _0x878745['split']('');
});
for (var i = 0x0; i < AL; i++) {
    var arr = Arr[i]['split']('')['map'](Number);
    var str = '';
    var a = '';
    var n = -0x1;
    arr['forEach'](function (_0x597f60) {
        if (_0x597f60 > 0x0) {
            n++;
            a = abc[_0x597f60][n % abc[_0x597f60]['length']];
        } else {
            str += a;
            n = -0x1;
            a = '';
        }
    });
    console['log'](str);
}
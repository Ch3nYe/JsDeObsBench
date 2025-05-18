var objStr = {};
var objNum = {};
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
abc['forEach'](function (_0x5c7e65, _0x26c6e6) {
    objStr[_0x5c7e65] = _0x26c6e6;
    objNum[_0x26c6e6] = _0x5c7e65;
});
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var str = Arr['shift']();
    var AB = [];
    for (var i = 0x0; i < N; i++) {
        var ab = Arr['shift']()['split']('\x20')['map'](Number);
        AB['push'](ab);
    }
    AB['reverse']();
    var s = str['split']('');
    for (var i = 0x0; i < N; i++) {
        var ab = AB[i];
        var plus = ab[0x1] - ab[0x0];
        var m1 = s[ab[0x0] - 0x1];
        var m2 = s[ab[0x1] - 0x1];
        var n1 = objStr[m1] + plus;
        var n2 = objStr[m2] + plus;
        s[ab[0x0] - 0x1] = objNum[n2 % abc['length']];
        s[ab[0x1] - 0x1] = objNum[n1 % abc['length']];
    }
    console['log'](s['join'](''));
}
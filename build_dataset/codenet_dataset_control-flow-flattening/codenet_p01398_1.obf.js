var objStr = {};
var objNum = {};
var abc = 'abcdefghijklmnopqrstuvwxyz'['split']('');
abc['forEach'](function (v, i) {
    objStr[v] = i;
    objNum[i] = v;
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
        var wsGnIe = '6|7|2|4|3|0|5|1'['split']('|');
        var FNwYoW = 0x0;
        while (!![]) {
            switch (wsGnIe[FNwYoW++]) {
            case '0':
                var n2 = objStr[m2] + plus;
                continue;
            case '1':
                s[ab[0x1] - 0x1] = objNum[n1 % abc['length']];
                continue;
            case '2':
                var m1 = s[ab[0x0] - 0x1];
                continue;
            case '3':
                var n1 = objStr[m1] + plus;
                continue;
            case '4':
                var m2 = s[ab[0x1] - 0x1];
                continue;
            case '5':
                s[ab[0x0] - 0x1] = objNum[n2 % abc['length']];
                continue;
            case '6':
                var ab = AB[i];
                continue;
            case '7':
                var plus = ab[0x1] - ab[0x0];
                continue;
            }
            break;
        }
    }
    console['log'](s['join'](''));
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var SEG = [
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x0,
        0x0
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ]['reverse']()
];
var n = Arr[0x0];
var seg = [];
for (var i = 0x1; i < Arr['length']; i++) {
    if (n == 0x0) {
        if (i == 0x0)
            continue;
        var arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        seg['forEach'](function (v) {
            var wKsuCL = {
                'UilBz': '3|1|0|2|4',
                'cpROK': function (x, y) {
                    return x < y;
                },
                'jfqhp': function (x, y) {
                    return x == y;
                }
            };
            var qlnTEe = wKsuCL['UilBz']['split']('|');
            var bPbiWX = 0x0;
            while (!![]) {
                switch (qlnTEe[bPbiWX++]) {
                case '0':
                    for (var i = 0x0; wKsuCL['cpROK'](i, 0x7); i++) {
                        str += wKsuCL['jfqhp'](V[i], arr[i]) ? '0' : '1';
                    }
                    continue;
                case '1':
                    var str = '';
                    continue;
                case '2':
                    console['log'](str);
                    continue;
                case '3':
                    var V = SEG[v];
                    continue;
                case '4':
                    arr = V['slice']();
                    continue;
                }
                break;
            }
        });
        if (Arr[i] == -0x1)
            break;
        seg = [];
        n = Arr[i];
    } else {
        n--;
        seg['push'](Arr[i]);
    }
}
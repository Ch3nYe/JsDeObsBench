var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var nww = [];
    for (var i = 0x0; i < n; i++)
        nww[i] = arr['shift']()['split']('\x20');
    nww = nww['map'](v => [
        v[0x0],
        v[0x1] - 0x0,
        v[0x2] - 0x0
    ]);
    var max = 0x0;
    var ans = [];
    var bomb = function (arrA, arrB, sum, g) {
        var aGPJzw = {
            'Cyrwh': function (x, y) {
                return x <= y;
            },
            'sRNZH': function (x, y) {
                return x + y;
            },
            'NYRhi': function (x, y) {
                return x * y;
            },
            'qnjLL': function (x, y) {
                return x + y;
            },
            'KMDVU': function (callee, param1, param2, param3, param4) {
                return callee(param1, param2, param3, param4);
            },
            'tBMLp': function (x, y) {
                return x == y;
            },
            'WrKOK': function (x, y) {
                return x / y;
            }
        };
        if (aGPJzw['tBMLp'](arrB['length'], 0x0)) {
            if (max < aGPJzw['WrKOK'](g, sum)) {
                ans = arrA;
                max = aGPJzw['WrKOK'](g, sum);
            }
            return;
        }
        arrB['forEach'](v => {
            if (aGPJzw['Cyrwh'](sum, nww[v][0x2])) {
                var a = arrA['concat'](v);
                var b = arrB['slice']()['filter'](n => v != n);
                var c = sum + nww[v][0x1];
                var d = aGPJzw['sRNZH'](g, aGPJzw['NYRhi'](nww[v][0x1], aGPJzw['qnjLL'](arrA['length'], 0x1)));
                aGPJzw['KMDVU'](bomb, a, b, c, d);
            }
        });
    };
    var bombArr = [];
    for (var i = 0x0; i < n; i++)
        bombArr['push'](i);
    bomb([], bombArr, 0x0, 0x0);
    console['log'](ans['map'](v => nww[v][0x0])['reverse']()['join']('\x0a'));
}
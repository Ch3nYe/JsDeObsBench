var ms = [];
var flag = [];
for (var i = 0x0; i < 0x493e0; i++)
    flag[i] = !![];
var i = 0x1;
while (!![]) {
    var m = 0x7 * i - 0x1;
    var s = 0x7 * i + 0x1;
    if (m > 0x493e0)
        break;
    i++;
    if (flag[m])
        ms['push'](m);
    if (flag[s])
        ms['push'](s);
    var j = 0x2;
    while (!![]) {
        if (m * j > 0x493e0)
            break;
        flag[m * j] = ![];
        flag[s * j] = ![];
        j++;
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x1)
        break;
    var ans = [];
    var i = 0x0;
    ms['some'](function (v) {
        var hNsXKm = {
            'sNabE': function (x, y) {
                return x == y;
            },
            'Netza': function (x, y) {
                return x % y;
            },
            'nHMlb': function (x, y) {
                return x < y;
            }
        };
        if (hNsXKm['sNabE'](hNsXKm['Netza'](n, v), 0x0))
            ans['push'](v);
        return hNsXKm['nHMlb'](n, v);
    });
    console['log'](n + ':\x20' + ans['join']('\x20'));
}
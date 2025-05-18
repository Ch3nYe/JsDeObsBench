var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var x = arr[0x0];
    var ans = [[x]];
    for (var i = 0x1; i < n; i++) {
        if (x + 0x1 == arr[i])
            ans[ans['length'] - 0x1]['push'](arr[i]);
        else
            ans['push']([arr[i]]);
        x = arr[i];
    }
    ans['forEach'](function (v, i) {
        var KfMaxI = {
            'vFYAp': function (x, y) {
                return x !== y;
            },
            'fIYQL': function (x, y) {
                return x + y;
            },
            'RsJSB': function (x, y) {
                return x - y;
            }
        };
        if (KfMaxI['vFYAp'](v['length'], 0x1))
            ans[i] = KfMaxI['fIYQL'](v[0x0] + '-', v[KfMaxI['RsJSB'](v['length'], 0x1)]);
        else
            ans[i] = v[0x0];
    });
    console['log'](ans['join']('\x20'));
}
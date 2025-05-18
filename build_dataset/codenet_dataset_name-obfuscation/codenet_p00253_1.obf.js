var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n === 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    for (var i = 0x0; i < n + 0x1; i++) {
        var a = arr['filter'](function (_0x538c1b, _0x236cc2) {
            return i != _0x236cc2;
        });
        var h = a[0x1] - a[0x0];
        var flag = !![];
        for (var j = 0x1; j < n; j++) {
            if (h != a[j] - a[j - 0x1])
                flag = ![];
        }
        if (flag == !![])
            break;
    }
    console['log'](arr[i]);
}
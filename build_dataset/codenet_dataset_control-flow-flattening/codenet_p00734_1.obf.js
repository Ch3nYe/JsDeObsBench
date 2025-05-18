var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var nm = Arr['shift']();
    if (nm == '0\x200')
        break;
    nm = nm['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var N = [];
    var M = [];
    for (var i = 0x0; i < n; i++)
        N['push'](Arr['shift']() - 0x0);
    for (var i = 0x0; i < m; i++)
        M['push'](Arr['shift']() - 0x0);
    var sumN = N['reduce'](function (a, b) {
        var QLdjpn = {
            'gWRIS': function (x, y) {
                return x + y;
            }
        };
        return QLdjpn['gWRIS'](a, b);
    });
    var sumM = M['reduce'](function (a, b) {
        var ZJEwwc = {
            'XUfnU': function (x, y) {
                return x + y;
            }
        };
        return ZJEwwc['XUfnU'](a, b);
    });
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < m; j++) {
            var a = sumN - N[i] + M[j];
            var b = sumM + N[i] - M[j];
            if (a == b)
                arr['push']([
                    N[i] + M[j],
                    N[i],
                    M[j]
                ]);
        }
    }
    if (arr['length'] == 0x0) {
        console['log'](-0x1);
        continue;
    }
    arr['sort'](function (a, b) {
        var IcqLEQ = {
            'QrZEF': function (x, y) {
                return x - y;
            }
        };
        return IcqLEQ['QrZEF'](a[0x0], b[0x0]);
    });
    console['log'](arr[0x0][0x1] + '\x20' + arr[0x0][0x2]);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var PbYThQ = '4|0|3|2|1|5'['split']('|');
        var oEQqBE = 0x0;
        while (!![]) {
            switch (PbYThQ[oEQqBE++]) {
            case '0':
                var a = arr[0x1] * 0x3c + arr[0x2];
                continue;
            case '1':
                var d = arr[0x7] * 0x3c + arr[0x8];
                continue;
            case '2':
                var c = arr[0x5] * 0x3c + arr[0x6];
                continue;
            case '3':
                var b = arr[0x3] * 0x3c + arr[0x4];
                continue;
            case '4':
                var arr = Arr['shift']()['split']('\x20')['map'](Number);
                continue;
            case '5':
                team['push']([
                    arr[0x0],
                    a + b + c + d
                ]);
                continue;
            }
            break;
        }
    }
    team['sort'](function (a, b) {
        var Ewhgnp = {
            'ZzkGi': function (x, y) {
                return x - y;
            }
        };
        a = a[0x1];
        b = b[0x1];
        return Ewhgnp['ZzkGi'](a, b);
    });
    console['log'](team[0x0][0x0]);
    console['log'](team[0x1][0x0]);
    console['log'](team[team['length'] - 0x2][0x0]);
}
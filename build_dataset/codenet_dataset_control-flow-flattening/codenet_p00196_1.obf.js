var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var team = [];
    for (var i = 0x0; i < n; i++) {
        var EpScyV = '1|5|0|2|3|4'['split']('|');
        var GzTuly = 0x0;
        while (!![]) {
            switch (EpScyV[GzTuly++]) {
            case '0':
                var scoreA = 0x0;
                continue;
            case '1':
                var arr = Arr['shift']()['split']('\x20');
                continue;
            case '2':
                var scoreB = 0x0;
                continue;
            case '3':
                for (var j = 0x0; j < n - 0x1; j++) {
                    if (arr[j] - 0x0 === 0x0)
                        scoreA++;
                    if (arr[j] - 0x0 === 0x1)
                        scoreB++;
                }
                continue;
            case '4':
                team['push']([
                    name,
                    scoreA * 0x64 + (0xa - scoreB) + (0xa - j) * 0.01
                ]);
                continue;
            case '5':
                var name = arr['shift']();
                continue;
            }
            break;
        }
    }
    team['sort'](function (a, b) {
        var UmSRUU = {
            'cKEuC': function (x, y) {
                return x - y;
            }
        };
        return UmSRUU['cKEuC'](b[0x1], a[0x1]);
    });
    team['forEach'](function (v) {
        console['log'](v[0x0]);
    });
}
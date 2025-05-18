var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (arr[0x0] == '0\x200')
        break;
    var nm = arr['shift']()['split']('\x20')['map'](Number);
    var point = [];
    for (var i = 0x0; i < nm[0x0]; i++)
        point[i] = [
            0x0,
            0x0
        ];
    for (var i = 0x0; i < nm[0x1]; i++) {
        var txlHov = '4|0|3|1|2'['split']('|');
        var QdTkgh = 0x0;
        while (!![]) {
            switch (txlHov[QdTkgh++]) {
            case '0':
                var s = c['shift']();
                continue;
            case '1':
                if (k == 0x1)
                    point[c[0x0] - 0x1][0x0] += s;
                continue;
            case '2':
                c['forEach'](function (v, i) {
                    var AIQQgG = {
                        'STItr': function (x, y) {
                            return x - y;
                        }
                    };
                    point[AIQQgG['STItr'](v, 0x1)][0x1] += s;
                });
                continue;
            case '3':
                var k = c['shift']();
                continue;
            case '4':
                var c = arr['shift']()['split']('\x20')['map'](Number);
                continue;
            }
            break;
        }
    }
    var max = 0x0;
    for (var i = 0x0; i < nm[0x0]; i++) {
        for (var j = 0x0; j < nm[0x0]; j++) {
            if (i == j)
                continue;
            max = Math['max'](max, point[i][0x1] - point[j][0x0]);
        }
    }
    console['log'](max + 0x1);
}
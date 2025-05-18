var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    if (N == 0x1) {
        console['log']('1\x201');
        continue;
    }
    var arr = [];
    arr[0x0] = [
        0x0,
        0x0
    ];
    for (var i = 0x0; i < N - 0x1; i++) {
        var jHlPva = '2|1|5|4|6|9|8|0|3|7'['split']('|');
        var gAJAas = 0x0;
        while (!![]) {
            switch (jHlPva[gAJAas++]) {
            case '0':
                if (m == 0x2)
                    x = 0x1;
                continue;
            case '1':
                var n = nm[0x0];
                continue;
            case '2':
                var nm = Arr['shift']()['split']('\x20')['map'](Number);
                continue;
            case '3':
                if (m == 0x3)
                    y = 0x1;
                continue;
            case '4':
                var x = 0x0;
                continue;
            case '5':
                var m = nm[0x1];
                continue;
            case '6':
                var y = 0x0;
                continue;
            case '7':
                arr[i + 0x1] = [
                    arr[n][0x0] + x,
                    arr[n][0x1] + y
                ];
                continue;
            case '8':
                if (m == 0x1)
                    y = -0x1;
                continue;
            case '9':
                if (m == 0x0)
                    x = -0x1;
                continue;
            }
            break;
        }
    }
    var xA = 0x0;
    var xZ = 0x0;
    var yA = 0x0;
    var yZ = 0x0;
    for (var i = 0x0; i < arr['length']; i++) {
        xA = Math['min'](xA, arr[i][0x0]);
        xZ = Math['max'](xZ, arr[i][0x0]);
        yA = Math['min'](yA, arr[i][0x1]);
        yZ = Math['max'](yZ, arr[i][0x1]);
    }
    console['log'](xZ - xA + 0x1 + '\x20' + (yZ - yA + 0x1));
}
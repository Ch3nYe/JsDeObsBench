var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
var N = Arr['shift']() - 0x0;
for (var I = 0x0; I < N; I++) {
    var SMFBZe = '3|6|8|1|5|4|7|0|2'['split']('|');
    var AacfVO = 0x0;
    while (!![]) {
        switch (SMFBZe[AacfVO++]) {
        case '0':
            for (var i = 0x0; i < n; i++) {
                var XY = Arr['shift']()['split']('\x20')['map'](Number);
                var X = XY[0x0];
                var Y = XY[0x1];
                if (x1 <= X && x2 >= X && y1 <= Y && y2 >= Y)
                    cnt++;
            }
            continue;
        case '1':
            var y1 = xywh[0x1];
            continue;
        case '2':
            console['log'](cnt);
            continue;
        case '3':
            var xywh = Arr['shift']()['split']('\x20')['map'](Number);
            continue;
        case '4':
            var n = Arr['shift']() - 0x0;
            continue;
        case '5':
            var y2 = xywh[0x1] + xywh[0x3];
            continue;
        case '6':
            var x1 = xywh[0x0];
            continue;
        case '7':
            var cnt = 0x0;
            continue;
        case '8':
            var x2 = xywh[0x0] + xywh[0x2];
            continue;
        }
        break;
    }
}
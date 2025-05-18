var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
while (n--) {
    var CXPkXx = '4|0|2|1|3'['split']('|');
    var zltSBc = 0x0;
    while (!![]) {
        switch (CXPkXx[zltSBc++]) {
        case '0':
            var max = [
                0x0,
                0x0,
                0x0
            ];
            continue;
        case '1':
            max['shift']();
            continue;
        case '2':
            while (!![]) {
                var str = arr['shift']();
                if (str == '0\x200')
                    break;
                var ary = str['split']('\x20')['map'](Number);
                xy[0x0] += ary[0x0];
                xy[0x1] += ary[0x1];
                var d = Math['sqrt'](xy[0x0] * xy[0x0] + xy[0x1] * xy[0x1]);
                if (max[0x0] < d)
                    max = [
                        d,
                        xy[0x0],
                        xy[0x1]
                    ];
                else if (max[0x0] == d && max[0x1] < xy[0x0])
                    max = [
                        d,
                        xy[0x0],
                        xy[0x1]
                    ];
            }
            continue;
        case '3':
            console['log'](max['join']('\x20'));
            continue;
        case '4':
            var xy = [
                0x0,
                0x0
            ];
            continue;
        }
        break;
    }
}
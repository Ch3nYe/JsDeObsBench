var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var L = Arr['shift']();
for (var i = 0x0; i < L; i++) {
    console['log']('Case\x20' + (i + 0x1) + ':');
    var v = Arr[i];
    for (var j = 0x0; j < 0xa; j++) {
        var Lozipz = '2|3|4|0|1'['split']('|');
        var rfgwSN = 0x0;
        while (!![]) {
            switch (Lozipz[rfgwSN++]) {
            case '0':
                v = parseInt(v, 0xa);
                continue;
            case '1':
                console['log'](v);
                continue;
            case '2':
                v = '000000' + v * v;
                continue;
            case '3':
                v = v['slice'](-0x6);
                continue;
            case '4':
                v = v['slice'](0x0, 0x4);
                continue;
            }
            break;
        }
    }
}
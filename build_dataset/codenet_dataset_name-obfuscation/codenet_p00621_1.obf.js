var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wq = arr['shift']();
    if (wq == '0\x200')
        break;
    wq = wq['split']('\x20')['map'](Number);
    var w = wq[0x0];
    var W = [];
    for (var i = 0x0; i < w; i++)
        W[i] = !![];
    var cat = {};
    while (wq[0x1]--) {
        var sw = arr['shift']()['split']('\x20');
        if (sw[0x0] == 's') {
            var id = sw[0x1];
            var width = sw[0x2] - 0x0;
            var cnt = 0x0;
            var ans = 'impossible';
            for (var i = 0x0; i < w; i++) {
                cnt = W[i] ? cnt + 0x1 : 0x0;
                if (cnt == width) {
                    while (cnt--) {
                        W[i] = ![];
                        i--;
                    }
                    i++;
                    cat[id] = [
                        i,
                        width
                    ];
                    ans = i;
                    break;
                }
            }
            console['log'](ans);
        }
        if (sw[0x0] == 'w') {
            var id = sw[0x1];
            var width = cat[id][0x1];
            var i = cat[id][0x0];
            while (width--) {
                W[i] = !![];
                i++;
            }
        }
    }
    console['log']('END');
}
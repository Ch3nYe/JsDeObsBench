function BFS() {
    var RxyVEb = {
        'rxctS': function (x, y) {
            return x <= y;
        },
        'AvnKv': function (x, y) {
            return x == y;
        }
    };
    var bfs = [[
            s0,
            0x0
        ]];
    while (!![]) {
        if (RxyVEb['AvnKv'](bfs['length'], 0x0))
            break;
        var [leaf, cnt] = bfs['shift']();
        if (RxyVEb['AvnKv'](leaf, s1)) {
            flag = !![];
            console['log'](cnt);
            break;
        }
        ab['forEach'](v => {
            if (leaf['includes'](v[0x0])) {
                var re = new RegExp(v[0x0], 'g');
                var str = leaf['replace'](re, v[0x1]);
                if (RxyVEb['rxctS'](str['length'], 0xa))
                    bfs['push']([
                        str,
                        cnt + 0x1
                    ]);
            }
        });
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var ab = arr['slice'](0x0, n)['map'](v => v['split']('\x20'));
    ;
    arr = arr['slice'](n);
    var s0 = arr['shift']();
    var s1 = arr['shift']();
    var flag = ![];
    BFS();
    if (!flag)
        console['log'](-0x1);
}
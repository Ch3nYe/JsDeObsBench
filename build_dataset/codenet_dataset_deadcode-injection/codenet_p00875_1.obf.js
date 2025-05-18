function a0_0x1d87() {
    var _0xc4c0ba = [
        'length',
        'log',
        'includes',
        'replace',
        'trim',
        'shift',
        'slice',
        'split'
    ];
    a0_0x1d87 = function () {
        return _0xc4c0ba;
    };
    return a0_0x1d87();
}
var a0_0x3a8d59 = a0_0x22ff;
function a0_0x22ff(sEOeWI, key) {
    var stringArray = a0_0x1d87();
    a0_0x22ff = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x22ff(sEOeWI, key);
}
function BFS() {
    var _0x42d4d4 = a0_0x22ff;
    var bfs = [[
            s0,
            0x0
        ]];
    while (!![]) {
        if (bfs[_0x42d4d4(0x0)] == 0x0)
            break;
        var [leaf, cnt] = bfs['shift']();
        if (leaf == s1) {
            flag = !![];
            console[_0x42d4d4(0x1)](cnt);
            break;
        }
        ab['forEach'](v => {
            var _0x4800ce = a0_0x22ff;
            if (leaf[_0x4800ce(0x2)](v[0x0])) {
                var re = new RegExp(v[0x0], 'g');
                var str = leaf[_0x4800ce(0x3)](re, v[0x1]);
                if (str['length'] <= 0xa)
                    bfs['push']([
                        str,
                        cnt + 0x1
                    ]);
            }
        });
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input[a0_0x3a8d59(0x4)]()['split']('\x0a');
while (!![]) {
    var n = arr[a0_0x3a8d59(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var ab = arr[a0_0x3a8d59(0x6)](0x0, n)['map'](v => v[a0_0x3a8d59(0x7)]('\x20'));
    ;
    arr = arr['slice'](n);
    var s0 = arr[a0_0x3a8d59(0x5)]();
    var s1 = arr[a0_0x3a8d59(0x5)]();
    var flag = ![];
    BFS();
    if (!flag)
        console[a0_0x3a8d59(0x1)](-0x1);
}
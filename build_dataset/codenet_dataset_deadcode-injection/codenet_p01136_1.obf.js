function a0_0x18c0() {
    var _0x3a5cc9 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'map',
        'split',
        'slice',
        'push',
        'includes',
        'filter',
        'indexOf',
        'forEach',
        'log'
    ];
    a0_0x18c0 = function () {
        return _0x3a5cc9;
    };
    return a0_0x18c0();
}
var a0_0x1942a9 = a0_0x2eb0;
var input = require('fs')[a0_0x1942a9(0x0)](a0_0x1942a9(0x1), a0_0x1942a9(0x2));
var arr = input[a0_0x1942a9(0x3)]()['split']('\x0a');
function a0_0x2eb0(WEmGno, key) {
    var stringArray = a0_0x18c0();
    a0_0x2eb0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2eb0(WEmGno, key);
}
while (!![]) {
    var n = arr[a0_0x1942a9(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var ary = arr['slice'](0x0, n);
    ary = ary[a0_0x1942a9(0x5)](v => v[a0_0x1942a9(0x6)]('\x20')[a0_0x1942a9(0x5)](Number)[a0_0x1942a9(0x7)](0x1));
    var flag = !![];
    var h = [];
    for (var i = 0x0; i < n; i++)
        h[a0_0x1942a9(0x8)]([i]);
    for (var i = 0x1; i <= 0x1e; i++) {
        var a = [];
        ary['forEach']((v, j) => {
            var _0x4af224 = a0_0x2eb0;
            if (v[_0x4af224(0x9)](i))
                a[_0x4af224(0x8)](j);
        });
        var b = [];
        a['forEach'](v => b['push'](...h[v]));
        b = b[a0_0x1942a9(0xa)]((x, i, self) => self[a0_0x1942a9(0xb)](x) == i);
        if (b['length'] == n) {
            flag = ![];
            console['log'](i);
            break;
        }
        a[a0_0x1942a9(0xc)](v => h[v] = b);
    }
    if (flag)
        console[a0_0x1942a9(0xd)](-0x1);
    arr = arr[a0_0x1942a9(0x7)](n);
}
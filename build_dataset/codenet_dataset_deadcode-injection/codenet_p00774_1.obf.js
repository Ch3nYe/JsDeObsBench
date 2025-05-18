var a0_0x514b45 = a0_0x202b;
function stoneRemove() {
    var _0x559e75 = a0_0x202b;
    yx[_0x559e75(0x0)](function (v, i) {
        var _0x4468d9 = a0_0x202b;
        if (_0x4468d9(0x1) !== _0x4468d9(0x1)) {
            point += (x[0x0] - 0x0) * x['length'];
            return x[_0x4468d9(0x2)](/./g, '0');
        } else {
            var str = v[_0x4468d9(0x3)]('')['replace'](/([1-9])\1{2,}/, function (x) {
                var _0x31c9a1 = a0_0x202b;
                if (_0x31c9a1(0x4) !== _0x31c9a1(0x5)) {
                    point += (x[0x0] - 0x0) * x[_0x31c9a1(0x6)];
                    return x[_0x31c9a1(0x2)](/./g, '0');
                } else {
                    for (var j = 0x0; j < 0x5; j++) {
                        if (yx[i][j] != 0x0 && yx[i + 0x1][j] == 0x0) {
                            yx[i + 0x1][j] = yx[i][j];
                            yx[i][j] = 0x0;
                            flag = !![];
                        }
                    }
                }
            });
            yx[i] = str[_0x4468d9(0x7)]('')[_0x4468d9(0x8)](Number);
        }
    });
    var flag = !![];
    while (flag) {
        flag = ![];
        for (var i = 0x0; i < H - 0x1; i++) {
            for (var j = 0x0; j < 0x5; j++) {
                if (yx[i][j] != 0x0 && yx[i + 0x1][j] == 0x0) {
                    yx[i + 0x1][j] = yx[i][j];
                    yx[i][j] = 0x0;
                    flag = !![];
                }
            }
        }
    }
}
var input = require('fs')[a0_0x514b45(0x9)](a0_0x514b45(0xa), a0_0x514b45(0xb));
var arr = input['trim']()[a0_0x514b45(0x7)]('\x0a');
function a0_0x202b(LzJrVT, key) {
    var stringArray = a0_0x488a();
    a0_0x202b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x202b(LzJrVT, key);
}
function a0_0x488a() {
    var _0x507126 = [
        'forEach',
        'sUXRy',
        'replace',
        'join',
        'DwYyB',
        'UXejg',
        'length',
        'split',
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'push',
        'log'
    ];
    a0_0x488a = function () {
        return _0x507126;
    };
    return a0_0x488a();
}
while (!![]) {
    var h = arr[a0_0x514b45(0xc)]() - 0x0;
    if (h == 0x0)
        break;
    var H = h;
    var yx = [];
    while (h--)
        yx[a0_0x514b45(0xd)](arr[a0_0x514b45(0xc)]()[a0_0x514b45(0x7)]('\x20')[a0_0x514b45(0x8)](Number));
    var point = 0x0;
    var p = point;
    while (!![]) {
        stoneRemove();
        if (p == point)
            break;
        p = point;
    }
    console[a0_0x514b45(0xe)](point);
}
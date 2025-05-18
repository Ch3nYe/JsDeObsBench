var a0_0x1ed6ae = a0_0x89ad;
var input = require('fs')[a0_0x1ed6ae(0x0)]('/dev/stdin', a0_0x1ed6ae(0x1));
function a0_0x89ad(KaIorj, key) {
    var stringArray = a0_0x16c8();
    a0_0x89ad = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x89ad(KaIorj, key);
}
var arr = input[a0_0x1ed6ae(0x2)]()[a0_0x1ed6ae(0x3)]('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n === 0x0)
        break;
    var ary = [];
    for (var i = 0x0; i < n; i++)
        ary[a0_0x1ed6ae(0x4)](arr['shift']()[a0_0x1ed6ae(0x3)]('\x20')[a0_0x1ed6ae(0x5)](Number));
    ary[a0_0x1ed6ae(0x6)](function (a, b) {
        if (a[0x2] == b[0x2] && a[0x3] == b[0x3])
            return a[0x0] - b[0x0];
        else if (a[0x2] == b[0x2])
            return a[0x3] - b[0x3];
        else
            return b[0x2] - a[0x2];
    });
    var ans = [];
    var U = [];
    for (var i = 0x0; i <= 0x3e8; i++)
        U[i] = 0x0;
    ary[a0_0x1ed6ae(0x7)](function (v, i) {
        var _0x52530a = a0_0x89ad;
        var id = v[0x0];
        var u = v[0x1];
        if (i < 0xa) {
            if (U[u] < 0x3) {
                ans[_0x52530a(0x4)](id);
                U[u]++;
            }
        } else if (i < 0x14) {
            if (U[u] < 0x2) {
                ans['push'](id);
                U[u]++;
            }
        } else if (i < 0x1a) {
            if (U[u] == 0x0) {
                if (_0x52530a(0x8) === _0x52530a(0x8)) {
                    ans['push'](id);
                    U[u]++;
                } else {
                    if (U[u] == 0x0) {
                        ans[_0x52530a(0x4)](id);
                        U[u]++;
                    }
                }
            }
        }
    });
    console[a0_0x1ed6ae(0x9)](ans['join']('\x0a'));
}
function a0_0x16c8() {
    var _0x4657e0 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'push',
        'map',
        'sort',
        'forEach',
        'qwkha',
        'log'
    ];
    a0_0x16c8 = function () {
        return _0x4657e0;
    };
    return a0_0x16c8();
}
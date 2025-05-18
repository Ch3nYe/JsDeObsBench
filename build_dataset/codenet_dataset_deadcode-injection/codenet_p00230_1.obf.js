function a0_0x1c3e(SZXAjB, key) {
    var stringArray = a0_0x3346();
    a0_0x1c3e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c3e(SZXAjB, key);
}
var a0_0x4f63de = a0_0x1c3e;
function bomb() {
    var _0x4423a1 = a0_0x1c3e;
    var obj = {};
    var ans = 'NA';
    var leaf = [
        [
            0x0,
            0x0,
            0x0
        ],
        [
            0x1,
            0x0,
            0x0
        ]
    ];
    while (!![]) {
        if (leaf[_0x4423a1(0x0)] == 0x0)
            break;
        var ary = leaf['shift']();
        var x = ary[0x0];
        var y = ary[0x1];
        if (obj['hasOwnProperty'](x + ',' + y))
            continue;
        else
            obj[x + ',' + y] = !![];
        var cnt = ary[0x2];
        var v = xy[x][y];
        if (v == 0x1) {
            while (!![]) {
                y++;
                if (xy[x][y] != 0x1) {
                    y--;
                    break;
                }
            }
        } else if (v == 0x2) {
            while (!![]) {
                y--;
                if (xy[x][y] != 0x2)
                    break;
            }
        }
        if (y == n - 0x1) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; i <= 0x2; i++)
            leaf[_0x4423a1(0x1)]([
                0x1 - x,
                y + i,
                cnt + 0x1
            ]);
    }
    return ans;
}
function a0_0x3346() {
    var _0x519102 = [
        'length',
        'push',
        'readFileSync',
        'utf8',
        'shift',
        'map',
        'log'
    ];
    a0_0x3346 = function () {
        return _0x519102;
    };
    return a0_0x3346();
}
var input = require('fs')[a0_0x4f63de(0x2)]('/dev/stdin', a0_0x4f63de(0x3));
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr[a0_0x4f63de(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var xy = [];
    xy[0x0] = arr['shift']()['split']('\x20')[a0_0x4f63de(0x5)](Number);
    xy[0x1] = arr[a0_0x4f63de(0x4)]()['split']('\x20')[a0_0x4f63de(0x5)](Number);
    console[a0_0x4f63de(0x6)](bomb());
}
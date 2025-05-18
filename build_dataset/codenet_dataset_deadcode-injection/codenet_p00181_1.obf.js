function a0_0x37be() {
    var _0x3ea65c = [
        'length',
        'owvZF',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        '0\x200',
        'map',
        'push',
        'shift',
        'floor',
        'log'
    ];
    a0_0x37be = function () {
        return _0x3ea65c;
    };
    return a0_0x37be();
}
var a0_0x330d40 = a0_0xcf4a;
function seach(x) {
    var _0x2c2c8e = a0_0xcf4a;
    var flag = !![];
    var cnt = 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < ary[_0x2c2c8e(0x0)]; i++) {
        if (x < ary[i]) {
            if ('fqKBC' !== _0x2c2c8e(0x1)) {
                flag = ![];
                break;
            } else {
                sum += ary[i];
            }
        } else if (sum + ary[i] == x) {
            sum = 0x0;
            cnt++;
        } else if (sum + ary[i] > x) {
            sum = ary[i];
            cnt++;
        } else if (sum + ary[i] < x) {
            sum += ary[i];
        }
        if (cnt == m) {
            flag = ![];
            break;
        }
    }
    return flag;
}
var input = require('fs')[a0_0x330d40(0x2)](a0_0x330d40(0x3), a0_0x330d40(0x4));
function a0_0xcf4a(mhzwmS, key) {
    var stringArray = a0_0x37be();
    a0_0xcf4a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xcf4a(mhzwmS, key);
}
var arr = input[a0_0x330d40(0x5)]()[a0_0x330d40(0x6)]('\x0a');
while (!![]) {
    var mn = arr['shift']();
    if (mn == a0_0x330d40(0x7))
        break;
    mn = mn[a0_0x330d40(0x6)]('\x20')[a0_0x330d40(0x8)](Number);
    var m = mn[0x0];
    var n = mn[0x1];
    var ary = [];
    while (n--)
        ary[a0_0x330d40(0x9)](arr[a0_0x330d40(0xa)]() - 0x0);
    var L = 0x0;
    var R = 0x16e360;
    while (!![]) {
        var middle = Math[a0_0x330d40(0xb)]((L + R) / 0x2);
        if (seach(middle)) {
            R = middle - 0x1;
        } else {
            L = middle + 0x1;
        }
        if (L > R)
            break;
    }
    console[a0_0x330d40(0xc)](R + 0x1);
}
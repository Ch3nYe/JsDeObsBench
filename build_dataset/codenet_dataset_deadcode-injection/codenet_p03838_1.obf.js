var a0_0x48a9d7 = a0_0x2cf8;
inp = require('fs')[a0_0x48a9d7(0x0)](a0_0x48a9d7(0x1), 'utf8')['split']('\x0a');
l = inp['shift']()[a0_0x48a9d7(0x2)]('\x20');
x = l[0x0] * 0x1;
y = l[0x1] * 0x1;
cnt = 0x0;
function a0_0x2cf8(sBAOyx, key) {
    var stringArray = a0_0x48f2();
    a0_0x2cf8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2cf8(sBAOyx, key);
}
function a0_0x48f2() {
    var _0x4a8cbb = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'abs',
        'log'
    ];
    a0_0x48f2 = function () {
        return _0x4a8cbb;
    };
    return a0_0x48f2();
}
if (x == y) {
} else if (Math[a0_0x48a9d7(0x3)](x) == Math[a0_0x48a9d7(0x3)](y)) {
    cnt++;
} else if (x == 0x0 || y == 0x0) {
    if (y < x) {
        cnt++;
    }
    cnt += Math[a0_0x48a9d7(0x3)](Math[a0_0x48a9d7(0x3)](x) - Math[a0_0x48a9d7(0x3)](y));
} else {
    if (x > y) {
        if (x > 0x0 && y > 0x0) {
            cnt += 0x2;
        } else if (x > 0x0 && y < 0x0) {
            cnt += 0x1;
        } else {
            cnt += 0x2;
        }
    } else {
        if (x < 0x0 && y > 0x0) {
            cnt += 0x1;
        }
    }
    cnt += Math[a0_0x48a9d7(0x3)](Math[a0_0x48a9d7(0x3)](x) - Math[a0_0x48a9d7(0x3)](y));
}
console[a0_0x48a9d7(0x4)](cnt);
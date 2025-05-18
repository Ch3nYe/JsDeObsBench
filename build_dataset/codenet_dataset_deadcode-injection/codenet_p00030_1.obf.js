var a0_0xf789f2 = a0_0x38c9;
function comb(r) {
    var _0x53f859 = a0_0x38c9;
    var c = [];
    c[0x0] = -0x1;
    var k = 0x1;
    c[0x1] = 0x0;
    var ret = [];
    while (k != 0x0) {
        if ('jyeKP' !== _0x53f859(0x0)) {
            c[i] = c[i - 0x1] + 0x1;
        } else {
            for (var i = k + 0x1; i <= r; i++) {
                if ('BcIjm' === _0x53f859(0x1)) {
                    c[i] = c[i - 0x1] + 0x1;
                } else {
                    arr[_0x53f859(0x2)](c[i]);
                }
            }
            var arr = [];
            for (var i = 0x1; i <= r; i++) {
                arr['push'](c[i]);
            }
            ret['push'](arr);
            k = r;
            while (c[k] == 0x9 - r + k)
                k = k - 0x1;
            c[k] = c[k] + 0x1;
        }
    }
    return ret;
}
var input = require('fs')[a0_0xf789f2(0x3)](a0_0xf789f2(0x4), 'utf8');
var lines = input['trim']()[a0_0xf789f2(0x5)]('\x0a');
function a0_0x2fd1() {
    var _0x51839c = [
        'jyeKP',
        'BcIjm',
        'push',
        'readFileSync',
        '/dev/stdin',
        'split',
        'length',
        'log'
    ];
    a0_0x2fd1 = function () {
        return _0x51839c;
    };
    return a0_0x2fd1();
}
function a0_0x38c9(KmAVPM, key) {
    var stringArray = a0_0x2fd1();
    a0_0x38c9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38c9(KmAVPM, key);
}
var line;
while (line = lines['shift']()) {
    var nums = line[a0_0xf789f2(0x5)]('\x20');
    var n = +nums[0x0];
    var s = +nums[0x1];
    if (n + s == 0x0)
        break;
    var c = comb(n);
    var cnt = 0x0;
    for (var i = 0x0; i < c[a0_0xf789f2(0x6)]; i++) {
        var arr = c[i];
        if (s == arr['reduce'](function (prev, now) {
                return prev + now;
            })) {
            cnt++;
        }
    }
    console[a0_0xf789f2(0x7)](cnt);
}
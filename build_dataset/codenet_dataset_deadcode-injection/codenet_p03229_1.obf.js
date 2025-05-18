function a0_0x4cb1(kaFZPI, key) {
    var stringArray = a0_0x17c1();
    a0_0x4cb1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cb1(kaFZPI, key);
}
var a0_0x4ae790 = a0_0x4cb1;
function a0_0x17c1() {
    var _0x5d8806 = [
        'map',
        'shift',
        'sort',
        'kSdAu',
        'abs',
        'QKBQp',
        'log',
        'max',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x17c1 = function () {
        return _0x5d8806;
    };
    return a0_0x17c1();
}
function Main(input) {
    var _0x7d466c = a0_0x4cb1;
    var nums = input['split']('\x0a')[_0x7d466c(0x0)](function (value) {
        return value - 0x0;
    });
    var N = nums[_0x7d466c(0x1)]();
    nums[_0x7d466c(0x2)](function (a, b) {
        var _0x3402cf = a0_0x4cb1;
        if (_0x3402cf(0x3) === 'kSdAu') {
            return b - a;
        } else {
            r = Math[_0x3402cf(0x4)](ary[n] - ary[n + 0x1]);
            s1 += r;
        }
    });
    var ary = new Array(N);
    var m = 0x0;
    var r = N - 0x1;
    for (var l = 0x0; l < N / 0x2; l++, r--) {
        ary[m++] = nums[l];
        ary[m++] = nums[r];
    }
    var s = 0x0, s1 = 0x0;
    m = N - 0x1;
    for (var n = 0x0; n < N - 0x1; n++) {
        if (_0x7d466c(0x5) === _0x7d466c(0x5)) {
            r = Math[_0x7d466c(0x4)](ary[m] - ary[n]);
            s += r;
            m = n;
        } else {
            return value - 0x0;
        }
    }
    for (var n = 0x0; n < N - 0x1; n++) {
        r = Math['abs'](ary[n] - ary[n + 0x1]);
        s1 += r;
    }
    console[_0x7d466c(0x6)](Math[_0x7d466c(0x7)](s, s1));
}
Main(require('fs')[a0_0x4ae790(0x8)](a0_0x4ae790(0x9), 'utf8'));
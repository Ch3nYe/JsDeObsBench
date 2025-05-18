var a0_0x42c88d = a0_0x5b11;
function a0_0x5b11(mTZSxp, key) {
    var stringArray = a0_0x5dba();
    a0_0x5b11 = function (index, key) {
        index = index - 0x140;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b11(mTZSxp, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x27ab61 = a0_0x5b11;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x27ab61(0x144)) / 0x1 + -parseInt(_0x27ab61(0x150)) / 0x2 + parseInt(_0x27ab61(0x14b)) / 0x3 * (-parseInt(_0x27ab61(0x143)) / 0x4) + -parseInt(_0x27ab61(0x14a)) / 0x5 + -parseInt(_0x27ab61(0x142)) / 0x6 + -parseInt(_0x27ab61(0x14f)) / 0x7 + parseInt(_0x27ab61(0x148)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5dba, 0xbf100));
function Main(input) {
    var _0x382193 = a0_0x5b11;
    var nums = input[_0x382193(0x145)]('\x0a')[_0x382193(0x146)](function (value) {
        return value - 0x0;
    });
    var N = nums[_0x382193(0x14d)]();
    nums[_0x382193(0x14e)](function (a, b) {
        return b - a;
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
        r = Math[_0x382193(0x141)](ary[m] - ary[n]);
        s += r;
        m = n;
    }
    for (var n = 0x0; n < N - 0x1; n++) {
        r = Math['abs'](ary[n] - ary[n + 0x1]);
        s1 += r;
    }
    console[_0x382193(0x147)](Math[_0x382193(0x151)](s, s1));
}
function a0_0x5dba() {
    var _0x1e345a = [
        'split',
        'map',
        'log',
        '25199288fbRWXL',
        'readFileSync',
        '3093545gnZKNe',
        '17187UEJSEF',
        '/dev/stdin',
        'shift',
        'sort',
        '8010702AoAodk',
        '69906LzTGcM',
        'max',
        'utf8',
        'abs',
        '4367982JpSqTc',
        '536TVADIq',
        '926412tJFNVF'
    ];
    a0_0x5dba = function () {
        return _0x1e345a;
    };
    return a0_0x5dba();
}
Main(require('fs')[a0_0x42c88d(0x149)](a0_0x42c88d(0x14c), a0_0x42c88d(0x140)));
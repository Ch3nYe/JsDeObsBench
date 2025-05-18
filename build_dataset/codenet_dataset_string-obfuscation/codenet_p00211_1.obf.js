var a0_0x4e4228 = a0_0x16bd;
(function (stringArrayFunction, comparisonValue) {
    var _0x2d20f7 = a0_0x16bd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2d20f7(0x1bc)) / 0x1 * (-parseInt(_0x2d20f7(0x1bb)) / 0x2) + parseInt(_0x2d20f7(0x1c0)) / 0x3 + -parseInt(_0x2d20f7(0x1ba)) / 0x4 + parseInt(_0x2d20f7(0x1bd)) / 0x5 * (-parseInt(_0x2d20f7(0x1b4)) / 0x6) + -parseInt(_0x2d20f7(0x1b0)) / 0x7 + -parseInt(_0x2d20f7(0x1b9)) / 0x8 + parseInt(_0x2d20f7(0x1bf)) / 0x9 * (parseInt(_0x2d20f7(0x1af)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3b03, 0xd5123));
function GCD(a, b) {
    var _0x593ff9 = a0_0x16bd;
    var m = Math[_0x593ff9(0x1b3)](a, b);
    var n = Math['min'](a, b);
    while (n != 0x0) {
        var N = n;
        n = m % n;
        m = N;
    }
    return m;
}
function a0_0x16bd(oRUpIj, key) {
    var stringArray = a0_0x3b03();
    a0_0x16bd = function (index, key) {
        index = index - 0x1af;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16bd(oRUpIj, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x4e4228(0x1b2));
function a0_0x3b03() {
    var _0xf9c1d3 = [
        'max',
        '2658fKDpdw',
        'split',
        'push',
        'map',
        'log',
        '8669032pBbWYl',
        '1388108eFpCSb',
        '2782840MoEXTK',
        '1vQeQxs',
        '5155QKjOOv',
        'forEach',
        '324xbKYqF',
        '1603284zhLodX',
        '1223070czEIfQ',
        '5501524fBFuIW',
        'shift',
        'utf8'
    ];
    a0_0x3b03 = function () {
        return _0xf9c1d3;
    };
    return a0_0x3b03();
}
var Arr = input['trim']()[a0_0x4e4228(0x1b5)]('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var I = 0x0; I < n; I++) {
        var v = Arr[a0_0x4e4228(0x1b1)]()['split']('\x20')[a0_0x4e4228(0x1b7)](Number);
        var gcd = GCD(v[0x0], v[0x1]);
        arr[a0_0x4e4228(0x1b6)]([
            v[0x0] / gcd,
            v[0x1] / gcd
        ]);
    }
    var lcm = 0x1;
    arr['forEach'](function (v) {
        var gcd = GCD(v[0x1], lcm);
        lcm = v[0x1] * lcm / gcd;
    });
    arr = arr[a0_0x4e4228(0x1b7)](function (v, i) {
        return v[0x0] * (lcm / v[0x1]);
    });
    var lcm = 0x1;
    arr[a0_0x4e4228(0x1be)](function (v) {
        var gcd = GCD(v, lcm);
        lcm = v * lcm / gcd;
    });
    arr[a0_0x4e4228(0x1be)](function (v) {
        var _0x4448f9 = a0_0x4e4228;
        console[_0x4448f9(0x1b8)](lcm / v);
    });
}
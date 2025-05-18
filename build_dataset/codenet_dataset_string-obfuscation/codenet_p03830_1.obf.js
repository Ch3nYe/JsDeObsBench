function a0_0x3f8d() {
    var _0x566d1d = [
        'utf8',
        '4BmYyhk',
        '106491pjbgdR',
        '1qdKwIJ',
        '3411480GWdCZR',
        'log',
        '5067EmRDJM',
        '1743182bPIiOY',
        '845661vPawQs',
        '145eCOcFh',
        '1208QqoVJf',
        '672654XJYayg',
        '100866BrjIcI'
    ];
    a0_0x3f8d = function () {
        return _0x566d1d;
    };
    return a0_0x3f8d();
}
var a0_0x50809d = a0_0x3de6;
function a0_0x3de6(dpFwxO, key) {
    var stringArray = a0_0x3f8d();
    a0_0x3de6 = function (index, key) {
        index = index - 0x1f2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3de6(dpFwxO, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x33e287 = a0_0x3de6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x33e287(0x1f2)) / 0x1 * (-parseInt(_0x33e287(0x1fa)) / 0x2) + -parseInt(_0x33e287(0x1f7)) / 0x3 * (-parseInt(_0x33e287(0x1fd)) / 0x4) + parseInt(_0x33e287(0x1f8)) / 0x5 * (parseInt(_0x33e287(0x1fb)) / 0x6) + parseInt(_0x33e287(0x1f6)) / 0x7 + parseInt(_0x33e287(0x1f9)) / 0x8 * (-parseInt(_0x33e287(0x1f5)) / 0x9) + -parseInt(_0x33e287(0x1f3)) / 0xa + -parseInt(_0x33e287(0x1fe)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f8d, 0x3c1f7));
function main(input) {
    var _0x56e115 = a0_0x3de6;
    var n = parseInt(input);
    var map = {};
    for (var i = 0x2; i <= n; i++) {
        var t = i;
        for (var j = 0x2; j * j <= t; j++) {
            if (t % j == 0x0) {
                var cnt = 0x0;
                while (t % j == 0x0) {
                    cnt++;
                    t /= j;
                }
                if (map[j]) {
                    map[j] = map[j] + cnt;
                } else {
                    map[j] = cnt;
                }
            }
        }
        if (t != 0x1) {
            if (map[t]) {
                map[t]++;
            } else {
                map[t] = 0x1;
            }
        }
    }
    var ans = 0x1;
    var mod = 0x3b9aca07;
    for (var x in map) {
        ans = ans * (map[x] + 0x1) % mod;
    }
    console[_0x56e115(0x1f4)](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x50809d(0x1fc)));
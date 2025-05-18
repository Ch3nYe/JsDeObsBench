var a0_0x47058f = a0_0x4837;
function a0_0x508b() {
    var _0x2f6254 = [
        '1043apovEZ',
        '1067lkeQgz',
        '467538KVopdA',
        'log',
        '1114742bisVgc',
        'push',
        'forEach',
        'readFileSync',
        '47776tSZYkE',
        '20570nxbScN',
        'sort',
        'map',
        '38660HxflcY',
        '1420648ijrzJH',
        'split',
        '1yrQXIA',
        '12090663MPvrOT',
        'length',
        '1554aPAiet',
        'shift'
    ];
    a0_0x508b = function () {
        return _0x2f6254;
    };
    return a0_0x508b();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4eafc7 = a0_0x4837;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4eafc7(0x17b)) / 0x1 * (parseInt(_0x4eafc7(0x170)) / 0x2) + parseInt(_0x4eafc7(0x16e)) / 0x3 + parseInt(_0x4eafc7(0x179)) / 0x4 + -parseInt(_0x4eafc7(0x175)) / 0x5 * (parseInt(_0x4eafc7(0x16a)) / 0x6) + -parseInt(_0x4eafc7(0x16c)) / 0x7 * (-parseInt(_0x4eafc7(0x174)) / 0x8) + parseInt(_0x4eafc7(0x17c)) / 0x9 + parseInt(_0x4eafc7(0x178)) / 0xa * (-parseInt(_0x4eafc7(0x16d)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x508b, 0xb6368));
var input = require('fs')[a0_0x47058f(0x173)]('/dev/stdin', 'utf8');
function a0_0x4837(gusQme, key) {
    var stringArray = a0_0x508b();
    a0_0x4837 = function (index, key) {
        index = index - 0x16a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4837(gusQme, key);
}
var arr = input['trim']()[a0_0x47058f(0x17a)]('\x0a');
while (!![]) {
    var N = arr[a0_0x47058f(0x16b)]() - 0x0;
    if (N == 0x0)
        break;
    var obj = {};
    var ary = [];
    for (var i = 0x0; i < N; i++) {
        var nws = arr[a0_0x47058f(0x16b)]()['split']('\x20');
        var name = nws[0x0];
        var w = nws[0x1] - 0x0;
        var s = nws[0x2][a0_0x47058f(0x17a)]('')[a0_0x47058f(0x177)](Number);
        s = s[a0_0x47058f(0x17d)] == 0x3 ? s[0x0] * 0x3c + s[0x1] * 0xa + s[0x2] : s[0x0] * 0x258 + s[0x1] * 0x3c + 0xa * s[0x2] + s[0x3];
        obj[name] = w * 0x5a0 + s;
        ary[a0_0x47058f(0x171)](w * 0x5a0 + s);
    }
    var P = arr[a0_0x47058f(0x16b)]() - 0x0;
    for (var i = 0x0; i < P; i++) {
        var f = arr[a0_0x47058f(0x16b)]();
        ary[a0_0x47058f(0x171)](obj[f] - 29.5);
    }
    ary[a0_0x47058f(0x176)](function (a, b) {
        return a - b;
    });
    var cnt = 0x0;
    var i = 0x0;
    var p = 0x0;
    ary[a0_0x47058f(0x172)](function (v) {
        if (v % 0x1 == 0.5) {
            cnt++;
            p++;
            i = v + 29.5 + 0x1e;
        } else if (i <= v) {
            cnt++;
            i = v + 0x1e;
        }
    });
    if (p != P)
        cnt = -0x1;
    console[a0_0x47058f(0x16f)](cnt);
}
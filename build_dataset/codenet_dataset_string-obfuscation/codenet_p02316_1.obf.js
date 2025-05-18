var a0_0x5237d0 = a0_0x14b3;
(function (stringArrayFunction, comparisonValue) {
    var _0x5a3ea0 = a0_0x14b3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5a3ea0(0xab)) / 0x1 * (-parseInt(_0x5a3ea0(0xa3)) / 0x2) + parseInt(_0x5a3ea0(0xa8)) / 0x3 * (parseInt(_0x5a3ea0(0xae)) / 0x4) + -parseInt(_0x5a3ea0(0xaa)) / 0x5 * (-parseInt(_0x5a3ea0(0xac)) / 0x6) + -parseInt(_0x5a3ea0(0xb0)) / 0x7 + parseInt(_0x5a3ea0(0xa9)) / 0x8 + parseInt(_0x5a3ea0(0xa6)) / 0x9 + -parseInt(_0x5a3ea0(0xa4)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xa3ee, 0x30268));
function knapsack() {
    var C = [];
    for (var i = 0x0; i <= N; i++)
        C[i] = [];
    for (var i = 0x0; i <= W; i++)
        C[0x0][i] = 0x0;
    for (var i = 0x0; i <= N; i++)
        C[i][0x0] = 0x0;
    for (var i = 0x1; i <= N; i++) {
        for (var j = 0x1; j <= W; j++) {
            if (items[i]['w'] <= W) {
                if (items[i]['v'] + C[i - 0x1][j - items[i]['w']] > C[i - 0x1][j]) {
                    C[i][j] = items[i]['v'] + C[i - 0x1][j - items[i]['w']];
                } else {
                    C[i][j] = C[i - 0x1][j];
                }
            } else {
                C[i][j] = C[i - 0x1][j];
            }
        }
    }
    return C[N][W];
}
function a0_0x14b3(aFBPhz, key) {
    var stringArray = a0_0xa3ee();
    a0_0x14b3 = function (index, key) {
        index = index - 0xa1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x14b3(aFBPhz, key);
}
var input = require('fs')[a0_0x5237d0(0xa2)]('/dev/stdin', a0_0x5237d0(0xaf));
var Arr = input['trim']()['split']('\x0a');
var nW = Arr[a0_0x5237d0(0xad)]()[a0_0x5237d0(0xa5)]('\x20')['map'](Number);
var n = nW[0x0];
var W = nW[0x1];
var N = 0x0;
var items = [null];
for (var i = 0x1; i <= n; i++) {
    var arr = Arr['shift']()['split']('\x20')[a0_0x5237d0(0xa7)](Number);
    var k = 0x1;
    do {
        items['push']({
            'v': arr[0x0] * k,
            'w': arr[0x1] * k
        });
        N++;
        k++;
    } while (arr[0x1] * k <= W);
}
var max = knapsack();
console[a0_0x5237d0(0xa1)](max);
function a0_0xa3ee() {
    var _0x193780 = [
        '3446700AsQswh',
        'split',
        '2161017aqHiCp',
        'map',
        '192183hWnCTD',
        '2405760rHktVQ',
        '10715QMcWEa',
        '18501mAvuJx',
        '312eRvsnb',
        'shift',
        '4OVznqJ',
        'utf8',
        '1350559afaqaX',
        'log',
        'readFileSync',
        '2HyUnNy'
    ];
    a0_0xa3ee = function () {
        return _0x193780;
    };
    return a0_0xa3ee();
}
var a0_0xdec8e7 = a0_0x1886;
(function (stringArrayFunction, comparisonValue) {
    var _0x1baf79 = a0_0x1886;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1baf79(0xa6)) / 0x1 * (-parseInt(_0x1baf79(0xaa)) / 0x2) + -parseInt(_0x1baf79(0xa7)) / 0x3 * (parseInt(_0x1baf79(0xb1)) / 0x4) + -parseInt(_0x1baf79(0xa2)) / 0x5 * (-parseInt(_0x1baf79(0xab)) / 0x6) + -parseInt(_0x1baf79(0xa1)) / 0x7 * (-parseInt(_0x1baf79(0xa3)) / 0x8) + parseInt(_0x1baf79(0xac)) / 0x9 * (parseInt(_0x1baf79(0xa4)) / 0xa) + parseInt(_0x1baf79(0xad)) / 0xb + parseInt(_0x1baf79(0xae)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2d4b, 0xccf0b));
var input = require('fs')['readFileSync'](a0_0xdec8e7(0xaf), 'utf8');
var Arr = input[a0_0xdec8e7(0xa8)]()['split']('\x0a');
var NKTUVL = Arr[a0_0xdec8e7(0xb0)]()['split']('\x20')[a0_0xdec8e7(0xa0)](Number);
var N = NKTUVL[0x0];
var K = NKTUVL[0x1];
function a0_0x2d4b() {
    var _0x53c72a = [
        '4PPaLol',
        'log',
        'map',
        '1099vZMqIN',
        '180ahqCgO',
        '54888OpdFMC',
        '1370DKjjDg',
        'hasOwnProperty',
        '1daQRpe',
        '3170721TJuwyh',
        'trim',
        'toFixed',
        '1885382aPuNgR',
        '171222PnuRoH',
        '44046XCatEA',
        '427911Knzlxz',
        '301740rYSnaE',
        '/dev/stdin',
        'shift'
    ];
    a0_0x2d4b = function () {
        return _0x53c72a;
    };
    return a0_0x2d4b();
}
var T = NKTUVL[0x2];
var U = NKTUVL[0x3];
var V = NKTUVL[0x4];
var L = NKTUVL[0x5];
function a0_0x1886(GsReHH, key) {
    var stringArray = a0_0x2d4b();
    a0_0x1886 = function (index, key) {
        index = index - 0x9f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1886(GsReHH, key);
}
var time = 0x0;
var obj = {};
for (var i = 0x0; i < N; i++)
    obj[Arr['shift']() - 0x0] = !![];
var fast = 0x0;
var stock = 0x0;
for (var i = 0x0; i < L; i++) {
    var now = obj[a0_0xdec8e7(0xa5)](i) ? !![] : ![];
    if (fast == 0x0 && now == !![]) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        continue;
    }
    if (fast == 0x0 && now == ![] && stock == 0x0) {
        time += 0x1 / U;
        continue;
    }
    if (fast == 0x0 && now == ![] && stock > 0x0) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        stock--;
        continue;
    }
    if (fast > 0x0 && now == ![]) {
        time += 0x1 / V;
        fast--;
        continue;
    }
    if (fast > 0x0 && now == !![] && stock + 0x1 <= K) {
        time += 0x1 / V;
        fast--;
        stock++;
        continue;
    }
    if (fast > 0x0 && now == !![] && stock + 0x1 > K) {
        time += 0x1 / V;
        fast = T * V - 0x1;
        continue;
    }
}
console[a0_0xdec8e7(0x9f)](time[a0_0xdec8e7(0xa9)](0x9));
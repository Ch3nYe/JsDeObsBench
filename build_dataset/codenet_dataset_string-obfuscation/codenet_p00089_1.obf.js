var a0_0x1f595 = a0_0x47c9;
function a0_0x498b() {
    var _0x4cd5be = [
        '2150145CbJtVM',
        'push',
        'readFileSync',
        'utf8',
        '168fKjnat',
        'split',
        'map',
        'log',
        'length',
        'trim',
        '106800UTZPMB',
        '143728dvqjeq',
        '16wOMyOt',
        'max',
        '161858uNggZY',
        '65544XJNQvf',
        '270865FQOfWU',
        '39067Ykedip'
    ];
    a0_0x498b = function () {
        return _0x4cd5be;
    };
    return a0_0x498b();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5ce1bc = a0_0x47c9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5ce1bc(0xe5)) / 0x1 + -parseInt(_0x5ce1bc(0xe3)) / 0x2 * (parseInt(_0x5ce1bc(0xd4)) / 0x3) + parseInt(_0x5ce1bc(0xe1)) / 0x4 + parseInt(_0x5ce1bc(0xd5)) / 0x5 + parseInt(_0x5ce1bc(0xdb)) / 0x6 * (-parseInt(_0x5ce1bc(0xd6)) / 0x7) + -parseInt(_0x5ce1bc(0xe2)) / 0x8 + parseInt(_0x5ce1bc(0xd7)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x498b, 0x2060a));
function bomb(y, x, sum) {
    var _0x48ef93 = a0_0x47c9;
    YX[y][x] = sum;
    if (y == yx[_0x48ef93(0xdf)] - 0x1) {
        max = Math[_0x48ef93(0xe4)](max, sum);
    } else if ((yx['length'] - 0x1) / 0x2 > y) {
        if (YX[y + 0x1][x] < sum + yx[y + 0x1][x])
            bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
        if (YX[y + 0x1][x + 0x1] < sum + yx[y + 0x1][x + 0x1])
            bomb(y + 0x1, x + 0x1, sum + yx[y + 0x1][x + 0x1]);
    } else if ((yx['length'] - 0x1) / 0x2 <= y) {
        if (x - 0x1 >= 0x0) {
            if (YX[y + 0x1][x - 0x1] < sum + yx[y + 0x1][x - 0x1])
                bomb(y + 0x1, x - 0x1, sum + yx[y + 0x1][x - 0x1]);
        }
        if (x < yx[y][_0x48ef93(0xdf)] - 0x1) {
            if (YX[y + 0x1][x] < sum + yx[y + 0x1][x])
                bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
        }
    }
}
var input = require('fs')[a0_0x1f595(0xd9)]('/dev/stdin', a0_0x1f595(0xda));
var Arr = input[a0_0x1f595(0xe0)]()['split']('\x0a');
var yx = [];
function a0_0x47c9(YKxSqU, key) {
    var stringArray = a0_0x498b();
    a0_0x47c9 = function (index, key) {
        index = index - 0xd4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x47c9(YKxSqU, key);
}
var YX = [];
Arr['forEach'](function (v) {
    var _0x512858 = a0_0x1f595;
    var x = v[_0x512858(0xdc)](',')[_0x512858(0xdd)](Number);
    var X = x[_0x512858(0xdd)](function (v) {
        return 0x0;
    });
    yx['push'](x);
    YX[_0x512858(0xd8)](X);
});
var max = 0x0;
bomb(0x0, 0x0, yx[0x0][0x0]);
console[a0_0x1f595(0xde)](max);
var a0_0x420f15 = a0_0x5193;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b3d9e = a0_0x5193;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b3d9e(0xf3)) / 0x1 + -parseInt(_0x5b3d9e(0xf0)) / 0x2 + parseInt(_0x5b3d9e(0xf7)) / 0x3 + parseInt(_0x5b3d9e(0xf9)) / 0x4 * (parseInt(_0x5b3d9e(0xeb)) / 0x5) + -parseInt(_0x5b3d9e(0xf6)) / 0x6 + parseInt(_0x5b3d9e(0xf1)) / 0x7 * (-parseInt(_0x5b3d9e(0xfb)) / 0x8) + parseInt(_0x5b3d9e(0xf5)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1914, 0xb25a1));
function a0_0x1914() {
    var _0x4ebc14 = [
        'Yes',
        'trim',
        '710NuHTrx',
        'toString',
        'readFileSync',
        'shift',
        'utf8',
        '1446718cozaxZ',
        '7tMFvQY',
        'map',
        '217591uAYNHf',
        'hasOwnProperty',
        '8883054CUmeXb',
        '556260Xehfrx',
        '1340514aBxGpv',
        'apply',
        '17096ueDDdi',
        '/dev/stdin',
        '2212504ZmiwnJ',
        'log'
    ];
    a0_0x1914 = function () {
        return _0x4ebc14;
    };
    return a0_0x1914();
}
function move(d1, d2, d3, d4, d5, d6) {
    var _0xdc5967 = a0_0x5193;
    var x = this[_0xdc5967(0xec)]();
    if (x == 'N')
        return [
            d2,
            d6,
            d3,
            d4,
            d1,
            d5
        ];
    if (x == 'E')
        return [
            d4,
            d2,
            d1,
            d6,
            d5,
            d3
        ];
}
function roll(d1, d2, d3, d4, d5, d6) {
    return [
        d1,
        d3,
        d5,
        d2,
        d4,
        d6
    ];
}
function rolls(arr) {
    for (var i = 0x0; i < 0x4; i++) {
        obj[arr['join'](',')] = !![];
        arr = roll['apply'](null, arr);
    }
}
var input = require('fs')[a0_0x420f15(0xed)](a0_0x420f15(0xfa), a0_0x420f15(0xef));
var Arr = input[a0_0x420f15(0xea)]()['split']('\x0a');
function a0_0x5193(wxVkMA, key) {
    var stringArray = a0_0x1914();
    a0_0x5193 = function (index, key) {
        index = index - 0xea;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5193(wxVkMA, key);
}
var n = Arr[a0_0x420f15(0xee)]() - 0x0;
var OBJ = {};
var result = a0_0x420f15(0xfd);
for (var i = 0x0; i < n; i++) {
    var obj = {};
    var dice = Arr[i]['split']('\x20')[a0_0x420f15(0xf2)](Number);
    for (var j = 0x0; j < 0x4; j++) {
        rolls(dice);
        dice = move[a0_0x420f15(0xf8)]('N', dice);
    }
    dice = move['apply']('E', dice);
    rolls(dice);
    dice = move[a0_0x420f15(0xf8)]('E', dice);
    dice = move['apply']('E', dice);
    rolls(dice);
    for (var k in obj) {
        if (OBJ[a0_0x420f15(0xf4)](k))
            result = 'No';
        else
            OBJ[k] = !![];
    }
    if (result == 'No')
        break;
}
console[a0_0x420f15(0xfc)](result);
var a0_0x404473 = a0_0x3d51;
(function (stringArrayFunction, comparisonValue) {
    var _0x4b609a = a0_0x3d51;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4b609a(0xc3)) / 0x1 * (-parseInt(_0x4b609a(0xc5)) / 0x2) + parseInt(_0x4b609a(0xcb)) / 0x3 * (-parseInt(_0x4b609a(0xc2)) / 0x4) + -parseInt(_0x4b609a(0xcd)) / 0x5 + parseInt(_0x4b609a(0xc9)) / 0x6 + -parseInt(_0x4b609a(0xc6)) / 0x7 + parseInt(_0x4b609a(0xd0)) / 0x8 + parseInt(_0x4b609a(0xc1)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2122, 0xcf395));
var input = require('fs')[a0_0x404473(0xc7)](a0_0x404473(0xcf), a0_0x404473(0xc8));
function a0_0x2122() {
    var _0x5dfd6f = [
        '/dev/stdin',
        '2300728abbvuR',
        '6484149hoCWlz',
        '4PldNnB',
        '312034NIVHyW',
        'map',
        '10qyvJNb',
        '11136881dHefhW',
        'readFileSync',
        'utf8',
        '2998230xLQVrr',
        'MTSH',
        '913863OlVLpd',
        'split',
        '1617670UHHMQk',
        'log'
    ];
    a0_0x2122 = function () {
        return _0x5dfd6f;
    };
    return a0_0x2122();
}
var [e, y] = input['trim']()[a0_0x404473(0xcc)]('\x20')[a0_0x404473(0xc4)](Number);
function a0_0x3d51(OqHNBB, key) {
    var stringArray = a0_0x2122();
    a0_0x3d51 = function (index, key) {
        index = index - 0xc1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d51(OqHNBB, key);
}
var mtsh = a0_0x404473(0xca)[a0_0x404473(0xcc)]('');
if (e == 0x0) {
    if (y >= 0x74c && y <= 0x777) {
        e = 0x1;
        y -= 0x74c;
    } else if (y >= 0x778 && y <= 0x785) {
        e = 0x2;
        y -= 0x778;
    } else if (y >= 0x786 && y <= 0x7c4) {
        e = 0x3;
        y -= 0x786;
    } else if (y >= 0x7c5 && y <= 0x7e0) {
        e = 0x4;
        y -= 0x7c5;
    }
    console[a0_0x404473(0xce)](mtsh[e - 0x1] + (y + 0x1));
} else if (e == 0x1)
    console[a0_0x404473(0xce)](0x74c + y - 0x1);
else if (e == 0x2)
    console['log'](0x778 + y - 0x1);
else if (e == 0x3)
    console['log'](0x786 + y - 0x1);
else if (e == 0x4)
    console[a0_0x404473(0xce)](0x7c5 + y - 0x1);
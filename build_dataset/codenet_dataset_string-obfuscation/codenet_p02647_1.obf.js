var a0_0x152118 = a0_0x5824;
function a0_0x1092() {
    var _0x4f624e = [
        '5PHKTGJ',
        '1383466smpCVE',
        '422030nsUfHv',
        '133398immALJ',
        '23238JqcnhE',
        'length',
        'log',
        'utf8',
        '/dev/stdin',
        '8eyisin',
        'fill',
        '237645aAhxHk',
        'trim',
        'map',
        '1027518KBAjfZ',
        '297872iYAxhW',
        'split',
        'readFileSync'
    ];
    a0_0x1092 = function () {
        return _0x4f624e;
    };
    return a0_0x1092();
}
function a0_0x5824(quuLiP, key) {
    var stringArray = a0_0x1092();
    a0_0x5824 = function (index, key) {
        index = index - 0x141;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5824(quuLiP, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2f7a10 = a0_0x5824;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2f7a10(0x142)) / 0x1 + parseInt(_0x2f7a10(0x141)) / 0x2 + parseInt(_0x2f7a10(0x143)) / 0x3 + parseInt(_0x2f7a10(0x14e)) / 0x4 + -parseInt(_0x2f7a10(0x151)) / 0x5 * (-parseInt(_0x2f7a10(0x14d)) / 0x6) + -parseInt(_0x2f7a10(0x152)) / 0x7 + parseInt(_0x2f7a10(0x148)) / 0x8 * (-parseInt(_0x2f7a10(0x14a)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1092, 0x1a221));
function Main(input) {
    var _0x1dc272 = a0_0x5824;
    input = input['split']('\x0a');
    var mem = input[0x0][_0x1dc272(0x14f)]('\x20');
    var arr = input[0x1][_0x1dc272(0x14f)]('\x20')[_0x1dc272(0x14c)](Number);
    for (var p = 0x0; p < mem[0x1]; p++) {
        var tmp = new Array(arr['length'])[_0x1dc272(0x149)](0x0);
        for (var i = 0x0; i < arr[_0x1dc272(0x144)]; i++) {
            var n = arr[i];
            var min = i - n;
            var max = i + n;
            if (min < 0x0)
                min = 0x0;
            if (max > arr['length'] - 0x1)
                max = arr[_0x1dc272(0x144)] - 0x1;
            for (var j = min; j <= max; j++) {
                tmp[j]++;
            }
        }
        var flag = !![];
        for (var i = 0x0; i < arr[_0x1dc272(0x144)]; i++) {
            if (arr[i] != tmp[i])
                flag = ![];
            arr[i] = tmp[i];
        }
        if (flag)
            break;
    }
    console[_0x1dc272(0x145)](arr['join']('\x20'));
}
Main(require('fs')[a0_0x152118(0x150)](a0_0x152118(0x147), a0_0x152118(0x146))[a0_0x152118(0x14b)]());
var a0_0x3bd99f = a0_0x52c6;
function a0_0x52c6(NBxMer, key) {
    var stringArray = a0_0x1fe1();
    a0_0x52c6 = function (index, key) {
        index = index - 0x86;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52c6(NBxMer, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x43d490 = a0_0x52c6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x43d490(0x8f)) / 0x1 + -parseInt(_0x43d490(0x8b)) / 0x2 + parseInt(_0x43d490(0x93)) / 0x3 * (parseInt(_0x43d490(0x96)) / 0x4) + -parseInt(_0x43d490(0x91)) / 0x5 + parseInt(_0x43d490(0x87)) / 0x6 * (-parseInt(_0x43d490(0x94)) / 0x7) + parseInt(_0x43d490(0x8e)) / 0x8 * (parseInt(_0x43d490(0x90)) / 0x9) + parseInt(_0x43d490(0x8d)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1fe1, 0x7b9cf));
function myout(text) {
    var _0x4289e6 = a0_0x52c6;
    console[_0x4289e6(0x88)](text);
}
function Main(input) {
    var _0x259e64 = a0_0x52c6;
    input = input[_0x259e64(0x86)]()[_0x259e64(0x8c)]('\x0a')[_0x259e64(0x89)](a => Number(a));
    var len = input[0x0];
    var output = 0x0;
    input['shift']();
    for (var i = 0x0; i < len; i++) {
        if (i == len - 0x1) {
            output += Math[_0x259e64(0x8a)](input[i] / 0x2);
        } else {
            if (input[i] != 0x0) {
                if (input[i + 0x1] != 0x0) {
                    var tmp = Math[_0x259e64(0x95)](input[i], input[i + 0x1]);
                    output += tmp;
                    input[i] -= tmp;
                    input[i + 0x1] -= tmp;
                    if (input[i] >= 0x2) {
                        output += Math['floor'](input[i] / 0x2);
                    }
                } else {
                    output += Math[_0x259e64(0x8a)](input[i] / 0x2);
                }
            }
        }
    }
    myout(output);
}
function a0_0x1fe1() {
    var _0x1f282f = [
        '8552930EzRrvR',
        '8rbTkAO',
        '528661EmrwzU',
        '2691594RhNnfl',
        '303150oiDrDF',
        'utf8',
        '1083447iHNjwN',
        '29463JRGbSZ',
        'min',
        '8kyawhA',
        'trim',
        '198DgUTgy',
        'log',
        'map',
        'floor',
        '1284300trMDhx',
        'split'
    ];
    a0_0x1fe1 = function () {
        return _0x1f282f;
    };
    return a0_0x1fe1();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x3bd99f(0x92))['trim']());
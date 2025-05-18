(function (stringArrayFunction, comparisonValue) {
    var _0x1a2441 = a0_0x3e10;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1a2441(0x1f3)) / 0x1 + -parseInt(_0x1a2441(0x1f6)) / 0x2 + parseInt(_0x1a2441(0x1f4)) / 0x3 * (parseInt(_0x1a2441(0x1f2)) / 0x4) + -parseInt(_0x1a2441(0x1fb)) / 0x5 + parseInt(_0x1a2441(0x1ef)) / 0x6 * (parseInt(_0x1a2441(0x1f7)) / 0x7) + -parseInt(_0x1a2441(0x1fc)) / 0x8 * (parseInt(_0x1a2441(0x1f0)) / 0x9) + parseInt(_0x1a2441(0x1f8)) / 0xa * (parseInt(_0x1a2441(0x1f1)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f44, 0xe7f60));
function a0_0x3e10(wfhlql, key) {
    var stringArray = a0_0x3f44();
    a0_0x3e10 = function (index, key) {
        index = index - 0x1ef;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e10(wfhlql, key);
}
function Main(input) {
    var _0x3adf22 = a0_0x3e10;
    input = input[_0x3adf22(0x1fa)]('\x0a');
    var n = Number(input[0x0]);
    var d = Number(input[0x1]['split']('\x20')[0x0]);
    var x = Number(input[0x1][_0x3adf22(0x1fa)]('\x20')[0x1]);
    var array = [];
    for (var i = 0x0; i < input['length'] - 0x2; i++) {
        array[_0x3adf22(0x1f5)](Number(input[i + 0x2]));
    }
    var total = [];
    for (var j = 0x0; j < array[_0x3adf22(0x1f9)]; j++) {
        for (var k = 0x1; k < 0x64; k++) {
            if (d >= k * array[j] + 0x1) {
                total[_0x3adf22(0x1f5)](k * array[j] + 0x1);
            }
        }
    }
    console['log'](total[_0x3adf22(0x1f9)] + n + x);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x3f44() {
    var _0x249cef = [
        '448588eWrjgK',
        '527055PskubM',
        '6PeAWVH',
        'push',
        '813720SXppyM',
        '133QfMkhK',
        '10ROMsjd',
        'length',
        'split',
        '7375755PdxadF',
        '15064yXYNsF',
        '266454rHbefY',
        '324Bfrprk',
        '25947911PztvSt'
    ];
    a0_0x3f44 = function () {
        return _0x249cef;
    };
    return a0_0x3f44();
}
function a0_0x5dcd(xyQpyy, key) {
    var stringArray = a0_0x306c();
    a0_0x5dcd = function (index, key) {
        index = index - 0x9d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5dcd(xyQpyy, key);
}
var a0_0x46a4c6 = a0_0x5dcd;
(function (stringArrayFunction, comparisonValue) {
    var _0x151297 = a0_0x5dcd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x151297(0xa4)) / 0x1 * (parseInt(_0x151297(0xa2)) / 0x2) + -parseInt(_0x151297(0xa7)) / 0x3 * (-parseInt(_0x151297(0xab)) / 0x4) + parseInt(_0x151297(0xa1)) / 0x5 * (parseInt(_0x151297(0xa6)) / 0x6) + parseInt(_0x151297(0xaa)) / 0x7 * (parseInt(_0x151297(0x9f)) / 0x8) + parseInt(_0x151297(0xa0)) / 0x9 * (parseInt(_0x151297(0xa8)) / 0xa) + parseInt(_0x151297(0xa5)) / 0xb + -parseInt(_0x151297(0x9d)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x306c, 0x90740));
function a0_0x306c() {
    var _0x51cf66 = [
        '2632085SYDggL',
        '785258TckcAa',
        '/dev/stdin',
        '3dQuUSH',
        '12340086CGEFyv',
        '6gmJnMI',
        '3wtQraR',
        '384210qEwCqK',
        'split',
        '4115139EXknah',
        '411356xycsZA',
        'toFixed',
        'sqrt',
        'log',
        'trim',
        '17436900UVPqCy',
        'readFileSync',
        '8YbsQjd',
        '207tLZqUj'
    ];
    a0_0x306c = function () {
        return _0x51cf66;
    };
    return a0_0x306c();
}
var input = require('fs')[a0_0x46a4c6(0x9e)](a0_0x46a4c6(0xa3), 'utf8')[a0_0x46a4c6(0xaf)]();
var lines = input[a0_0x46a4c6(0xa9)]('\x0a');
while (!![]) {
    var x = +lines['shift']();
    var h = +lines['shift']();
    if (x + h == 0x0)
        break;
    console[a0_0x46a4c6(0xae)]((x * x + x * Math[a0_0x46a4c6(0xad)](0x4 * h * h + x * x))[a0_0x46a4c6(0xac)](0x6));
}
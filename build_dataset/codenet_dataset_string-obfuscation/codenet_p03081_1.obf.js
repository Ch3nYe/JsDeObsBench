function a0_0x4974(uEzmdi, key) {
    var stringArray = a0_0x6f60();
    a0_0x4974 = function (index, key) {
        index = index - 0xae;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4974(uEzmdi, key);
}
var a0_0x4b48dc = a0_0x4974;
(function (stringArrayFunction, comparisonValue) {
    var _0x29e3aa = a0_0x4974;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x29e3aa(0xb2)) / 0x1 + parseInt(_0x29e3aa(0xb4)) / 0x2 + -parseInt(_0x29e3aa(0xba)) / 0x3 * (parseInt(_0x29e3aa(0xb3)) / 0x4) + -parseInt(_0x29e3aa(0xb1)) / 0x5 + parseInt(_0x29e3aa(0xbc)) / 0x6 * (-parseInt(_0x29e3aa(0xaf)) / 0x7) + parseInt(_0x29e3aa(0xbb)) / 0x8 + parseInt(_0x29e3aa(0xb0)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x6f60, 0xeccde));
function a0_0x6f60() {
    var _0x3fb267 = [
        '6236444sgVPyF',
        '15468ofzIkw',
        'log',
        'push',
        'split',
        'concat',
        '/dev/stdin',
        '3xCeIDi',
        '2416784ESrhlT',
        '6xUmhnL',
        'length',
        'readFileSync',
        '2395372ocjefd',
        '45452061elsNUw',
        '5204480xzDbUU',
        '1447908GisSrb'
    ];
    a0_0x6f60 = function () {
        return _0x3fb267;
    };
    return a0_0x6f60();
}
function Main(input) {
    var _0x3bd526 = a0_0x4974;
    var ary = [];
    for (var i = 0x0; i < input[_0x3bd526(0xb7)]('\x0a')[0x0]['split']('\x20')[0x0]; i++) {
        ary[_0x3bd526(0xb6)](0x1);
    }
    var str = input[_0x3bd526(0xb7)]('\x0a')[0x1];
    for (var i = 0x2; i < input[_0x3bd526(0xb7)]('\x0a')[_0x3bd526(0xbd)]; i++) {
        var jumon = input[_0x3bd526(0xb7)]('\x0a')[i][_0x3bd526(0xb7)]('\x20');
        var newAry = [];
        for (var j = 0x0; j < ary[_0x3bd526(0xbd)]; j++) {
            newAry['push'](0x0);
        }
        if (jumon[0x1] == 'L') {
            for (var j = 0x0; j < str[_0x3bd526(0xbd)]; j++) {
                if (j != 0x0 || str[j] != jumon[0x0])
                    newAry[str[j] == jumon[0x0] ? j - 0x1 : j] += ary[j];
            }
        } else {
            for (var j = 0x0; j < str[_0x3bd526(0xbd)]; j++) {
                if (j != ary[_0x3bd526(0xbd)] - 0x1 || str[j] != jumon[0x0])
                    newAry[str[j] == jumon[0x0] ? j + 0x1 : j] += ary[j];
            }
        }
        ary = newAry[_0x3bd526(0xb8)]();
    }
    var golems = 0x0;
    for (var i of ary)
        golems += i;
    console[_0x3bd526(0xb5)](golems);
}
Main(require('fs')[a0_0x4b48dc(0xae)](a0_0x4b48dc(0xb9), 'utf8'));
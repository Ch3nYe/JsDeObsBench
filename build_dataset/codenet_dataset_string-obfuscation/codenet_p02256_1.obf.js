function a0_0x3a72() {
    var _0x478055 = [
        '2AizNjK',
        '182164dHSBJW',
        'readFileSync',
        '49IsgnLP',
        '9WRKrbO',
        '949670znPxYN',
        '6350qoZeYg',
        '/dev/stdin',
        'split',
        'log',
        'utf8',
        '155815oGTmvB',
        '60RJJBxn',
        '14968uCQxUS',
        '234RfjgXu',
        '61026vpYonQ',
        '228370JaJbUY'
    ];
    a0_0x3a72 = function () {
        return _0x478055;
    };
    return a0_0x3a72();
}
function a0_0x8d82(jHLmdS, key) {
    var stringArray = a0_0x3a72();
    a0_0x8d82 = function (index, key) {
        index = index - 0x1b2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8d82(jHLmdS, key);
}
var a0_0x553731 = a0_0x8d82;
(function (stringArrayFunction, comparisonValue) {
    var _0x2f19c2 = a0_0x8d82;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2f19c2(0x1be)) / 0x1 * (parseInt(_0x2f19c2(0x1b3)) / 0x2) + -parseInt(_0x2f19c2(0x1c2)) / 0x3 * (-parseInt(_0x2f19c2(0x1bf)) / 0x4) + parseInt(_0x2f19c2(0x1b2)) / 0x5 + -parseInt(_0x2f19c2(0x1bc)) / 0x6 * (parseInt(_0x2f19c2(0x1c1)) / 0x7) + parseInt(_0x2f19c2(0x1ba)) / 0x8 * (-parseInt(_0x2f19c2(0x1bb)) / 0x9) + -parseInt(_0x2f19c2(0x1bd)) / 0xa + parseInt(_0x2f19c2(0x1b8)) / 0xb * (-parseInt(_0x2f19c2(0x1b9)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3a72, 0x1a0ce));
function Main(input) {
    var _0x565318 = a0_0x8d82;
    var [a, b] = input[_0x565318(0x1b5)]('\x20')['map'](Number);
    if (b > a)
        [a, b] = [
            b,
            a
        ];
    var r;
    do {
        r = a % b;
        a = b;
        b = r;
    } while (r);
    console[_0x565318(0x1b6)](a);
}
Main(require('fs')[a0_0x553731(0x1c0)](a0_0x553731(0x1b4), a0_0x553731(0x1b7)));
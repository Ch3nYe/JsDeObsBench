function a0_0x5a79(RflYZd, key) {
    var stringArray = a0_0x32c9();
    a0_0x5a79 = function (index, key) {
        index = index - 0x88;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a79(RflYZd, key);
}
function a0_0x32c9() {
    var _0x2be178 = [
        'log',
        '8jbFtGh',
        '/dev/stdin',
        '421924pEbYqp',
        'utf8',
        'readFileSync',
        '1520556fCYqcl',
        '5529678bqNQdo',
        '35qodVHt',
        '7274jBCdsI',
        '63HVBFIq',
        '121yXGfuD',
        'split',
        '2447550lyJUTB',
        'length',
        '55xYeuSN',
        '3752231JBKeNQ',
        '393090xHTLSE',
        'min'
    ];
    a0_0x32c9 = function () {
        return _0x2be178;
    };
    return a0_0x32c9();
}
var a0_0x47cc58 = a0_0x5a79;
(function (stringArrayFunction, comparisonValue) {
    var _0x5e8ac6 = a0_0x5a79;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5e8ac6(0x8c)) / 0x1 * (-parseInt(_0x5e8ac6(0x8d)) / 0x2) + -parseInt(_0x5e8ac6(0x91)) / 0x3 + -parseInt(_0x5e8ac6(0x9a)) / 0x4 * (-parseInt(_0x5e8ac6(0x93)) / 0x5) + parseInt(_0x5e8ac6(0x8b)) / 0x6 + parseInt(_0x5e8ac6(0x94)) / 0x7 * (parseInt(_0x5e8ac6(0x98)) / 0x8) + parseInt(_0x5e8ac6(0x8e)) / 0x9 * (parseInt(_0x5e8ac6(0x95)) / 0xa) + parseInt(_0x5e8ac6(0x8f)) / 0xb * (-parseInt(_0x5e8ac6(0x8a)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x32c9, 0xc5ece));
function Main(input) {
    var _0x58a655 = a0_0x5a79;
    input = input[_0x58a655(0x90)]('\x0a');
    if (input[input['length'] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0];
    var up = 0x1;
    var down = 0x0;
    var nup, ndown;
    for (var i = 0x0; i < N[_0x58a655(0x92)]; i++) {
        nup = Math[_0x58a655(0x96)](0x9 - N[i] + up, 0x1 + down + (N[i] - 0x0));
        ndown = Math['min'](0xa - N[i] + up, down + (N[i] - 0x0));
        up = nup;
        down = ndown;
    }
    console[_0x58a655(0x97)](down);
}
Main(require('fs')[a0_0x47cc58(0x89)](a0_0x47cc58(0x99), a0_0x47cc58(0x88)));
function a0_0x3006() {
    var _0x427ea0 = [
        '3594OWDSou',
        '/dev/stdin',
        '1514660idIiZd',
        '1255zYHKjk',
        '33cSEOfG',
        '360932etEgGV',
        'trim',
        'map',
        '369705XSfWeL',
        'log',
        'readFileSync',
        'utf8',
        '45kaVOXq',
        '91708RPejLH',
        '431541qFwKbF',
        '1550810epvWdH',
        'max',
        '168drGaZQ',
        '88kpgVgG'
    ];
    a0_0x3006 = function () {
        return _0x427ea0;
    };
    return a0_0x3006();
}
function a0_0x1fc5(cRFvdj, key) {
    var stringArray = a0_0x3006();
    a0_0x1fc5 = function (index, key) {
        index = index - 0xbf;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1fc5(cRFvdj, key);
}
var a0_0x2cd0b9 = a0_0x1fc5;
(function (stringArrayFunction, comparisonValue) {
    var _0x14edf7 = a0_0x1fc5;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14edf7(0xca)) / 0x1 + parseInt(_0x14edf7(0xd1)) / 0x2 + parseInt(_0x14edf7(0xc0)) / 0x3 * (parseInt(_0x14edf7(0xc9)) / 0x4) + -parseInt(_0x14edf7(0xbf)) / 0x5 * (parseInt(_0x14edf7(0xcf)) / 0x6) + -parseInt(_0x14edf7(0xc4)) / 0x7 * (parseInt(_0x14edf7(0xce)) / 0x8) + -parseInt(_0x14edf7(0xc8)) / 0x9 * (parseInt(_0x14edf7(0xcb)) / 0xa) + parseInt(_0x14edf7(0xc1)) / 0xb * (parseInt(_0x14edf7(0xcd)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3006, 0x601f5));
var input = require('fs')[a0_0x2cd0b9(0xc6)](a0_0x2cd0b9(0xd0), a0_0x2cd0b9(0xc7));
var arr = input[a0_0x2cd0b9(0xc2)]()['split']('\x20')[a0_0x2cd0b9(0xc3)](Number);
var max = Math[a0_0x2cd0b9(0xcc)](...arr);
console[a0_0x2cd0b9(0xc5)]([
    'A',
    'B',
    'C'
][arr['indexOf'](max)]);
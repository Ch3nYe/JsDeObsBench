function a0_0x58a8(AnuoBC, key) {
    var stringArray = a0_0x3102();
    a0_0x58a8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58a8(AnuoBC, key);
}
var a0_0x33e450 = a0_0x58a8;
function Main(input) {
    var _0x24136b = a0_0x58a8;
    var data = input['split']('\x0a');
    var split = parseInt(data[0x0]) / 0x2;
    var cdn = [];
    for (let i = 0x0; i < data[0x1][_0x24136b(0x0)]; i += split) {
        cdn[_0x24136b(0x1)](data[0x1]['slice'](i, i + split));
    }
    if (cdn[0x0] == cdn[0x1]) {
        console[_0x24136b(0x2)](_0x24136b(0x3));
    } else {
        console[_0x24136b(0x2)]('No');
    }
}
Main(require('fs')[a0_0x33e450(0x4)](a0_0x33e450(0x5), 'utf8'));
function a0_0x3102() {
    var _0x4370ce = [
        'length',
        'push',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3102 = function () {
        return _0x4370ce;
    };
    return a0_0x3102();
}
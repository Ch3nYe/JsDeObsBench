function a0_0x319f() {
    var _0x3bbc65 = [
        '415212leXbZR',
        '12812TrvwQN',
        '1048607jYXOXN',
        '/dev/stdin',
        'slice',
        '276lMrkyE',
        '1213003QFMBsa',
        'length',
        '4JsyIZX',
        '635nCUErY',
        'push',
        'Yes',
        '9ACTvdO',
        '2909334UUSJlh',
        '2515146cEdcSZ',
        'log',
        'utf8',
        '16RNoEia',
        '8296930vqIyye'
    ];
    a0_0x319f = function () {
        return _0x3bbc65;
    };
    return a0_0x319f();
}
var a0_0x24fb9c = a0_0x1318;
function a0_0x1318(UulWeI, key) {
    var stringArray = a0_0x319f();
    a0_0x1318 = function (index, key) {
        index = index - 0x1b7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1318(UulWeI, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4cd257 = a0_0x1318;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4cd257(0x1c1)) / 0x1 * (parseInt(_0x4cd257(0x1c9)) / 0x2) + -parseInt(_0x4cd257(0x1bc)) / 0x3 + -parseInt(_0x4cd257(0x1c2)) / 0x4 * (parseInt(_0x4cd257(0x1b7)) / 0x5) + -parseInt(_0x4cd257(0x1bb)) / 0x6 + -parseInt(_0x4cd257(0x1c3)) / 0x7 * (parseInt(_0x4cd257(0x1bf)) / 0x8) + parseInt(_0x4cd257(0x1ba)) / 0x9 * (parseInt(_0x4cd257(0x1c0)) / 0xa) + -parseInt(_0x4cd257(0x1c7)) / 0xb * (-parseInt(_0x4cd257(0x1c6)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x319f, 0x7b826));
function Main(input) {
    var _0x6cb0b7 = a0_0x1318;
    var data = input['split']('\x0a');
    var split = parseInt(data[0x0]) / 0x2;
    var cdn = [];
    for (let i = 0x0; i < data[0x1][_0x6cb0b7(0x1c8)]; i += split) {
        cdn[_0x6cb0b7(0x1b8)](data[0x1][_0x6cb0b7(0x1c5)](i, i + split));
    }
    if (cdn[0x0] == cdn[0x1]) {
        console[_0x6cb0b7(0x1bd)](_0x6cb0b7(0x1b9));
    } else {
        console[_0x6cb0b7(0x1bd)]('No');
    }
}
Main(require('fs')['readFileSync'](a0_0x24fb9c(0x1c4), a0_0x24fb9c(0x1be)));
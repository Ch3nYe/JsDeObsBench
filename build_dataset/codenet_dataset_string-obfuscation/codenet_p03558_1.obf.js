var a0_0x4b880d = a0_0xdd38;
function a0_0x34d0() {
    var _0x225cfb = [
        'trim',
        'readFileSync',
        'min',
        'length',
        '11285505NJvcli',
        '/dev/stdin',
        '11RJVuvu',
        '396735qWDcSr',
        'map',
        '5695004XWbteQ',
        '1888384vPMFOj',
        '57910Iqzssn',
        'toString',
        'utf8',
        '515785VMJYMO',
        '12PPrBIO',
        '4856320CWZmrz'
    ];
    a0_0x34d0 = function () {
        return _0x225cfb;
    };
    return a0_0x34d0();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x127d84 = a0_0xdd38;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x127d84(0x194)) / 0x1 * (parseInt(_0x127d84(0x199)) / 0x2) + parseInt(_0x127d84(0x195)) / 0x3 + -parseInt(_0x127d84(0x19e)) / 0x4 + -parseInt(_0x127d84(0x19c)) / 0x5 * (-parseInt(_0x127d84(0x19d)) / 0x6) + parseInt(_0x127d84(0x197)) / 0x7 + -parseInt(_0x127d84(0x198)) / 0x8 + parseInt(_0x127d84(0x192)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x34d0, 0x9ba03));
function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x488465 = a0_0xdd38;
    input = parseInt(input);
    var output = 0x3b9aca00;
    for (var i = 0x1; i <= 0xa; i++) {
        var tmp = (input * i)[_0x488465(0x19a)]()['split']('')[_0x488465(0x196)](a => Number(a));
        var check = 0x0;
        for (var j = 0x0; j < tmp[_0x488465(0x191)]; j++) {
            check += tmp[j];
        }
        output = Math[_0x488465(0x190)](output, check);
    }
    myout(output);
}
function a0_0xdd38(ffBEIE, key) {
    var stringArray = a0_0x34d0();
    a0_0xdd38 = function (index, key) {
        index = index - 0x18f;
        var value = stringArray[index];
        return value;
    };
    return a0_0xdd38(ffBEIE, key);
}
Main(require('fs')[a0_0x4b880d(0x18f)](a0_0x4b880d(0x193), a0_0x4b880d(0x19b))[a0_0x4b880d(0x19f)]());
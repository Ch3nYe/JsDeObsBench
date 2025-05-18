var a0_0x122f79 = a0_0x4974;
(function (stringArrayFunction, comparisonValue) {
    var _0x4a7e0c = a0_0x4974;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4a7e0c(0xeb)) / 0x1 + -parseInt(_0x4a7e0c(0xf0)) / 0x2 * (parseInt(_0x4a7e0c(0xf9)) / 0x3) + parseInt(_0x4a7e0c(0xe9)) / 0x4 + parseInt(_0x4a7e0c(0xf3)) / 0x5 + parseInt(_0x4a7e0c(0xf2)) / 0x6 * (parseInt(_0x4a7e0c(0xee)) / 0x7) + -parseInt(_0x4a7e0c(0xe8)) / 0x8 + parseInt(_0x4a7e0c(0xef)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x6583, 0x4c98e));
function a0_0x6583() {
    var _0x2661f6 = [
        'substr',
        'sort',
        'map',
        'parseInt',
        '3TzIOew',
        '2738744bFEuIl',
        '506688eVUOsr',
        'utf8',
        '43276SAvUlq',
        'split',
        'log',
        '346703ZJLmQJ',
        '2457900SAgjsk',
        '642826ewaSiN',
        'readFileSync',
        '42FVfHMk',
        '938735nMifGz',
        '0000000000'
    ];
    a0_0x6583 = function () {
        return _0x2661f6;
    };
    return a0_0x6583();
}
function a0_0x4974(TKDBuf, key) {
    var stringArray = a0_0x6583();
    a0_0x4974 = function (index, key) {
        index = index - 0xe8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4974(TKDBuf, key);
}
function Main(input) {
    var _0x1d0adb = a0_0x4974;
    input = input[_0x1d0adb(0xec)]('\x0a');
    inputStr = input[0x0][_0x1d0adb(0xec)]('\x20');
    var N = Number['parseInt'](inputStr[0x0]);
    var M = Number[_0x1d0adb(0xf8)](inputStr[0x1]);
    var tmp = [];
    var array = [];
    var buycnt = 0x0;
    var okane = 0x0;
    var mokori = M;
    for (i = 0x0; i < N; i++) {
        tmp = input[i + 0x1]['split']('\x20');
        array[i] = tmp[_0x1d0adb(0xf7)](tmp => parseInt(tmp, 0xa));
        array[i][0x0] = (_0x1d0adb(0xf4) + array[i][0x0])[_0x1d0adb(0xf5)](-0xa);
    }
    array[_0x1d0adb(0xf6)]();
    for (i = 0x0; i < N; i++) {
        if (mokori > parseInt(array[i][0x1])) {
            okane += parseInt(array[i][0x0]) * parseInt(array[i][0x1]);
            mokori -= parseInt(array[i][0x1]);
        } else {
            okane += parseInt(array[i][0x0]) * mokori;
            break;
        }
    }
    console[_0x1d0adb(0xed)](okane);
}
Main(require('fs')[a0_0x122f79(0xf1)]('/dev/stdin', a0_0x122f79(0xea)));
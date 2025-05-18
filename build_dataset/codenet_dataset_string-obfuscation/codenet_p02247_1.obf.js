var a0_0xe9c021 = a0_0x1467;
(function (stringArrayFunction, comparisonValue) {
    var _0x594a3a = a0_0x1467;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x594a3a(0x1f8)) / 0x1 * (-parseInt(_0x594a3a(0x1f4)) / 0x2) + -parseInt(_0x594a3a(0x1fb)) / 0x3 * (parseInt(_0x594a3a(0x1f5)) / 0x4) + -parseInt(_0x594a3a(0x1ef)) / 0x5 * (-parseInt(_0x594a3a(0x1ed)) / 0x6) + parseInt(_0x594a3a(0x1f6)) / 0x7 + parseInt(_0x594a3a(0x1f1)) / 0x8 * (parseInt(_0x594a3a(0x1fa)) / 0x9) + -parseInt(_0x594a3a(0x202)) / 0xa * (-parseInt(_0x594a3a(0x1ff)) / 0xb) + parseInt(_0x594a3a(0x1fd)) / 0xc * (-parseInt(_0x594a3a(0x201)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x558d, 0x4c2e2));
var input = require('fs')[a0_0xe9c021(0x1f3)](a0_0xe9c021(0x1fe), a0_0xe9c021(0x1f0));
function a0_0x1467(oljdey, key) {
    var stringArray = a0_0x558d();
    a0_0x1467 = function (index, key) {
        index = index - 0x1ed;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1467(oljdey, key);
}
var arr = input[a0_0xe9c021(0x203)]()[a0_0xe9c021(0x1f2)]('\x0a');
function a0_0x558d() {
    var _0xafeae0 = [
        'lastIndex',
        '1bqeJij',
        'log',
        '1510911ExHaGY',
        '111ypwzQX',
        'push',
        '1415316qumSeP',
        '/dev/stdin',
        '382921NwVerK',
        'test',
        '52JyzfnO',
        '20wSClXE',
        'trim',
        '18096krNgxG',
        'length',
        '745RrtlGI',
        'utf8',
        '8ZMzkSY',
        'split',
        'readFileSync',
        '556246ULSUKg',
        '49228bCArEg',
        '1919099FpIgpW'
    ];
    a0_0x558d = function () {
        return _0xafeae0;
    };
    return a0_0x558d();
}
var a = arr[0x0];
var b = arr[0x1];
var len = b[a0_0xe9c021(0x1ee)] - 0x1;
var reg = new RegExp(b, 'g');
var ans = [];
while (reg[a0_0xe9c021(0x200)](a)) {
    reg['lastIndex'] -= len;
    ans[a0_0xe9c021(0x1fc)](reg[a0_0xe9c021(0x1f7)] - 0x1);
}
if (ans[a0_0xe9c021(0x1ee)] != 0x0)
    console[a0_0xe9c021(0x1f9)](ans['join']('\x0a'));
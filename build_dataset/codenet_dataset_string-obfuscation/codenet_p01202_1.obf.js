var a0_0x52f7de = a0_0x11a6;
(function (stringArrayFunction, comparisonValue) {
    var _0x59850a = a0_0x11a6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x59850a(0x104)) / 0x1 * (-parseInt(_0x59850a(0x103)) / 0x2) + -parseInt(_0x59850a(0x10b)) / 0x3 + -parseInt(_0x59850a(0x10a)) / 0x4 * (-parseInt(_0x59850a(0xff)) / 0x5) + parseInt(_0x59850a(0x106)) / 0x6 * (-parseInt(_0x59850a(0x107)) / 0x7) + parseInt(_0x59850a(0x105)) / 0x8 + parseInt(_0x59850a(0x10c)) / 0x9 * (-parseInt(_0x59850a(0x102)) / 0xa) + parseInt(_0x59850a(0x108)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4cf1, 0x1b595));
var input = require('fs')['readFileSync'](a0_0x52f7de(0x10f), a0_0x52f7de(0xfe));
var arr = input[a0_0x52f7de(0x109)]()['split']('\x0a');
function a0_0x4cf1() {
    var _0x48cc48 = [
        '/dev/stdin',
        'utf8',
        '330EIrzCu',
        'Yes',
        'shift',
        '10LZqSoW',
        '11164NutsyE',
        '17JPDcnq',
        '1254272PlOJlh',
        '1038ZnCAmL',
        '7469tGkEPI',
        '2731135yxJHIP',
        'trim',
        '9224UqvyxP',
        '36843RsKbVO',
        '1381302rUDrTB',
        'split',
        'log'
    ];
    a0_0x4cf1 = function () {
        return _0x48cc48;
    };
    return a0_0x4cf1();
}
var n = arr['shift']() - 0x0;
function a0_0x11a6(KAjCjZ, key) {
    var stringArray = a0_0x4cf1();
    a0_0x11a6 = function (index, key) {
        index = index - 0xfe;
        var value = stringArray[index];
        return value;
    };
    return a0_0x11a6(KAjCjZ, key);
}
while (n--) {
    var ary = arr[a0_0x52f7de(0x101)]()[a0_0x52f7de(0x10d)]('');
    var ans = a0_0x52f7de(0x100);
    var s = '';
    ary['forEach'](function (v) {
        if (v == s)
            ans = 'No';
        s = v;
    });
    console[a0_0x52f7de(0x10e)](ans);
}
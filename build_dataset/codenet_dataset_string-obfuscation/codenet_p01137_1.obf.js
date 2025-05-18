function a0_0x5a56(dbRrHz, key) {
    var stringArray = a0_0x21c0();
    a0_0x5a56 = function (index, key) {
        index = index - 0x10f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a56(dbRrHz, key);
}
var a0_0x3ee254 = a0_0x5a56;
(function (stringArrayFunction, comparisonValue) {
    var _0x3e1020 = a0_0x5a56;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3e1020(0x117)) / 0x1 + -parseInt(_0x3e1020(0x11e)) / 0x2 * (-parseInt(_0x3e1020(0x111)) / 0x3) + parseInt(_0x3e1020(0x114)) / 0x4 + -parseInt(_0x3e1020(0x11c)) / 0x5 + parseInt(_0x3e1020(0x116)) / 0x6 * (-parseInt(_0x3e1020(0x115)) / 0x7) + parseInt(_0x3e1020(0x11a)) / 0x8 * (-parseInt(_0x3e1020(0x113)) / 0x9) + parseInt(_0x3e1020(0x11b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x21c0, 0x485c8));
function a0_0x21c0() {
    var _0x55c2d8 = [
        '1731576wkcpqy',
        '724920HWxGbP',
        '24RVxaiD',
        '492517WEztSi',
        'trim',
        'min',
        '1736TXqjoK',
        '8359460fAQOoz',
        '522645CjCqKG',
        'pow',
        '2AMSxjc',
        'log',
        '/dev/stdin',
        '809178yEFoXB',
        'shift',
        '9576UKRnus'
    ];
    a0_0x21c0 = function () {
        return _0x55c2d8;
    };
    return a0_0x21c0();
}
var input = require('fs')['readFileSync'](a0_0x3ee254(0x110), 'utf8');
var Arr = input[a0_0x3ee254(0x118)]()['split']('\x0a');
while (!![]) {
    var e = Arr[a0_0x3ee254(0x112)]() - 0x0;
    if (e == 0x0)
        break;
    var min = Infinity;
    for (var z = 0x0; z <= 0x64; z++) {
        for (var y = 0x0; y <= 0x3e8; y++) {
            var x = e - (Math[a0_0x3ee254(0x11d)](z, 0x3) + Math[a0_0x3ee254(0x11d)](y, 0x2));
            if (x < 0x0)
                break;
            min = Math[a0_0x3ee254(0x119)](min, z + y + x);
        }
    }
    console[a0_0x3ee254(0x10f)](min);
}
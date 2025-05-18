var a0_0x4cd35e = a0_0x3f8f;
(function (stringArrayFunction, comparisonValue) {
    var _0xe11ef1 = a0_0x3f8f;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xe11ef1(0xd9)) / 0x1 + -parseInt(_0xe11ef1(0xd7)) / 0x2 * (parseInt(_0xe11ef1(0xd5)) / 0x3) + -parseInt(_0xe11ef1(0xcf)) / 0x4 * (parseInt(_0xe11ef1(0xd6)) / 0x5) + parseInt(_0xe11ef1(0xcc)) / 0x6 + -parseInt(_0xe11ef1(0xd4)) / 0x7 + -parseInt(_0xe11ef1(0xd8)) / 0x8 + parseInt(_0xe11ef1(0xd3)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5a04, 0xd5d82));
var obj = {};
for (var i = 0x0; i <= 0x19; i++) {
    for (var j = 0x0; j <= 0x10; j++) {
        for (var k = 0x0; k <= 0xa; k++) {
            var weight = 0xc8 * i + 0x12c * j + 0x1f4 * k;
            if (weight > 0x1388)
                continue;
            var money = 0x0;
            money += 0x17c * 0x5 * 0.8 * Math[a0_0x4cd35e(0xd2)](i / 0x5);
            money += 0x226 * 0x4 * 0.85 * Math[a0_0x4cd35e(0xd2)](j / 0x4);
            money += 0x352 * 0x3 * 0.88 * Math[a0_0x4cd35e(0xd2)](k / 0x3);
            money += 0x17c * (i % 0x5);
            money += 0x226 * (j % 0x4);
            money += 0x352 * (k % 0x3);
            if (obj[a0_0x4cd35e(0xdb)](weight))
                obj[weight] = Math[a0_0x4cd35e(0xd0)](obj[weight], money);
            else
                obj[weight] = money;
        }
    }
}
function a0_0x3f8f(QRXHOd, key) {
    var stringArray = a0_0x5a04();
    a0_0x3f8f = function (index, key) {
        index = index - 0xcc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f8f(QRXHOd, key);
}
var input = require('fs')[a0_0x4cd35e(0xda)](a0_0x4cd35e(0xcd), 'utf8');
var Arr = input['trim']()[a0_0x4cd35e(0xce)]('\x0a');
function a0_0x5a04() {
    var _0x113935 = [
        '2745cQgfzK',
        '10eMtgNr',
        '6644392TOxrym',
        '958983nudqFs',
        'readFileSync',
        'hasOwnProperty',
        '2377428yULNYT',
        '/dev/stdin',
        'split',
        '2452sjNZeY',
        'min',
        'shift',
        'floor',
        '21489309hQFIjq',
        '7803040suwcVs',
        '351126yExyvU'
    ];
    a0_0x5a04 = function () {
        return _0x113935;
    };
    return a0_0x5a04();
}
while (!![]) {
    var n = Arr[a0_0x4cd35e(0xd1)]() - 0x0;
    if (n == 0x0)
        break;
    console['log'](obj[n]);
}
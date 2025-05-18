var a0_0x3bfd65 = a0_0x57e7;
(function (stringArrayFunction, comparisonValue) {
    var _0x3787e0 = a0_0x57e7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3787e0(0x7d)) / 0x1 * (parseInt(_0x3787e0(0x7f)) / 0x2) + parseInt(_0x3787e0(0x73)) / 0x3 + parseInt(_0x3787e0(0x6f)) / 0x4 + parseInt(_0x3787e0(0x79)) / 0x5 + parseInt(_0x3787e0(0x76)) / 0x6 * (parseInt(_0x3787e0(0x75)) / 0x7) + -parseInt(_0x3787e0(0x70)) / 0x8 + -parseInt(_0x3787e0(0x7e)) / 0x9 * (parseInt(_0x3787e0(0x71)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xaf83, 0xe416f));
var input = require('fs')[a0_0x3bfd65(0x78)]('/dev/stdin', a0_0x3bfd65(0x74));
var arr = input[a0_0x3bfd65(0x77)]()['split']('\x0a');
while (!![]) {
    var pqan = arr['shift']()['split']('\x20')[a0_0x3bfd65(0x7c)](Number);
    if (pqan[a0_0x3bfd65(0x7a)]('\x20') == a0_0x3bfd65(0x7b))
        break;
    var p = pqan[0x0];
    var q = pqan[0x1];
    var a = pqan[0x2];
    var n = pqan[0x3];
    var ans = 0x0;
    var loop = function (start, P, Q, A, cnt) {
        if (cnt > 0x0) {
            if (cnt > n)
                return;
            if (p * Q == P * q) {
                ans++;
                return;
            } else if (p * Q < P * q)
                return;
        }
        for (var i = start; A * i <= a; i++) {
            loop(i, 0x1 * Q + i * P, Q * i, A * i, cnt + 0x1);
        }
    };
    loop(0x1, 0x0, 0x1, 0x1, 0x0);
    console[a0_0x3bfd65(0x72)](ans);
}
function a0_0x57e7(entvIN, key) {
    var stringArray = a0_0xaf83();
    a0_0x57e7 = function (index, key) {
        index = index - 0x6f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x57e7(entvIN, key);
}
function a0_0xaf83() {
    var _0x287a3a = [
        'utf8',
        '7oxhOrJ',
        '10414158fTYhLy',
        'trim',
        'readFileSync',
        '6140950oQyljF',
        'join',
        '0\x200\x200\x200',
        'map',
        '85OWBcFT',
        '15111yBdsmB',
        '21022oNFErX',
        '6823580eDRGSn',
        '2119696oBlsYd',
        '31580gFvOLf',
        'log',
        '2814858tcOYqg'
    ];
    a0_0xaf83 = function () {
        return _0x287a3a;
    };
    return a0_0xaf83();
}
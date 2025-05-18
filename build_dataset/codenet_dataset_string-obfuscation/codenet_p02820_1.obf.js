var a0_0x51daf4 = a0_0x2607;
(function (stringArrayFunction, comparisonValue) {
    var _0x330fd1 = a0_0x2607;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x330fd1(0x1c9)) / 0x1 * (-parseInt(_0x330fd1(0x1bc)) / 0x2) + -parseInt(_0x330fd1(0x1c6)) / 0x3 * (-parseInt(_0x330fd1(0x1c7)) / 0x4) + parseInt(_0x330fd1(0x1c8)) / 0x5 * (parseInt(_0x330fd1(0x1c4)) / 0x6) + -parseInt(_0x330fd1(0x1c0)) / 0x7 + parseInt(_0x330fd1(0x1c1)) / 0x8 + -parseInt(_0x330fd1(0x1c5)) / 0x9 * (-parseInt(_0x330fd1(0x1bf)) / 0xa) + -parseInt(_0x330fd1(0x1c3)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4017, 0x7a6d2));
function a0_0x2607(QRmxcd, key) {
    var stringArray = a0_0x4017();
    a0_0x2607 = function (index, key) {
        index = index - 0x1bc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2607(QRmxcd, key);
}
function Main(input) {
    var _0x4f9edb = a0_0x2607;
    input = input[_0x4f9edb(0x1be)]('\x0a');
    var tmp0 = input[0x0][_0x4f9edb(0x1be)]('\x20');
    var N = tmp0[0x0] - 0x0;
    var K = tmp0[0x1] - 0x0;
    var tmp1 = input[0x1][_0x4f9edb(0x1be)]('\x20');
    var point = {
        'r': tmp1[0x2] - 0x0,
        's': tmp1[0x0] - 0x0,
        'p': tmp1[0x1] - 0x0
    };
    var str = input[0x2];
    var sum = 0x0;
    for (var i = 0x0; i < N; i++) {
        var char = str[i];
        var charBK = '';
        if (i - K >= 0x0) {
            charBK = str[i - K];
        }
        if (char == charBK) {
            str = str['slice'](0x0, i) + 'B' + str['slice'](i + 0x1);
            continue;
        }
        sum += point[char];
    }
    console['log'](sum);
}
Main(require('fs')[a0_0x51daf4(0x1c2)](a0_0x51daf4(0x1bd), 'utf8'));
function a0_0x4017() {
    var _0x48416a = [
        '189uekyJA',
        '2320221yPDpTI',
        '4ihMPVT',
        '5feUWMD',
        '1QdNELv',
        '1685628mVVwci',
        '/dev/stdin',
        'split',
        '353230inISCo',
        '165095VrzlMk',
        '6887272SAPSKu',
        'readFileSync',
        '15261092jEwzkw',
        '2274780IPckpn'
    ];
    a0_0x4017 = function () {
        return _0x48416a;
    };
    return a0_0x4017();
}
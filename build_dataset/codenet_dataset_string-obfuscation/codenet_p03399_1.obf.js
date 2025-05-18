var a0_0xbde8ff = a0_0x19e4;
function a0_0x19e4(sSnSqi, key) {
    var stringArray = a0_0x4281();
    a0_0x19e4 = function (index, key) {
        index = index - 0x14a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19e4(sSnSqi, key);
}
function a0_0x4281() {
    var _0x9c6e6a = [
        '2511LrTJiq',
        '263904RRDawf',
        '4hDpCDq',
        '1067UmmoSI',
        '620edJIiV',
        '804600CNKiJk',
        '14581QQyZNj',
        'readFileSync',
        '20bOwokf',
        'trim',
        '858OsAuGK',
        'map',
        '564272lKWavG',
        '7207240wuYGVR',
        '2577159AUBoRk',
        '/dev/stdin'
    ];
    a0_0x4281 = function () {
        return _0x9c6e6a;
    };
    return a0_0x4281();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5b5158 = a0_0x19e4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b5158(0x159)) / 0x1 + parseInt(_0x5b5158(0x151)) / 0x2 * (-parseInt(_0x5b5158(0x14d)) / 0x3) + -parseInt(_0x5b5158(0x14f)) / 0x4 * (-parseInt(_0x5b5158(0x152)) / 0x5) + parseInt(_0x5b5158(0x157)) / 0x6 * (-parseInt(_0x5b5158(0x153)) / 0x7) + -parseInt(_0x5b5158(0x14a)) / 0x8 + parseInt(_0x5b5158(0x14b)) / 0x9 * (parseInt(_0x5b5158(0x155)) / 0xa) + parseInt(_0x5b5158(0x150)) / 0xb * (parseInt(_0x5b5158(0x14e)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4281, 0xce22a));
function Main(input) {
    var _0x207747 = a0_0x19e4;
    var xs = input[_0x207747(0x156)]()['split']('\x0a')[_0x207747(0x158)](v => parseInt(v, 0xa));
    var A = 0x0;
    if (xs[0x0] <= xs[0x1]) {
        A = A + xs[0x0];
    } else if (xs[0x0] >= xs[0x1]) {
        A = A + xs[0x1];
    }
    var B = 0x0;
    if (xs[0x2] <= xs[0x3]) {
        B = B + xs[0x2];
    } else if (xs[0x2] >= xs[0x3]) {
        B = B + xs[0x3];
    }
    console['log'](A + B);
}
Main(require('fs')[a0_0xbde8ff(0x154)](a0_0xbde8ff(0x14c), 'utf8'));
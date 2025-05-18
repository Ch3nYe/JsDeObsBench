var a0_0x33dcc5 = a0_0x4124;
(function (stringArrayFunction, comparisonValue) {
    var _0x332aef = a0_0x4124;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x332aef(0x10a)) / 0x1 + -parseInt(_0x332aef(0x109)) / 0x2 * (-parseInt(_0x332aef(0x111)) / 0x3) + parseInt(_0x332aef(0x105)) / 0x4 * (-parseInt(_0x332aef(0x107)) / 0x5) + parseInt(_0x332aef(0x10c)) / 0x6 * (parseInt(_0x332aef(0x104)) / 0x7) + parseInt(_0x332aef(0x106)) / 0x8 * (-parseInt(_0x332aef(0x103)) / 0x9) + -parseInt(_0x332aef(0x10e)) / 0xa + -parseInt(_0x332aef(0x108)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xaead, 0x683ba));
input = require('fs')[a0_0x33dcc5(0x10f)]('/dev/stdin', a0_0x33dcc5(0x10d));
lines = input['split']('\x0a');
N = lines[a0_0x33dcc5(0x10b)]() * 0x1;
ans = Math['floor'](N / 0xb) * 0x2;
m = N % 0xb;
function a0_0xaead() {
    var _0x2fd87d = [
        'readFileSync',
        'log',
        '27wBptRZ',
        '69606XoBhiI',
        '3971303TchgTX',
        '1400772RxLoPy',
        '560TmVTJt',
        '5mTHJnp',
        '2177989yikSvQ',
        '111510WdRGfB',
        '453101gkHKiA',
        'shift',
        '6EOPTsr',
        'utf8',
        '57150SRHRoO'
    ];
    a0_0xaead = function () {
        return _0x2fd87d;
    };
    return a0_0xaead();
}
if (m == 0x0) {
} else if (m <= 0x6) {
    ans += 0x1;
} else {
    ans += 0x2;
}
function a0_0x4124(NKGLub, key) {
    var stringArray = a0_0xaead();
    a0_0x4124 = function (index, key) {
        index = index - 0x103;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4124(NKGLub, key);
}
console[a0_0x33dcc5(0x110)](ans);
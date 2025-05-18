var a0_0x4cdec0 = a0_0x2e6e;
(function (stringArrayFunction, comparisonValue) {
    var _0x2c33b4 = a0_0x2e6e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2c33b4(0x14b)) / 0x1 + -parseInt(_0x2c33b4(0x14a)) / 0x2 * (-parseInt(_0x2c33b4(0x156)) / 0x3) + parseInt(_0x2c33b4(0x146)) / 0x4 + parseInt(_0x2c33b4(0x153)) / 0x5 + parseInt(_0x2c33b4(0x150)) / 0x6 * (parseInt(_0x2c33b4(0x147)) / 0x7) + parseInt(_0x2c33b4(0x157)) / 0x8 * (-parseInt(_0x2c33b4(0x14e)) / 0x9) + parseInt(_0x2c33b4(0x155)) / 0xa * (-parseInt(_0x2c33b4(0x14c)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4b6d, 0x918b8));
function a0_0x2e6e(sDoCxF, key) {
    var stringArray = a0_0x4b6d();
    a0_0x2e6e = function (index, key) {
        index = index - 0x146;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e6e(sDoCxF, key);
}
function a0_0x4b6d() {
    var _0x429ab4 = [
        '7322259PxIbKa',
        'alert',
        'split',
        '8KxVxWv',
        '1009682izQjYy',
        '2059222Aerdmk',
        'utf8',
        '1759878aRckWF',
        'log',
        '6ihMTzu',
        'shift',
        'abs',
        '1658360ivbRdO',
        '/dev/stdin',
        '160tacTIv',
        '442137isfuDv',
        '8oiZTiP',
        '3240076rHGlYa'
    ];
    a0_0x4b6d = function () {
        return _0x429ab4;
    };
    return a0_0x4b6d();
}
var input = require('fs')['readFileSync'](a0_0x4cdec0(0x154), a0_0x4cdec0(0x14d));
var Arr = input['replace'](/\n$/, '')[a0_0x4cdec0(0x149)]('\x0a');
var n = Arr[a0_0x4cdec0(0x151)]() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr[I]['split'](':');
    var h = parseInt(arr[0x0], 0xa);
    var m = parseInt(arr[0x1], 0xa);
    var H = h * (0x168 / 0xc) + m * (0x168 / 0xc / 0x3c);
    var M = m * (0x168 / 0x3c);
    var hm = Math[a0_0x4cdec0(0x152)](H - M);
    var ans;
    if (hm >= 0x0 && hm < 0x1e)
        ans = a0_0x4cdec0(0x148);
    else if (hm >= 0x5a && hm <= 0xb4)
        ans = 'safe';
    else
        ans = 'warning';
    console[a0_0x4cdec0(0x14f)](ans);
}
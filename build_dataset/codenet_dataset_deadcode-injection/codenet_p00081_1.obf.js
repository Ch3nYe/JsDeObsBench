var a0_0x5784b5 = a0_0x128e;
var input = require('fs')['readFileSync'](a0_0x5784b5(0x0), a0_0x5784b5(0x1));
var Arr = input['trim']()[a0_0x5784b5(0x2)]('\x0a');
function a0_0x128e(tXRBRT, key) {
    var stringArray = a0_0x3e5a();
    a0_0x128e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x128e(tXRBRT, key);
}
function a0_0x3e5a() {
    var _0x1bcde3 = [
        '/dev/stdin',
        'utf8',
        'split',
        'length',
        'toFixed'
    ];
    a0_0x3e5a = function () {
        return _0x1bcde3;
    };
    return a0_0x3e5a();
}
for (var i = 0x0; i < Arr[a0_0x5784b5(0x3)]; i++) {
    var arr = Arr[i][a0_0x5784b5(0x2)](',')['map'](Number);
    (function (x1, y1, x2, y2, xq, yq) {
        var _0x3b4e14 = a0_0x128e;
        var k = x2 - x1 == 0x0 ? Infinity : (y2 - y1) / (x2 - x1);
        var ans;
        if (k == 0x0)
            ans = [
                xq,
                y1 - (yq - y1)
            ];
        else if (k == Infinity)
            ans = [
                x1 - (xq - x1),
                yq
            ];
        else {
            var a1 = (y2 - y1) / (x2 - x1);
            var a2 = -0x1 / a1;
            var b1 = y1 - a1 * x1;
            var b2 = yq - a2 * xq;
            var xm = (b2 - b1) / (a1 - a2);
            var x = 0x2 * xm - xq;
            var y = a2 * x + b2;
            ans = [
                x,
                y
            ];
        }
        console['log'](ans[0x0][_0x3b4e14(0x4)](0x6) + '\x20' + ans[0x1]['toFixed'](0x6));
    }['apply'](null, arr));
}
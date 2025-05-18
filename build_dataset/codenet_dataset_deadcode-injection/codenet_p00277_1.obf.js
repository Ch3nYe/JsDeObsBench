var a0_0x509c72 = a0_0x1d20;
var input = require('fs')[a0_0x509c72(0x0)]('/dev/stdin', a0_0x509c72(0x1));
var arr = input[a0_0x509c72(0x2)]()['split']('\x0a');
var nrl = arr['shift']()['split']('\x20')[a0_0x509c72(0x3)](Number);
var n = nrl[0x0];
var L = nrl[0x2];
function a0_0x1d20(ccqzrl, key) {
    var stringArray = a0_0x1e81();
    a0_0x1d20 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1d20(ccqzrl, key);
}
var t = [];
var max = [
    0x0,
    0x0
];
var time = 0x0;
for (var i = 0x0; i < n; i++)
    t[i] = [
        0x0,
        0x0,
        i
    ];
arr[a0_0x509c72(0x4)]([
    0x1,
    L,
    0x0
][a0_0x509c72(0x5)]('\x20'));
arr[a0_0x509c72(0x6)](function (v) {
    var _0x159802 = a0_0x1d20;
    v = v[_0x159802(0x7)]('\x20')[_0x159802(0x3)](Number);
    var d = v[0x0] - 0x1;
    var T = v[0x1];
    var x = v[0x2];
    t[max[0x0]][0x1] += T - time;
    time = T;
    t[d][0x0] += x;
    if (x > 0x0) {
        if (t[d][0x0] > max[0x1])
            max = [
                d,
                t[d][0x0]
            ];
        else if (t[d][0x0] == max[0x1] && d <= max[0x0])
            max = [
                d,
                t[d][0x0]
            ];
    }
    if (x < 0x0 && max[0x0] == d) {
        if (_0x159802(0x8) === _0x159802(0x8)) {
            var MAX = 0x0;
            var m = 0x0;
            t[_0x159802(0x6)](function (V, index) {
                var _0x32463f = a0_0x1d20;
                if (_0x32463f(0x9) === _0x32463f(0xa)) {
                    if (t[d][0x0] > max[0x1])
                        max = [
                            d,
                            t[d][0x0]
                        ];
                    else if (t[d][0x0] == max[0x1] && d <= max[0x0])
                        max = [
                            d,
                            t[d][0x0]
                        ];
                } else {
                    if (MAX < V[0x0])
                        m = index;
                }
            });
            max = [
                m,
                t[m][0x0]
            ];
        } else {
            var MAX = 0x0;
            var m = 0x0;
            t[_0x159802(0x6)](function (V, index) {
                if (MAX < V[0x0])
                    m = index;
            });
            max = [
                m,
                t[m][0x0]
            ];
        }
    }
});
t[a0_0x509c72(0xb)](function (a, b) {
    if (a[0x1] == b[0x1])
        return a[0x2] - b[0x2];
    else
        return b[0x1] - a[0x1];
});
console[a0_0x509c72(0xc)](t[0x0][0x2] + 0x1);
function a0_0x1e81() {
    var _0x17a4ae = [
        'readFileSync',
        'utf8',
        'trim',
        'map',
        'push',
        'join',
        'forEach',
        'split',
        'rBaod',
        'gDorJ',
        'ueYLZ',
        'sort',
        'log'
    ];
    a0_0x1e81 = function () {
        return _0x17a4ae;
    };
    return a0_0x1e81();
}
var a0_0x511813 = a0_0x7116;
function maxCards(arr, max) {
    var _0x25dbbb = a0_0x7116;
    for (var i = 0x0; i < n - (k - 0x1); i++) {
        var x = 0x1;
        var j = 0x0;
        while (j < k) {
            if (_0x25dbbb(0x0) === 'pbSzz') {
                x *= arr[i + j];
                j++;
            } else {
                c[_0x25dbbb(0x1)](Arr[I]);
                I++;
            }
        }
        max = Math[_0x25dbbb(0x2)](max, x);
    }
    return max;
}
function a0_0xb183() {
    var _0x37a55c = [
        'pbSzz',
        'push',
        'max',
        '/dev/stdin',
        'utf8',
        'split',
        'log',
        'NO\x20GAME'
    ];
    a0_0xb183 = function () {
        return _0x37a55c;
    };
    return a0_0xb183();
}
var input = require('fs')['readFileSync'](a0_0x511813(0x3), a0_0x511813(0x4));
var Arr = input['trim']()[a0_0x511813(0x5)]('\x0a');
var I = 0x0;
function a0_0x7116(BVAuZV, key) {
    var stringArray = a0_0xb183();
    a0_0x7116 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7116(BVAuZV, key);
}
while (!![]) {
    var nk = Arr[I][a0_0x511813(0x5)]('\x20')['map'](Number);
    I++;
    var n = nk[0x0];
    var k = nk[0x1];
    if (n == 0x0 && k == 0x0)
        break;
    var c = [];
    for (var i = 0x0; i < n; i++) {
        c[a0_0x511813(0x1)](Arr[I]);
        I++;
    }
    var maxA = 0x1;
    maxA = maxCards(c, maxA);
    var maxB = 0x1;
    for (var i = 0x0; i < n; i++) {
        for (var j = i + 0x1; j < n; j++) {
            var memo = c[i];
            c[i] = c[j];
            c[j] = memo;
            maxB = maxCards(c, maxB);
            c[j] = c[i];
            c[i] = memo;
        }
    }
    console[a0_0x511813(0x6)](maxA > maxB ? a0_0x511813(0x7) : maxB - maxA);
}
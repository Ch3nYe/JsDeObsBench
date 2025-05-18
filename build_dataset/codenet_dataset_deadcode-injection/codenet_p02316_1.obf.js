var a0_0x145a9e = a0_0x867e;
function knapsack() {
    var _0xb40934 = a0_0x867e;
    var C = [];
    for (var i = 0x0; i <= N; i++)
        C[i] = [];
    for (var i = 0x0; i <= W; i++)
        C[0x0][i] = 0x0;
    for (var i = 0x0; i <= N; i++)
        C[i][0x0] = 0x0;
    for (var i = 0x1; i <= N; i++) {
        if (_0xb40934(0x0) !== 'HqNhl') {
            for (var j = 0x1; j <= W; j++) {
                if (items[i]['w'] <= W) {
                    if (items[i]['v'] + C[i - 0x1][j - items[i]['w']] > C[i - 0x1][j]) {
                        if ('mSnld' !== 'fCejn') {
                            C[i][j] = items[i]['v'] + C[i - 0x1][j - items[i]['w']];
                        } else {
                            C[i][j] = C[i - 0x1][j];
                        }
                    } else {
                        C[i][j] = C[i - 0x1][j];
                    }
                } else {
                    C[i][j] = C[i - 0x1][j];
                }
            }
        } else {
            items['push']({
                'v': arr[0x0] * k,
                'w': arr[0x1] * k
            });
            N++;
            k++;
        }
    }
    return C[N][W];
}
var input = require('fs')[a0_0x145a9e(0x1)](a0_0x145a9e(0x2), 'utf8');
var Arr = input[a0_0x145a9e(0x3)]()[a0_0x145a9e(0x4)]('\x0a');
var nW = Arr[a0_0x145a9e(0x5)]()[a0_0x145a9e(0x4)]('\x20')[a0_0x145a9e(0x6)](Number);
var n = nW[0x0];
function a0_0xa2f6() {
    var _0x266421 = [
        'EibzB',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'map',
        'push',
        'log'
    ];
    a0_0xa2f6 = function () {
        return _0x266421;
    };
    return a0_0xa2f6();
}
var W = nW[0x1];
function a0_0x867e(VYGfJz, key) {
    var stringArray = a0_0xa2f6();
    a0_0x867e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x867e(VYGfJz, key);
}
var N = 0x0;
var items = [null];
for (var i = 0x1; i <= n; i++) {
    var arr = Arr[a0_0x145a9e(0x5)]()[a0_0x145a9e(0x4)]('\x20')['map'](Number);
    var k = 0x1;
    do {
        items[a0_0x145a9e(0x7)]({
            'v': arr[0x0] * k,
            'w': arr[0x1] * k
        });
        N++;
        k++;
    } while (arr[0x1] * k <= W);
}
var max = knapsack();
console[a0_0x145a9e(0x8)](max);
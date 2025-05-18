var a0_0x1e5260 = a0_0x374b;
function a0_0x1718() {
    var _0x27c949 = [
        'length',
        'HrVAw',
        'map',
        'push',
        'IjwhY',
        'max',
        'LsuPD',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'forEach',
        'split',
        'log'
    ];
    a0_0x1718 = function () {
        return _0x27c949;
    };
    return a0_0x1718();
}
function bomb(y, x, sum) {
    var _0x14dddd = a0_0x374b;
    YX[y][x] = sum;
    if (y == yx[_0x14dddd(0x0)] - 0x1) {
        max = Math['max'](max, sum);
    } else if ((yx['length'] - 0x1) / 0x2 > y) {
        if ('HrVAw' !== _0x14dddd(0x1)) {
            var x = v['split'](',')[_0x14dddd(0x2)](Number);
            var X = x[_0x14dddd(0x2)](function (v) {
                return 0x0;
            });
            yx[_0x14dddd(0x3)](x);
            YX[_0x14dddd(0x3)](X);
        } else {
            if (YX[y + 0x1][x] < sum + yx[y + 0x1][x])
                bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
            if (YX[y + 0x1][x + 0x1] < sum + yx[y + 0x1][x + 0x1])
                bomb(y + 0x1, x + 0x1, sum + yx[y + 0x1][x + 0x1]);
        }
    } else if ((yx['length'] - 0x1) / 0x2 <= y) {
        if (_0x14dddd(0x4) !== _0x14dddd(0x4)) {
            max = Math[_0x14dddd(0x5)](max, sum);
        } else {
            if (x - 0x1 >= 0x0) {
                if (_0x14dddd(0x6) === 'LsuPD') {
                    if (YX[y + 0x1][x - 0x1] < sum + yx[y + 0x1][x - 0x1])
                        bomb(y + 0x1, x - 0x1, sum + yx[y + 0x1][x - 0x1]);
                } else {
                    return 0x0;
                }
            }
            if (x < yx[y]['length'] - 0x1) {
                if ('VsPqI' === 'VsPqI') {
                    if (YX[y + 0x1][x] < sum + yx[y + 0x1][x])
                        bomb(y + 0x1, x, sum + yx[y + 0x1][x]);
                } else {
                    if (YX[y + 0x1][x - 0x1] < sum + yx[y + 0x1][x - 0x1])
                        bomb(y + 0x1, x - 0x1, sum + yx[y + 0x1][x - 0x1]);
                }
            }
        }
    }
}
var input = require('fs')[a0_0x1e5260(0x7)](a0_0x1e5260(0x8), a0_0x1e5260(0x9));
var Arr = input['trim']()['split']('\x0a');
var yx = [];
function a0_0x374b(FdMyIO, key) {
    var stringArray = a0_0x1718();
    a0_0x374b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x374b(FdMyIO, key);
}
var YX = [];
Arr[a0_0x1e5260(0xa)](function (v) {
    var _0x432826 = a0_0x374b;
    var x = v[_0x432826(0xb)](',')[_0x432826(0x2)](Number);
    var X = x[_0x432826(0x2)](function (v) {
        return 0x0;
    });
    yx['push'](x);
    YX[_0x432826(0x3)](X);
});
var max = 0x0;
bomb(0x0, 0x0, yx[0x0][0x0]);
console[a0_0x1e5260(0xc)](max);
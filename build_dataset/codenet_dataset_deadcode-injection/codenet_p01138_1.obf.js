var a0_0x27c697 = a0_0x2abf;
function a0_0x2abf(ebWZcB, key) {
    var stringArray = a0_0x5616();
    a0_0x2abf = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2abf(ebWZcB, key);
}
var input = require('fs')[a0_0x27c697(0x0)]('/dev/stdin', a0_0x27c697(0x1));
function a0_0x5616() {
    var _0x78e5ac = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'push',
        'sort',
        'forEach',
        'length',
        'fGeyO',
        'RektT',
        'rFQVa',
        'Xyveq',
        'log'
    ];
    a0_0x5616 = function () {
        return _0x78e5ac;
    };
    return a0_0x5616();
}
var arr = input[a0_0x27c697(0x2)]()[a0_0x27c697(0x3)]('\x0a');
while (!![]) {
    var n = arr[a0_0x27c697(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var ary = [];
    while (n--) {
        var hms = arr[a0_0x27c697(0x4)]()[a0_0x27c697(0x3)]('\x20');
        var start = hms[0x0][a0_0x27c697(0x3)](':')['map'](Number);
        var end = hms[0x1][a0_0x27c697(0x3)](':')['map'](Number);
        start = start[0x0] * 0x3c * 0x3c + start[0x1] * 0x3c + start[0x2];
        end = end[0x0] * 0x3c * 0x3c + end[0x1] * 0x3c + end[0x2];
        ary[a0_0x27c697(0x5)]([
            start,
            end
        ]);
    }
    ary[a0_0x27c697(0x6)](function (a, b) {
        return a[0x0] - b[0x0];
    });
    var train = [];
    var cnt = 0x0;
    ary[a0_0x27c697(0x7)](function (v) {
        var _0x32d57e = a0_0x2abf;
        if (train[_0x32d57e(0x8)] == 0x0) {
            cnt++;
            train[_0x32d57e(0x5)](v[0x1]);
        } else {
            if (_0x32d57e(0x9) !== _0x32d57e(0xa)) {
                train[_0x32d57e(0x6)](function (a, b) {
                    return a - b;
                });
                if (train[0x0] <= v[0x0]) {
                    train[_0x32d57e(0x4)]();
                    train[_0x32d57e(0x5)](v[0x1]);
                } else {
                    if (_0x32d57e(0xb) !== _0x32d57e(0xc)) {
                        cnt++;
                        train['push'](v[0x1]);
                    } else {
                        train[_0x32d57e(0x6)](function (a, b) {
                            return a - b;
                        });
                        if (train[0x0] <= v[0x0]) {
                            train[_0x32d57e(0x4)]();
                            train[_0x32d57e(0x5)](v[0x1]);
                        } else {
                            cnt++;
                            train['push'](v[0x1]);
                        }
                    }
                }
            } else {
                train[_0x32d57e(0x4)]();
                train[_0x32d57e(0x5)](v[0x1]);
            }
        }
    });
    console[a0_0x27c697(0xd)](cnt);
}
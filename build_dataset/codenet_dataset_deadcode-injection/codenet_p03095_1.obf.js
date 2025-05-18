var a0_0xeef070 = a0_0x15b7;
function roop(depth, A, end) {
    var _0xcf5158 = a0_0x15b7;
    var ans = 0x0, i = 0x0;
    if (depth < end) {
        for (i = depth; i < end; i++) {
            if ('MLWnl' === _0xcf5158(0x0)) {
                ans += roop(i + 0x1, A, end);
            } else {
                return A[depth];
            }
        }
        return A[depth] + A[depth] * ans;
    } else {
        if (_0xcf5158(0x1) !== _0xcf5158(0x1)) {
            var ans = 0x0, i = 0x0;
            if (depth < end) {
                for (i = depth; i < end; i++) {
                    ans += roop(i + 0x1, A, end);
                }
                return A[depth] + A[depth] * ans;
            } else {
                return A[depth];
            }
        } else {
            return A[depth];
        }
    }
}
function a0_0x5dd9() {
    var _0x2ed81a = [
        'MLWnl',
        'dwrxg',
        'split',
        'IWUMo',
        'FHgHP',
        'aHQDY',
        'laorA',
        'EEGVi',
        'push',
        'GpOXK',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5dd9 = function () {
        return _0x2ed81a;
    };
    return a0_0x5dd9();
}
function main(input) {
    var _0x2d818e = a0_0x15b7;
    var i, j, A, B, ans = 0x0, count = 0x0;
    var inputs = input[_0x2d818e(0x2)]('\x0a');
    var arg = Number(inputs[0x0]);
    var str = inputs[0x1]['split']('');
    A = {};
    for (i = 0x0; i < arg; ++i) {
        if (_0x2d818e(0x3) === _0x2d818e(0x4)) {
            ans += roop(i + 0x1, A, end);
        } else {
            if (A[str[i]]) {
                if (_0x2d818e(0x5) !== 'wenCA') {
                    A[str[i]]++;
                } else {
                    for (i = depth; i < end; i++) {
                        ans += roop(i + 0x1, A, end);
                    }
                    return A[depth] + A[depth] * ans;
                }
            } else {
                if (_0x2d818e(0x6) === _0x2d818e(0x7)) {
                    A[str[i]] = 0x1;
                    count++;
                } else {
                    A[str[i]] = 0x1;
                    count++;
                }
            }
        }
    }
    B = [];
    for (key in A) {
        B[_0x2d818e(0x8)](A[key]);
    }
    for (i = 0x0; i < count; ++i) {
        if (_0x2d818e(0x9) === 'BjPkT') {
            A[str[i]]++;
        } else {
            ans += roop(i, B, count - 0x1);
        }
    }
    ans = Math['round'](ans);
    console[_0x2d818e(0xa)](ans % 0x3b9aca07);
}
function a0_0x15b7(foDJTP, key) {
    var stringArray = a0_0x5dd9();
    a0_0x15b7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15b7(foDJTP, key);
}
main(require('fs')[a0_0xeef070(0xb)](a0_0xeef070(0xc), a0_0xeef070(0xd)));
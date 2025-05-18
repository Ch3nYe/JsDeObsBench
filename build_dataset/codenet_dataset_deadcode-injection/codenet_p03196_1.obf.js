var a0_0x3e4644 = a0_0x5ac0;
inp = require('fs')[a0_0x3e4644(0x0)](a0_0x3e4644(0x1), a0_0x3e4644(0x2))[a0_0x3e4644(0x3)]()['split']('\x0a');
function a0_0x4a22() {
    var _0x24553d = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'nuxtO',
        'push',
        'teOCY',
        'FSWSZ',
        'length',
        'log'
    ];
    a0_0x4a22 = function () {
        return _0x24553d;
    };
    return a0_0x4a22();
}
l = inp['shift']()[a0_0x3e4644(0x4)]('\x20');
N = l[a0_0x3e4644(0x5)]() * 0x1;
P = l[a0_0x3e4644(0x5)]() * 0x1;
_primFactors = function (n) {
    var _0x2c60ac = a0_0x5ac0;
    var arr = [];
    if (n == 0x1) {
        if ('nuxtO' !== _0x2c60ac(0x6)) {
            do {
                r++;
                n /= i;
            } while (n % i === 0x0);
            arr[_0x2c60ac(0x7)]({
                'n': i,
                'r': r
            });
        } else {
            return [{
                    'n': 0x1,
                    'r': 0x1
                }];
        }
    }
    s = n;
    var i = 0x2;
    r = 0x0;
    if (n % i === 0x0) {
        if (_0x2c60ac(0x8) !== 'azxBG') {
            do {
                r++;
                n /= i;
            } while (n % i === 0x0);
            arr[_0x2c60ac(0x7)]({
                'n': i,
                'r': r
            });
        } else {
            arr[_0x2c60ac(0x7)]({
                'n': n,
                'r': 0x1
            });
        }
    }
    for (i = 0x3; i * i <= s; i += 0x2) {
        r = 0x0;
        if (n % i === 0x0) {
            do {
                r++;
                n /= i;
            } while (n % i === 0x0);
            arr['push']({
                'n': i,
                'r': r
            });
        }
    }
    if (n > 0x1) {
        if (_0x2c60ac(0x9) === _0x2c60ac(0x9)) {
            arr[_0x2c60ac(0x7)]({
                'n': n,
                'r': 0x1
            });
        } else {
            return [{
                    'n': 0x1,
                    'r': 0x1
                }];
        }
    }
    return arr;
};
arr = _primFactors(P);
ans = 0x1;
for (i = 0x0; i < arr[a0_0x3e4644(0xa)]; i++) {
    a = arr[i];
    r = a['r'];
    while (r >= N) {
        ans *= a['n'];
        r -= N;
    }
}
function a0_0x5ac0(JPvpTy, key) {
    var stringArray = a0_0x4a22();
    a0_0x5ac0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5ac0(JPvpTy, key);
}
console[a0_0x3e4644(0xb)](ans);
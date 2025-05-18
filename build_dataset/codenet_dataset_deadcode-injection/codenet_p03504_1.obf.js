function a0_0x1cbf(CNZdvN, key) {
    const stringArray = a0_0x47ec();
    a0_0x1cbf = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1cbf(CNZdvN, key);
}
const a0_0x2522c0 = a0_0x1cbf;
function max(array) {
    var result = -0x1 * Infinity;
    for (num of array) {
        if (result < num) {
            result = num;
        }
    }
    return result;
}
function main(input) {
    const _0x46d84d = a0_0x1cbf;
    const lines = input[_0x46d84d(0x0)]('\x0a');
    const nums = lines[_0x46d84d(0x1)](line => line[_0x46d84d(0x0)]('\x20')['map'](x => parseInt(x)));
    var n_c = nums[_0x46d84d(0x2)]();
    const N = n_c[0x0];
    const C = n_c[0x1];
    const t = Array(0x30d42);
    const max_recorders = Array(0x30d42);
    max_recorders['fill'](0x0);
    for (var c = 0x1; c <= C; c++) {
        t['fill'](0x0);
        for (var n = 0x0; n < N; n++) {
            if (nums[n][0x2] == c) {
                if ('jaQuY' !== _0x46d84d(0x3)) {
                    t[nums[n][0x0] * 0x2 - 0x1]++;
                    t[nums[n][0x1] * 0x2]--;
                } else {
                    t[i] += t[i - 0x1];
                }
            }
        }
        for (var i = 0x1; i < 0x30d42; i++) {
            if (_0x46d84d(0x4) !== 'BALFF') {
                t[i] += t[i - 0x1];
            } else {
                var result = -0x1 * Infinity;
                for (num of array) {
                    if (result < num) {
                        result = num;
                    }
                }
                return result;
            }
        }
        for (var i = 0x1; i < 0x30d42; i++) {
            if (_0x46d84d(0x5) === 'mVCyd') {
                result = num;
            } else {
                if (t[i] > 0x0) {
                    max_recorders[i]++;
                }
            }
        }
    }
    console[_0x46d84d(0x6)](max(max_recorders));
}
main(require('fs')[a0_0x2522c0(0x7)](a0_0x2522c0(0x8), a0_0x2522c0(0x9)));
function a0_0x47ec() {
    const _0x569568 = [
        'split',
        'map',
        'shift',
        'VwKVY',
        'oCYJa',
        'TCvVK',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x47ec = function () {
        return _0x569568;
    };
    return a0_0x47ec();
}
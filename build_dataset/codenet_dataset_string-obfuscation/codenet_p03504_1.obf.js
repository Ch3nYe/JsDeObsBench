function a0_0x2a6d() {
    const _0x272f13 = [
        '23958224VJSHLa',
        '4061680YdoLzK',
        '/dev/stdin',
        '1893598RApttc',
        'shift',
        'split',
        '1122432mweTFq',
        'utf8',
        'fill',
        'map',
        '4119666pPptUk',
        '882048YEfbAA',
        '1jCJurX',
        '9697401xFHkWJ',
        'log'
    ];
    a0_0x2a6d = function () {
        return _0x272f13;
    };
    return a0_0x2a6d();
}
function a0_0x177b(ErZyGi, key) {
    const stringArray = a0_0x2a6d();
    a0_0x177b = function (index, key) {
        index = index - 0x14f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x177b(ErZyGi, key);
}
const a0_0x42f9a9 = a0_0x177b;
(function (stringArrayFunction, comparisonValue) {
    const _0x38e781 = a0_0x177b;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x38e781(0x153)) / 0x1 * (-parseInt(_0x38e781(0x159)) / 0x2) + -parseInt(_0x38e781(0x15c)) / 0x3 + parseInt(_0x38e781(0x152)) / 0x4 + -parseInt(_0x38e781(0x157)) / 0x5 + -parseInt(_0x38e781(0x151)) / 0x6 + -parseInt(_0x38e781(0x154)) / 0x7 + parseInt(_0x38e781(0x156)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2a6d, 0xdc9e7));
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
    const _0x4ffb11 = a0_0x177b;
    const lines = input[_0x4ffb11(0x15b)]('\x0a');
    const nums = lines[_0x4ffb11(0x150)](line => line[_0x4ffb11(0x15b)]('\x20')['map'](x => parseInt(x)));
    var n_c = nums[_0x4ffb11(0x15a)]();
    const N = n_c[0x0];
    const C = n_c[0x1];
    const t = Array(0x30d42);
    const max_recorders = Array(0x30d42);
    max_recorders[_0x4ffb11(0x14f)](0x0);
    for (var c = 0x1; c <= C; c++) {
        t[_0x4ffb11(0x14f)](0x0);
        for (var n = 0x0; n < N; n++) {
            if (nums[n][0x2] == c) {
                t[nums[n][0x0] * 0x2 - 0x1]++;
                t[nums[n][0x1] * 0x2]--;
            }
        }
        for (var i = 0x1; i < 0x30d42; i++) {
            t[i] += t[i - 0x1];
        }
        for (var i = 0x1; i < 0x30d42; i++) {
            if (t[i] > 0x0) {
                max_recorders[i]++;
            }
        }
    }
    console[_0x4ffb11(0x155)](max(max_recorders));
}
main(require('fs')['readFileSync'](a0_0x42f9a9(0x158), a0_0x42f9a9(0x15d)));
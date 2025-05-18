function a0_0x21cf(eRSYPS, key) {
    var stringArray = a0_0x48f5();
    a0_0x21cf = function (index, key) {
        index = index - 0x197;
        var value = stringArray[index];
        return value;
    };
    return a0_0x21cf(eRSYPS, key);
}
function a0_0x48f5() {
    var _0x45db46 = [
        '/dev/stdin',
        '3082548BInnQP',
        '1922664qnbuly',
        '1432403lHbxBQ',
        'split',
        '9205YWvrfW',
        'log',
        '262560silYAY',
        'round',
        'push',
        '8HxxTTT',
        '2842740eBOqHU',
        'utf8',
        '1313448mfbRea'
    ];
    a0_0x48f5 = function () {
        return _0x45db46;
    };
    return a0_0x48f5();
}
var a0_0x5dfc39 = a0_0x21cf;
(function (stringArrayFunction, comparisonValue) {
    var _0x38ccd2 = a0_0x21cf;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x38ccd2(0x1a1)) / 0x1 * (-parseInt(_0x38ccd2(0x198)) / 0x2) + -parseInt(_0x38ccd2(0x1a3)) / 0x3 + parseInt(_0x38ccd2(0x19b)) / 0x4 + parseInt(_0x38ccd2(0x199)) / 0x5 + -parseInt(_0x38ccd2(0x19d)) / 0x6 + -parseInt(_0x38ccd2(0x19f)) / 0x7 + parseInt(_0x38ccd2(0x19e)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x48f5, 0x59e1c));
function roop(depth, A, end) {
    var ans = 0x0, i = 0x0;
    if (depth < end) {
        for (i = depth; i < end; i++) {
            ans += roop(i + 0x1, A, end);
        }
        return A[depth] + A[depth] * ans;
    } else {
        return A[depth];
    }
}
function main(input) {
    var _0x53b515 = a0_0x21cf;
    var i, j, A, B, ans = 0x0, count = 0x0;
    var inputs = input['split']('\x0a');
    var arg = Number(inputs[0x0]);
    var str = inputs[0x1][_0x53b515(0x1a0)]('');
    A = {};
    for (i = 0x0; i < arg; ++i) {
        if (A[str[i]]) {
            A[str[i]]++;
        } else {
            A[str[i]] = 0x1;
            count++;
        }
    }
    B = [];
    for (key in A) {
        B[_0x53b515(0x197)](A[key]);
    }
    for (i = 0x0; i < count; ++i) {
        ans += roop(i, B, count - 0x1);
    }
    ans = Math[_0x53b515(0x1a4)](ans);
    console[_0x53b515(0x1a2)](ans % 0x3b9aca07);
}
main(require('fs')['readFileSync'](a0_0x5dfc39(0x19c), a0_0x5dfc39(0x19a)));
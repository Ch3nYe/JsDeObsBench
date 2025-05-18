function a0_0x15ed(agIITk, key) {
    var stringArray = a0_0x262e();
    a0_0x15ed = function (index, key) {
        index = index - 0x121;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15ed(agIITk, key);
}
var a0_0x55cf3f = a0_0x15ed;
(function (stringArrayFunction, comparisonValue) {
    var _0x45e2ed = a0_0x15ed;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x45e2ed(0x12a)) / 0x1 + -parseInt(_0x45e2ed(0x12e)) / 0x2 * (-parseInt(_0x45e2ed(0x123)) / 0x3) + parseInt(_0x45e2ed(0x122)) / 0x4 + parseInt(_0x45e2ed(0x124)) / 0x5 * (parseInt(_0x45e2ed(0x128)) / 0x6) + -parseInt(_0x45e2ed(0x121)) / 0x7 + -parseInt(_0x45e2ed(0x125)) / 0x8 * (parseInt(_0x45e2ed(0x12d)) / 0x9) + -parseInt(_0x45e2ed(0x12c)) / 0xa * (parseInt(_0x45e2ed(0x127)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x262e, 0x289cb));
function Main(input) {
    var _0x49d312 = a0_0x15ed;
    input = input[_0x49d312(0x129)]('\x20');
    var a = parseInt(input[0x0], 0xa);
    var b = parseInt(input[0x1], 0xa);
    var a_real = 0x1;
    var b_real = 0x1;
    var a_count = 0x1;
    var b_count = 0x1;
    var ans = 0x0;
    while (!![]) {
        while (!![]) {
            a_count++;
            a_real += a_count;
            b_count++;
            b_real += b_count;
            if (a_real > a) {
                break;
            }
        }
        while (!![]) {
            b_count++;
            b_real += b_count;
            if (b_real > b) {
                break;
            }
        }
        if (a_real - a == b_real - b) {
            break;
        }
    }
    ans = a_real - a;
    console[_0x49d312(0x126)](ans);
}
Main(require('fs')[a0_0x55cf3f(0x12f)]('/dev/stdin', a0_0x55cf3f(0x12b)));
function a0_0x262e() {
    var _0xb9977c = [
        '3348PORjNd',
        '4zJsMBg',
        'readFileSync',
        '663558mjIZNm',
        '446236ExqBAQ',
        '406914gqXyiN',
        '11365raVQWb',
        '2344HVyJRu',
        'log',
        '22QihnGq',
        '318OvfkzA',
        'split',
        '243539iKJHNM',
        'utf8',
        '1883530VLyfqK'
    ];
    a0_0x262e = function () {
        return _0xb9977c;
    };
    return a0_0x262e();
}
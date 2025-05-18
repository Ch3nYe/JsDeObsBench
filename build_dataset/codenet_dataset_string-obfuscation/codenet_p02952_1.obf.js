var a0_0x138ae4 = a0_0x4bfd;
function a0_0x207c() {
    var _0x8726d2 = [
        '27368XXqwTJ',
        '/dev/stdin',
        '27655116GzPlvC',
        '308GCVFPo',
        '1025451QBfPRH',
        '2001310WMlRGT',
        '11oYsVde',
        '2pRWhkY',
        '647403XhINtP',
        '8720172cVFGUQ',
        '12TJWNCv',
        '5PZVHns',
        'readFileSync',
        'utf8',
        '5803962xNbOAN'
    ];
    a0_0x207c = function () {
        return _0x8726d2;
    };
    return a0_0x207c();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x42ce4f = a0_0x4bfd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x42ce4f(0x151)) / 0x1 * (parseInt(_0x42ce4f(0x150)) / 0x2) + -parseInt(_0x42ce4f(0x14d)) / 0x3 * (-parseInt(_0x42ce4f(0x153)) / 0x4) + parseInt(_0x42ce4f(0x154)) / 0x5 * (-parseInt(_0x42ce4f(0x148)) / 0x6) + -parseInt(_0x42ce4f(0x14c)) / 0x7 * (-parseInt(_0x42ce4f(0x149)) / 0x8) + -parseInt(_0x42ce4f(0x152)) / 0x9 + -parseInt(_0x42ce4f(0x14e)) / 0xa + -parseInt(_0x42ce4f(0x14f)) / 0xb * (-parseInt(_0x42ce4f(0x14b)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x207c, 0xaa1df));
function a0_0x4bfd(IEFHGH, key) {
    var stringArray = a0_0x207c();
    a0_0x4bfd = function (index, key) {
        index = index - 0x147;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4bfd(IEFHGH, key);
}
function keta(num) {
    for (var i = 0x1; i <= 0x6; i++) {
        if (num < 0xa ** i)
            return i % 0x2;
    }
}
function Main(input) {
    var ans = 0x0;
    var cnt = 0x1;
    while (cnt <= input) {
        ans += keta(cnt);
        cnt++;
    }
    console['log'](ans);
}
Main(require('fs')[a0_0x138ae4(0x155)](a0_0x138ae4(0x14a), a0_0x138ae4(0x147)));
var a0_0x390039 = a0_0x536e;
function a0_0x536e(vRDoxr, key) {
    var stringArray = a0_0x407d();
    a0_0x536e = function (index, key) {
        index = index - 0x82;
        var value = stringArray[index];
        return value;
    };
    return a0_0x536e(vRDoxr, key);
}
function a0_0x407d() {
    var _0x52ddf6 = [
        'utf8',
        '3668250nFGSNw',
        '45784UzTAEi',
        '376039pQVHnm',
        'perfect\x20number',
        '849690EswxVv',
        'split',
        '3478941KlOZBV',
        'abundant\x20number',
        'log',
        'readFileSync',
        'deficient\x20number',
        '1477iAKdtK',
        '8812uCnHCM',
        '342WDnBNN',
        'shift',
        '1840218QzuyJZ',
        '/dev/stdin',
        '895DbKxfj'
    ];
    a0_0x407d = function () {
        return _0x52ddf6;
    };
    return a0_0x407d();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x218aad = a0_0x536e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x218aad(0x84)) / 0x1 + -parseInt(_0x218aad(0x82)) / 0x2 + -parseInt(_0x218aad(0x88)) / 0x3 + parseInt(_0x218aad(0x8e)) / 0x4 * (-parseInt(_0x218aad(0x93)) / 0x5) + parseInt(_0x218aad(0x91)) / 0x6 + -parseInt(_0x218aad(0x8d)) / 0x7 * (-parseInt(_0x218aad(0x83)) / 0x8) + parseInt(_0x218aad(0x8f)) / 0x9 * (parseInt(_0x218aad(0x86)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x407d, 0xeeff2));
var input = require('fs')[a0_0x390039(0x8b)](a0_0x390039(0x92), a0_0x390039(0x94));
var arr = input['trim']()[a0_0x390039(0x87)]('\x0a');
while (!![]) {
    var n = arr[a0_0x390039(0x90)]() - 0x0;
    if (n == 0x0)
        break;
    var sum = n != 0x1 ? 0x1 : 0x0;
    var sqrt = Math['sqrt'](n);
    for (var i = 0x2; i < sqrt; i++) {
        if (n % i == 0x0)
            sum += i + n / i;
    }
    if (n % sqrt == 0x0 && sqrt != 0x1)
        sum += sqrt;
    var ans;
    if (n == sum)
        ans = a0_0x390039(0x85);
    else if (n > sum)
        ans = a0_0x390039(0x8c);
    else if (n < sum)
        ans = a0_0x390039(0x89);
    console[a0_0x390039(0x8a)](ans);
}
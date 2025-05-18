function a0_0x2680() {
    var _0x15d955 = [
        '5322312aYvcYv',
        'map',
        '95930jfSJte',
        '22OhizCv',
        '5338071hHZalX',
        '/dev/stdin',
        '638443PkZCSa',
        '12yutDyN',
        '7pPLtTC',
        'trim',
        '1549140XUhTRq',
        '1900374ZWGRAL',
        '100146sJnjgd',
        'split',
        '12uCwRvU',
        '8BvWimm',
        'readFileSync',
        'length'
    ];
    a0_0x2680 = function () {
        return _0x15d955;
    };
    return a0_0x2680();
}
var a0_0x7fa436 = a0_0x3d36;
(function (stringArrayFunction, comparisonValue) {
    var _0x35ba36 = a0_0x3d36;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x35ba36(0x13b)) / 0x1 + -parseInt(_0x35ba36(0x143)) / 0x2 * (-parseInt(_0x35ba36(0x141)) / 0x3) + -parseInt(_0x35ba36(0x13c)) / 0x4 * (-parseInt(_0x35ba36(0x137)) / 0x5) + parseInt(_0x35ba36(0x140)) / 0x6 * (-parseInt(_0x35ba36(0x13d)) / 0x7) + -parseInt(_0x35ba36(0x144)) / 0x8 * (-parseInt(_0x35ba36(0x139)) / 0x9) + -parseInt(_0x35ba36(0x13f)) / 0xa * (parseInt(_0x35ba36(0x138)) / 0xb) + -parseInt(_0x35ba36(0x147)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2680, 0x66601));
function a0_0x3d36(iWGWNQ, key) {
    var stringArray = a0_0x2680();
    a0_0x3d36 = function (index, key) {
        index = index - 0x137;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d36(iWGWNQ, key);
}
function Main(s) {
    var _0x262448 = a0_0x3d36;
    const sl = s[_0x262448(0x146)] - 0x1;
    const sa = s[_0x262448(0x142)]('')[_0x262448(0x148)](a => parseInt(a));
    var ans = 0x0;
    for (var i = 0x0; i < 0x1 << sl; i++) {
        var b = 0x0;
        for (var j = 0x0; j < sl; j++) {
            b += sa[j];
            if (i & 0x1 << j) {
                ans += b;
                b = 0x0;
            } else
                b *= 0xa;
        }
        ans += b + sa[sl];
    }
    console['log'](ans);
}
Main(require('fs')[a0_0x7fa436(0x145)](a0_0x7fa436(0x13a), 'utf8')[a0_0x7fa436(0x13e)]());
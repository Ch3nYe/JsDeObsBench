function a0_0x19a2(UeGpYK, key) {
    var stringArray = a0_0x39a1();
    a0_0x19a2 = function (index, key) {
        index = index - 0x131;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19a2(UeGpYK, key);
}
var a0_0x4bcf29 = a0_0x19a2;
(function (stringArrayFunction, comparisonValue) {
    var _0xbc24ae = a0_0x19a2;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xbc24ae(0x136)) / 0x1 + -parseInt(_0xbc24ae(0x134)) / 0x2 + -parseInt(_0xbc24ae(0x144)) / 0x3 * (-parseInt(_0xbc24ae(0x141)) / 0x4) + -parseInt(_0xbc24ae(0x13a)) / 0x5 * (-parseInt(_0xbc24ae(0x13d)) / 0x6) + parseInt(_0xbc24ae(0x133)) / 0x7 * (-parseInt(_0xbc24ae(0x140)) / 0x8) + -parseInt(_0xbc24ae(0x137)) / 0x9 + parseInt(_0xbc24ae(0x135)) / 0xa * (parseInt(_0xbc24ae(0x142)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39a1, 0x3b2e3));
var input = require('fs')['readFileSync'](a0_0x4bcf29(0x131), a0_0x4bcf29(0x13c));
var str = input[a0_0x4bcf29(0x13e)](/egg/g, 'E')[a0_0x4bcf29(0x13e)](/chicken/g, 'C');
function a0_0x39a1() {
    var _0x3ed0cf = [
        'log',
        '1692095AwLUvw',
        'chicken',
        'utf8',
        '6KyfeaL',
        'replace',
        'egg',
        '49064qeYehp',
        '4pZEiaY',
        '242SnZWEm',
        'slice',
        '1157286nLsXuZ',
        '/dev/stdin',
        'forEach',
        '504dpFBcf',
        '403916GzZtWr',
        '276880gdBQUi',
        '339419wsuaeg',
        '971649IVOkkT',
        'length'
    ];
    a0_0x39a1 = function () {
        return _0x3ed0cf;
    };
    return a0_0x39a1();
}
var ary = str['replace'](/EE/g, 'EAE')['replace'](/CC/g, 'CAC')['split']('A');
var ans = '';
ary[a0_0x4bcf29(0x132)](function (v) {
    var _0x46b3ee = a0_0x4bcf29;
    if (ans[_0x46b3ee(0x138)] < v['length'])
        ans = v;
});
console[a0_0x4bcf29(0x139)](ans[a0_0x4bcf29(0x143)](-0x1) == 'E' ? a0_0x4bcf29(0x13f) : a0_0x4bcf29(0x13b));
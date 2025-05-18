var a0_0x29097f = a0_0x3d99;
function a0_0x3d99(GqwpxX, key) {
    var stringArray = a0_0x1070();
    a0_0x3d99 = function (index, key) {
        index = index - 0x12f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d99(GqwpxX, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5a317f = a0_0x3d99;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5a317f(0x130)) / 0x1 * (-parseInt(_0x5a317f(0x12f)) / 0x2) + -parseInt(_0x5a317f(0x132)) / 0x3 + -parseInt(_0x5a317f(0x138)) / 0x4 + parseInt(_0x5a317f(0x133)) / 0x5 + -parseInt(_0x5a317f(0x13b)) / 0x6 * (parseInt(_0x5a317f(0x137)) / 0x7) + parseInt(_0x5a317f(0x135)) / 0x8 + parseInt(_0x5a317f(0x139)) / 0x9 * (parseInt(_0x5a317f(0x134)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1070, 0x41a84));
function Main(input) {
    var _0x42c704 = a0_0x3d99;
    input = input[_0x42c704(0x136)]();
    input = input[_0x42c704(0x13c)]('\x0a');
    var A = input[0x0][_0x42c704(0x13c)]('');
    var B = input[0x1][_0x42c704(0x13c)]('');
    if (A[0x0] == B[0x2] && A[0x1] == B[0x1] && A[0x2] == B[0x0])
        console['log'](_0x42c704(0x131));
    else
        console[_0x42c704(0x13e)]('NO');
}
function a0_0x1070() {
    var _0x1f4054 = [
        '2789297FBZamX',
        '1028220pLsjjd',
        '953559YxLyAX',
        'readFileSync',
        '6xgPPrS',
        'split',
        'utf8',
        'log',
        '2pujbxG',
        '323594twDZJV',
        'YES',
        '47817AOCTxn',
        '1813075Jhpiyi',
        '70gNSsHT',
        '1277752NehYiJ',
        'trim'
    ];
    a0_0x1070 = function () {
        return _0x1f4054;
    };
    return a0_0x1070();
}
Main(require('fs')[a0_0x29097f(0x13a)]('/dev/stdin', a0_0x29097f(0x13d)));
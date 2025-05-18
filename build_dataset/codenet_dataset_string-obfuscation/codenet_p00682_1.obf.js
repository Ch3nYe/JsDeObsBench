function a0_0x4ebf() {
    var _0x1897f1 = [
        '3FvoPzC',
        'length',
        '200655qWewwf',
        'push',
        'shift',
        'resume',
        '318994cczAxr',
        '8SWMLYY',
        'data',
        'utf8',
        'setEncoding',
        '1155008LlkGqd',
        '979913rmDVcd',
        '185vQrIeu',
        'toFixed',
        'stdin',
        '1494uVaabs',
        '8825817HFsiGt',
        '72dsKAsf',
        'abs',
        '183750TkOtXn',
        '20960WXMARL'
    ];
    a0_0x4ebf = function () {
        return _0x1897f1;
    };
    return a0_0x4ebf();
}
var a0_0x2df1d5 = a0_0x12be;
(function (stringArrayFunction, comparisonValue) {
    var _0x3d61ab = a0_0x12be;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3d61ab(0x7f)) / 0x1 * (parseInt(_0x3d61ab(0x6f)) / 0x2) + parseInt(_0x3d61ab(0x81)) / 0x3 + -parseInt(_0x3d61ab(0x74)) / 0x4 + -parseInt(_0x3d61ab(0x76)) / 0x5 * (-parseInt(_0x3d61ab(0x7d)) / 0x6) + parseInt(_0x3d61ab(0x7a)) / 0x7 * (parseInt(_0x3d61ab(0x70)) / 0x8) + parseInt(_0x3d61ab(0x79)) / 0x9 * (-parseInt(_0x3d61ab(0x7e)) / 0xa) + parseInt(_0x3d61ab(0x75)) / 0xb * (-parseInt(_0x3d61ab(0x7b)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4ebf, 0xc609c));
process[a0_0x2df1d5(0x78)][a0_0x2df1d5(0x6e)]();
process[a0_0x2df1d5(0x78)][a0_0x2df1d5(0x73)](a0_0x2df1d5(0x72));
function a0_0x12be(tzmZNa, key) {
    var stringArray = a0_0x4ebf();
    a0_0x12be = function (index, key) {
        index = index - 0x6e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x12be(tzmZNa, key);
}
process[a0_0x2df1d5(0x78)]['on'](a0_0x2df1d5(0x71), function (chunk) {
    var _0x3828c0 = a0_0x2df1d5;
    var input = chunk['trim']()['split']('\x0a');
    var order = 0x1;
    while (!![]) {
        var n = input[_0x3828c0(0x83)]();
        if (n == 0x0)
            break;
        var coordinate = [];
        while (n--)
            coordinate[_0x3828c0(0x82)](input[_0x3828c0(0x83)]()['split']('\x20')['map'](Number));
        coordinate[_0x3828c0(0x82)](coordinate[0x0]);
        var area = 0x0;
        for (var i = 0x0; i < coordinate[_0x3828c0(0x80)] - 0x1; i++) {
            area += coordinate[i][0x0] * coordinate[i + 0x1][0x1] - coordinate[i][0x1] * coordinate[i + 0x1][0x0];
        }
        console['log'](order + '\x20' + Math[_0x3828c0(0x7c)](area / 0x2)[_0x3828c0(0x77)](0x1));
        input[_0x3828c0(0x83)]();
        order++;
    }
});
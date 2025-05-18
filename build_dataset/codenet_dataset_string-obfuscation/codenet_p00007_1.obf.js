function a0_0x2981() {
    var _0x476b9e = [
        '511528PsNxbi',
        '70dHbSut',
        '45plUgwy',
        'resume',
        '2645610GWkRJR',
        'setEncoding',
        'trim',
        'end',
        '104278nxECuP',
        'stdin',
        '547565ddJnvR',
        'log',
        'data',
        '49Sbneqj',
        '3pevhXa',
        '224420Vboedf',
        '2660364mpegAt',
        '1586431XecsXe'
    ];
    a0_0x2981 = function () {
        return _0x476b9e;
    };
    return a0_0x2981();
}
var a0_0x3f291b = a0_0x381a;
function a0_0x381a(UDRaUA, key) {
    var stringArray = a0_0x2981();
    a0_0x381a = function (index, key) {
        index = index - 0xa2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x381a(UDRaUA, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x20eaba = a0_0x381a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x20eaba(0xb3)) / 0x1 + -parseInt(_0x20eaba(0xb1)) / 0x2 * (parseInt(_0x20eaba(0xa5)) / 0x3) + -parseInt(_0x20eaba(0xa6)) / 0x4 * (-parseInt(_0x20eaba(0xab)) / 0x5) + parseInt(_0x20eaba(0xad)) / 0x6 + -parseInt(_0x20eaba(0xa4)) / 0x7 * (parseInt(_0x20eaba(0xa9)) / 0x8) + parseInt(_0x20eaba(0xa7)) / 0x9 + -parseInt(_0x20eaba(0xaa)) / 0xa * (parseInt(_0x20eaba(0xa8)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2981, 0x444d8));
function main() {
    var _0x61b6e0 = a0_0x381a;
    var debt = 0x186a0;
    for (var i = 0x0; i < input[_0x61b6e0(0xaf)]() - 0x0; i++) {
        debt = Math['ceil'](debt * 1.05 / 0x3e8) * 0x3e8;
    }
    console[_0x61b6e0(0xa2)](debt);
}
var input = '';
process['stdin'][a0_0x3f291b(0xac)]();
process['stdin'][a0_0x3f291b(0xae)]('utf8');
process[a0_0x3f291b(0xb2)]['on'](a0_0x3f291b(0xa3), function (chunk) {
    input += chunk;
});
process['stdin']['on'](a0_0x3f291b(0xb0), function () {
    main();
});
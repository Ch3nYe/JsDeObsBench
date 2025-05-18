var a0_0x3f7851 = a0_0x34ae;
(function (stringArrayFunction, comparisonValue) {
    var _0x2863e1 = a0_0x34ae;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2863e1(0xd0)) / 0x1 + parseInt(_0x2863e1(0xcf)) / 0x2 + parseInt(_0x2863e1(0xd6)) / 0x3 + parseInt(_0x2863e1(0xcb)) / 0x4 * (-parseInt(_0x2863e1(0xda)) / 0x5) + -parseInt(_0x2863e1(0xca)) / 0x6 + -parseInt(_0x2863e1(0xc9)) / 0x7 * (-parseInt(_0x2863e1(0xce)) / 0x8) + -parseInt(_0x2863e1(0xd3)) / 0x9 * (-parseInt(_0x2863e1(0xcc)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ec3, 0xa0239));
var input = require('fs')[a0_0x3f7851(0xdb)](a0_0x3f7851(0xd5), a0_0x3f7851(0xd7))[a0_0x3f7851(0xd1)]();
function a0_0x34ae(tFCTst, key) {
    var stringArray = a0_0x2ec3();
    a0_0x34ae = function (index, key) {
        index = index - 0xc9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x34ae(tFCTst, key);
}
function a0_0x2ec3() {
    var _0x3bfa86 = [
        'log',
        '2021031CNkLaK',
        'filter',
        '/dev/stdin',
        '2461542empTed',
        'utf8',
        'length',
        'shift',
        '25kEoaRR',
        'readFileSync',
        '0\x200',
        '875SRrpFX',
        '935862oqxxgf',
        '747700DhCbYy',
        '10XGTeQO',
        'split',
        '25320UQVmJm',
        '1041880HYauJe',
        '215107qgWZXB',
        'trim'
    ];
    a0_0x2ec3 = function () {
        return _0x3bfa86;
    };
    return a0_0x2ec3();
}
var lines = input[a0_0x3f7851(0xcd)]('\x0a');
while (lines['length'] > 0x0) {
    var path = [];
    var line;
    while ((line = lines[a0_0x3f7851(0xd9)]()) != a0_0x3f7851(0xdc)) {
        var nums = line[a0_0x3f7851(0xcd)]('\x20');
        var from = +nums[0x0];
        var to = +nums[0x1];
        path[from] = (path[from] || 0x0) + 0x1;
        path[to] = (path[to] || 0x0) + 0x1;
    }
    var odds = path[a0_0x3f7851(0xd4)](function (n) {
        return n % 0x2 == 0x1;
    });
    if (path[0x1] % 0x2 == 0x1 && path[0x2] % 0x2 == 0x1 && odds[a0_0x3f7851(0xd8)] > 0x2)
        console[a0_0x3f7851(0xd2)]('NG');
    else
        console[a0_0x3f7851(0xd2)]('OK');
}
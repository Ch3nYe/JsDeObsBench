function a0_0x3e93(fznMDu, key) {
    var stringArray = a0_0x14e8();
    a0_0x3e93 = function (index, key) {
        index = index - 0x15f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e93(fznMDu, key);
}
var a0_0x1331d2 = a0_0x3e93;
function a0_0x14e8() {
    var _0x3a94aa = [
        '/dev/stdin',
        '444564ypIjjx',
        'setEncoding',
        'split',
        '2IUXPnC',
        '7760159hTfKbo',
        '438258NkKHhY',
        '91436AlGUit',
        'log',
        '8TuMSyO',
        '1412890vZjQoG',
        '3775604LLPliL',
        '18TyGEAL',
        'utf8',
        '4595faCjXo',
        'stdin',
        'initial_answer',
        '1374TyQmbm'
    ];
    a0_0x14e8 = function () {
        return _0x3a94aa;
    };
    return a0_0x14e8();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x22d332 = a0_0x3e93;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x22d332(0x166)) / 0x1 * (parseInt(_0x22d332(0x169)) / 0x2) + parseInt(_0x22d332(0x168)) / 0x3 + -parseInt(_0x22d332(0x163)) / 0x4 + parseInt(_0x22d332(0x170)) / 0x5 * (parseInt(_0x22d332(0x161)) / 0x6) + parseInt(_0x22d332(0x16d)) / 0x7 * (parseInt(_0x22d332(0x16b)) / 0x8) + -parseInt(_0x22d332(0x16e)) / 0x9 * (-parseInt(_0x22d332(0x16c)) / 0xa) + -parseInt(_0x22d332(0x167)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x14e8, 0x42069));
process[a0_0x1331d2(0x15f)]['resume']();
process[a0_0x1331d2(0x15f)][a0_0x1331d2(0x164)]('utf8');
function Main(input) {
    var _0x260f80 = a0_0x1331d2;
    var arg = input['split']('\x0a');
    var line0 = arg[0x0]['split']('\x20');
    var line1 = arg[0x1][_0x260f80(0x165)]('\x20');
    var line2 = arg[0x2]['split']('\x20');
    var line3 = arg[0x3]['split']('\x20');
    var input1 = Number(line0[0x0]);
    var input2 = Number(line1[0x0]);
    var input3 = Number(line2[0x0]);
    var input4 = Number(line3[0x0]);
    var ans = _0x260f80(0x160);
    if (input1 < input2)
        console[_0x260f80(0x16a)](input3 * input1);
    else
        console[_0x260f80(0x16a)](input3 * input2 + (input1 - input2) * input4);
}
Main(require('fs')['readFileSync'](a0_0x1331d2(0x162), a0_0x1331d2(0x16f)));
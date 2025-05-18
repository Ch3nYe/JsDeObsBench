function a0_0x193c() {
    var _0x3e3024 = [
        'split',
        '1577406ttEszR',
        '33787CuooYv',
        '17912fTBXZR',
        'log',
        '30OdQKdA',
        '53000RMmxVx',
        '68750zDkXCS',
        'indexOf',
        '10mZPnpV',
        '407sDMzwv',
        '32jjZClb',
        '16356fDrGAk',
        'splice',
        '693wFkltH',
        '1320ORqrzM',
        '/dev/stdin',
        '1425592RiPVXt',
        'utf8',
        'length'
    ];
    a0_0x193c = function () {
        return _0x3e3024;
    };
    return a0_0x193c();
}
var a0_0xe0ea4e = a0_0x5096;
(function (stringArrayFunction, comparisonValue) {
    var _0xfdce18 = a0_0x5096;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0xfdce18(0xa6)) / 0x1 * (parseInt(_0xfdce18(0xb2)) / 0x2) + parseInt(_0xfdce18(0xb0)) / 0x3 + -parseInt(_0xfdce18(0xa7)) / 0x4 * (parseInt(_0xfdce18(0xa4)) / 0x5) + -parseInt(_0xfdce18(0xa0)) / 0x6 * (-parseInt(_0xfdce18(0xac)) / 0x7) + -parseInt(_0xfdce18(0xa1)) / 0x8 * (parseInt(_0xfdce18(0xa9)) / 0x9) + -parseInt(_0xfdce18(0xa2)) / 0xa * (parseInt(_0xfdce18(0xa5)) / 0xb) + parseInt(_0xfdce18(0xaa)) / 0xc * (-parseInt(_0xfdce18(0xb1)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x193c, 0xbc80a));
function a0_0x5096(MucBrx, key) {
    var stringArray = a0_0x193c();
    a0_0x5096 = function (index, key) {
        index = index - 0xa0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5096(MucBrx, key);
}
function Main(input) {
    var _0x38671a = a0_0x5096;
    var lines = input['split']('\x0a');
    var titles = lines['map'](l => l[_0x38671a(0xaf)]('\x20')[0x0])[_0x38671a(0xa8)](0x1, lines[_0x38671a(0xae)] - 0x2);
    var sleptAt = titles[_0x38671a(0xa3)](lines[lines[_0x38671a(0xae)] - 0x1]);
    var sum = 0x0;
    for (var i = sleptAt + 0x2; i < lines[_0x38671a(0xae)] - 0x1; i++) {
        sum += Number(lines[i][_0x38671a(0xaf)]('\x20')[0x1]);
    }
    console[_0x38671a(0xb3)](sum);
}
Main(require('fs')['readFileSync'](a0_0xe0ea4e(0xab), a0_0xe0ea4e(0xad)));
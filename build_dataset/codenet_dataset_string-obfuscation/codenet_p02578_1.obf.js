function a0_0x34ab(wvKRRv, key) {
    var stringArray = a0_0x2ee5();
    a0_0x34ab = function (index, key) {
        index = index - 0x163;
        var value = stringArray[index];
        return value;
    };
    return a0_0x34ab(wvKRRv, key);
}
var a0_0x396c55 = a0_0x34ab;
(function (stringArrayFunction, comparisonValue) {
    var _0x580eb4 = a0_0x34ab;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x580eb4(0x175)) / 0x1 + -parseInt(_0x580eb4(0x164)) / 0x2 + parseInt(_0x580eb4(0x169)) / 0x3 + parseInt(_0x580eb4(0x168)) / 0x4 * (parseInt(_0x580eb4(0x171)) / 0x5) + -parseInt(_0x580eb4(0x163)) / 0x6 * (-parseInt(_0x580eb4(0x166)) / 0x7) + -parseInt(_0x580eb4(0x174)) / 0x8 * (parseInt(_0x580eb4(0x177)) / 0x9) + parseInt(_0x580eb4(0x172)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ee5, 0x21259));
process[a0_0x396c55(0x16c)][a0_0x396c55(0x173)]();
function a0_0x2ee5() {
    var _0x1ce26 = [
        'split',
        'utf8',
        'push',
        '10zBSWKb',
        '1437330VhGRoS',
        'resume',
        '130760WBpRJU',
        '6223nkfadS',
        'readline',
        '108pYJSIE',
        '796494UKtEaE',
        '494614JzgOUr',
        'max',
        '7SdNEND',
        'stdout',
        '394828PKhRck',
        '334629IGXSme',
        'log',
        'line',
        'stdin',
        'close'
    ];
    a0_0x2ee5 = function () {
        return _0x1ce26;
    };
    return a0_0x2ee5();
}
process[a0_0x396c55(0x16c)]['setEncoding'](a0_0x396c55(0x16f));
var lines = [];
var reader = require(a0_0x396c55(0x176))['createInterface']({
    'input': process[a0_0x396c55(0x16c)],
    'output': process[a0_0x396c55(0x167)]
});
reader['on'](a0_0x396c55(0x16b), line => {
    var _0x56faaa = a0_0x396c55;
    lines[_0x56faaa(0x170)](line);
});
reader['on'](a0_0x396c55(0x16d), () => {
    var _0x41ef96 = a0_0x396c55;
    var N = parseInt(lines[0x0]);
    var sum = 0x0;
    var MaxNum = 0x0;
    for (var i = 0x0; i < N; i++) {
        var Ai = parseInt(lines[0x1][_0x41ef96(0x16e)]('\x20')[i]);
        MaxNum = Math[_0x41ef96(0x165)](MaxNum, Ai);
        sum += MaxNum - Ai;
    }
    console[_0x41ef96(0x16a)](sum);
});
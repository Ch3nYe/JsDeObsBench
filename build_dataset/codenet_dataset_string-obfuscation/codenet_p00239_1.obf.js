function a0_0x5671(wnZogZ, key) {
    var stringArray = a0_0x33d5();
    a0_0x5671 = function (index, key) {
        index = index - 0x1bb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5671(wnZogZ, key);
}
var a0_0x4e85d6 = a0_0x5671;
(function (stringArrayFunction, comparisonValue) {
    var _0x16fbf2 = a0_0x5671;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x16fbf2(0x1c8)) / 0x1 + parseInt(_0x16fbf2(0x1c4)) / 0x2 + parseInt(_0x16fbf2(0x1bd)) / 0x3 + -parseInt(_0x16fbf2(0x1c7)) / 0x4 + -parseInt(_0x16fbf2(0x1c3)) / 0x5 + -parseInt(_0x16fbf2(0x1c6)) / 0x6 + parseInt(_0x16fbf2(0x1c9)) / 0x7 * (parseInt(_0x16fbf2(0x1c1)) / 0x8);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x33d5, 0x7ddb4));
function a0_0x33d5() {
    var _0x16b49e = [
        '35LRixxX',
        'utf8',
        'join',
        '/dev/stdin',
        'trim',
        'shift',
        '1201713jtHaYt',
        'split',
        'push',
        'log',
        '2225184kPqeCH',
        'forEach',
        '2750005HMRwCc',
        '1430258cQCqPc',
        'length',
        '2781876OqRxhk',
        '3435140DXAcVd',
        '118500NsCsIw'
    ];
    a0_0x33d5 = function () {
        return _0x16b49e;
    };
    return a0_0x33d5();
}
var input = require('fs')['readFileSync'](a0_0x4e85d6(0x1cc), a0_0x4e85d6(0x1ca));
var Arr = input[a0_0x4e85d6(0x1bb)]()[a0_0x4e85d6(0x1be)]('\x0a');
while (!![]) {
    var N = Arr[a0_0x4e85d6(0x1bc)]() - 0x0;
    if (N == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < N; i++) {
        var ipqr = Arr[a0_0x4e85d6(0x1bc)]()[a0_0x4e85d6(0x1be)]('\x20')['map'](Number);
        arr[a0_0x4e85d6(0x1bf)](ipqr);
    }
    var PQRC = Arr[a0_0x4e85d6(0x1bc)]()['split']('\x20')['map'](Number);
    var result = [];
    arr[a0_0x4e85d6(0x1c2)](function (v) {
        var bad = 0x0;
        if (PQRC[0x0] < v[0x1])
            bad++;
        if (PQRC[0x1] < v[0x2])
            bad++;
        if (PQRC[0x2] < v[0x3])
            bad++;
        if (PQRC[0x3] < 0x4 * (v[0x1] + v[0x3]) + 0x9 * v[0x2])
            bad++;
        if (bad == 0x0)
            result['push'](v[0x0]);
    });
    console[a0_0x4e85d6(0x1c0)](result[a0_0x4e85d6(0x1c5)] == 0x0 ? 'NA' : result[a0_0x4e85d6(0x1cb)]('\x0a'));
}
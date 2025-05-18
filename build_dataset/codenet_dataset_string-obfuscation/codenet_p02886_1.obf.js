var a0_0x17b4ae = a0_0x2304;
(function (stringArrayFunction, comparisonValue) {
    var _0x4c720b = a0_0x2304;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4c720b(0x142)) / 0x1 * (-parseInt(_0x4c720b(0x14d)) / 0x2) + -parseInt(_0x4c720b(0x145)) / 0x3 + -parseInt(_0x4c720b(0x149)) / 0x4 + parseInt(_0x4c720b(0x140)) / 0x5 * (-parseInt(_0x4c720b(0x14e)) / 0x6) + parseInt(_0x4c720b(0x14c)) / 0x7 * (parseInt(_0x4c720b(0x146)) / 0x8) + -parseInt(_0x4c720b(0x148)) / 0x9 * (-parseInt(_0x4c720b(0x14b)) / 0xa) + parseInt(_0x4c720b(0x141)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2e13, 0x48d26));
function Main(input) {
    var _0x3db11b = a0_0x2304;
    var input = input[_0x3db11b(0x147)]('\x0a');
    const n = Number(input[0x0]);
    const ocps = input[0x1][_0x3db11b(0x147)]('\x20')['map'](ocp => Number(ocp));
    var r = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = i + 0x1; j < n; j++) {
            r += ocps[i] * ocps[j];
        }
    }
    console['log'](r);
}
Main(require('fs')[a0_0x17b4ae(0x143)](a0_0x17b4ae(0x14a), a0_0x17b4ae(0x144)));
function a0_0x2304(HpDOaz, key) {
    var stringArray = a0_0x2e13();
    a0_0x2304 = function (index, key) {
        index = index - 0x140;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2304(HpDOaz, key);
}
function a0_0x2e13() {
    var _0x70b35d = [
        '/dev/stdin',
        '90ubjgYW',
        '7ywJSax',
        '4vwNEDf',
        '12TPOMef',
        '860035jLAEil',
        '11904640hTLiuO',
        '28546xWRCoq',
        'readFileSync',
        'utf8',
        '1404222McpydX',
        '2068504SczjHi',
        'split',
        '411219oiAudR',
        '2338256fNSXNA'
    ];
    a0_0x2e13 = function () {
        return _0x70b35d;
    };
    return a0_0x2e13();
}
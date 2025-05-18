var a0_0x2922d1 = a0_0x5cfe;
(function (stringArrayFunction, comparisonValue) {
    var _0x3e4797 = a0_0x5cfe;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3e4797(0x1e0)) / 0x1 * (parseInt(_0x3e4797(0x1e8)) / 0x2) + -parseInt(_0x3e4797(0x1e9)) / 0x3 + -parseInt(_0x3e4797(0x1e3)) / 0x4 + -parseInt(_0x3e4797(0x1df)) / 0x5 * (parseInt(_0x3e4797(0x1ec)) / 0x6) + parseInt(_0x3e4797(0x1e4)) / 0x7 * (parseInt(_0x3e4797(0x1dd)) / 0x8) + -parseInt(_0x3e4797(0x1ea)) / 0x9 * (-parseInt(_0x3e4797(0x1de)) / 0xa) + parseInt(_0x3e4797(0x1eb)) / 0xb * (parseInt(_0x3e4797(0x1e5)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2d9a, 0xf2d3d));
var input = '';
process[a0_0x2922d1(0x1e1)]['resume']();
function a0_0x5cfe(KnyMcq, key) {
    var stringArray = a0_0x2d9a();
    a0_0x5cfe = function (index, key) {
        index = index - 0x1dc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5cfe(KnyMcq, key);
}
process[a0_0x2922d1(0x1e1)][a0_0x2922d1(0x1e7)](a0_0x2922d1(0x1e2));
function a0_0x2d9a() {
    var _0x337ee0 = [
        '535242OukmZY',
        'Case\x20',
        '312IatnYs',
        '6624680bRcTvp',
        '40qyvFUd',
        '2YfCRSO',
        'stdin',
        'utf8',
        '5263904asGfal',
        '118391cKNstS',
        '84GyMxuM',
        'split',
        'setEncoding',
        '1105528zxRpMP',
        '5035812hBfgys',
        '18ZLvmAC',
        '2534378btcKjU'
    ];
    a0_0x2d9a = function () {
        return _0x337ee0;
    };
    return a0_0x2d9a();
}
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process[a0_0x2922d1(0x1e1)]['on']('end', function () {
    var _0x254630 = a0_0x2922d1;
    var nums = input[_0x254630(0x1e6)]('\x0a');
    var output = '';
    for (var i = 0x0; i < nums['length']; i++) {
        nums[i] = Number(nums[i]);
        if (nums[i] == 0x0) {
            break;
        }
        output += _0x254630(0x1dc) + (i + 0x1) + ':\x20' + nums[i] + '\x0a';
    }
    console['log'](output);
});
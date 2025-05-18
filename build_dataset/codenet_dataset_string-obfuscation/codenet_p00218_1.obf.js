var a0_0x4090f9 = a0_0x4396;
(function (stringArrayFunction, comparisonValue) {
    var _0x1c2142 = a0_0x4396;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1c2142(0x163)) / 0x1 + -parseInt(_0x1c2142(0x16f)) / 0x2 * (-parseInt(_0x1c2142(0x160)) / 0x3) + -parseInt(_0x1c2142(0x167)) / 0x4 * (parseInt(_0x1c2142(0x16c)) / 0x5) + parseInt(_0x1c2142(0x170)) / 0x6 * (-parseInt(_0x1c2142(0x166)) / 0x7) + parseInt(_0x1c2142(0x161)) / 0x8 + -parseInt(_0x1c2142(0x168)) / 0x9 * (parseInt(_0x1c2142(0x162)) / 0xa) + -parseInt(_0x1c2142(0x164)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3936, 0xb221d));
function a0_0x4396(FaqKyf, key) {
    var stringArray = a0_0x3936();
    a0_0x4396 = function (index, key) {
        index = index - 0x15f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4396(FaqKyf, key);
}
process['stdin']['resume']();
process['stdin'][a0_0x4090f9(0x16b)](a0_0x4090f9(0x165));
function a0_0x3936() {
    var _0x55439c = [
        'utf8',
        '7amPozP',
        '43748kyqEyn',
        '327213bnlWgM',
        'stdin',
        'data',
        'setEncoding',
        '30YRqkwm',
        'log',
        'split',
        '14506gJSzZw',
        '6552402fbcDcb',
        'end',
        'map',
        '114mFSPxS',
        '7157744VmWxdP',
        '140MGiCSR',
        '1340804uCZFQs',
        '1263020UeMRtA'
    ];
    a0_0x3936 = function () {
        return _0x55439c;
    };
    return a0_0x3936();
}
var input = '';
process[a0_0x4090f9(0x169)]['on'](a0_0x4090f9(0x16a), function (chunk) {
    input += chunk;
});
process[a0_0x4090f9(0x169)]['on'](a0_0x4090f9(0x171), function () {
    var _0x4c4858 = a0_0x4090f9;
    var lines = input[_0x4c4858(0x16e)]('\x0a');
    var l = 0x0;
    while (!![]) {
        var n = Number(lines[l++]);
        if (n === 0x0) {
            break;
        }
        for (var i = 0x0; i < n; i++) {
            var values = lines[l++][_0x4c4858(0x16e)]('\x20')[_0x4c4858(0x15f)](Number);
            var pm = values[0x0];
            var pe = values[0x1];
            var pj = values[0x2];
            var ans = 'C';
            if (pm === 0x64 || pe === 0x64 || pj === 0x64) {
                ans = 'A';
            } else if ((pm + pe) / 0x2 >= 0x5a) {
                ans = 'A';
            } else {
                var average = (pm + pe + pj) / 0x3;
                if (average >= 0x50) {
                    ans = 'A';
                } else if (average >= 0x46) {
                    ans = 'B';
                } else if (average >= 0x32 && (pm >= 0x50 || pe >= 0x50)) {
                    ans = 'B';
                }
            }
            console[_0x4c4858(0x16d)](ans);
        }
    }
});
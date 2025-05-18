var a0_0x50f407 = a0_0x4b1a;
(function (stringArrayFunction, comparisonValue) {
    var _0x53dd65 = a0_0x4b1a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x53dd65(0x188)) / 0x1 + -parseInt(_0x53dd65(0x189)) / 0x2 * (-parseInt(_0x53dd65(0x18a)) / 0x3) + -parseInt(_0x53dd65(0x193)) / 0x4 * (-parseInt(_0x53dd65(0x192)) / 0x5) + -parseInt(_0x53dd65(0x199)) / 0x6 * (-parseInt(_0x53dd65(0x195)) / 0x7) + parseInt(_0x53dd65(0x18e)) / 0x8 * (parseInt(_0x53dd65(0x198)) / 0x9) + parseInt(_0x53dd65(0x196)) / 0xa + -parseInt(_0x53dd65(0x18d)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8b75, 0xd8197));
function a0_0x4b1a(XtwCYN, key) {
    var stringArray = a0_0x8b75();
    a0_0x4b1a = function (index, key) {
        index = index - 0x188;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b1a(XtwCYN, key);
}
var lines = [];
var readline = require(a0_0x50f407(0x19c));
function a0_0x8b75() {
    var _0x25f137 = [
        '8nAfKrt',
        'push',
        'log',
        'sort',
        '5RmNhDU',
        '123792lsSWVn',
        'map',
        '1435saPlVH',
        '14384260SARuQt',
        'shift',
        '1062333WGCpxz',
        '43854MoAVKU',
        'line',
        'stdin',
        'readline',
        '1485630PROSUz',
        '4DwPbMr',
        '636051gJEtIB',
        'createInterface',
        'split',
        '45213047CKqXIE'
    ];
    a0_0x8b75 = function () {
        return _0x25f137;
    };
    return a0_0x8b75();
}
var rl = readline[a0_0x50f407(0x18b)]({
    'input': process[a0_0x50f407(0x19b)],
    'output': process['stdout']
});
rl['on'](a0_0x50f407(0x19a), x => {
    var _0x40e0f4 = a0_0x50f407;
    lines[_0x40e0f4(0x18f)](x);
});
var A;
rl['on']('close', () => {
    var _0x52b3e6 = a0_0x50f407;
    var N = Number(lines[0x0]['split']('\x20')[0x0]);
    var M = Number(lines[0x0][_0x52b3e6(0x18c)]('\x20')[0x1]);
    A = lines[0x1][_0x52b3e6(0x18c)]('\x20')[_0x52b3e6(0x194)](i => Number(i));
    lines[_0x52b3e6(0x197)]();
    lines[_0x52b3e6(0x197)]();
    var BC = lines[_0x52b3e6(0x194)](i => i[_0x52b3e6(0x18c)]('\x20')[_0x52b3e6(0x194)](i => Number(i)));
    A[_0x52b3e6(0x191)]((a, b) => a - b);
    BC['sort']((a, b) => b[0x1] - a[0x1]);
    var k = 0x0;
    var ans = 0x0;
    for (var i = 0x0; i < M; i++) {
        var b = BC[i][0x0];
        var c = BC[i][0x1];
        var cnt = 0x1;
        for (var j = k; j < N; j++) {
            if (b < cnt) {
                k = j;
                break;
            }
            if (A[j] < c) {
                ans += c;
            } else {
                for (var x = j; x < N; x++) {
                    ans += A[x];
                }
                console['log'](ans);
                return 0x0;
            }
            cnt++;
        }
    }
    for (var x = j; x < N; x++) {
        ans += A[x];
    }
    console[_0x52b3e6(0x190)](ans);
});
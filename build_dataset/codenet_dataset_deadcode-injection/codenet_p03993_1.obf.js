function a0_0x499b(UWMLYg, key) {
    var stringArray = a0_0xe049();
    a0_0x499b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x499b(UWMLYg, key);
}
var a0_0x4ca206 = a0_0x499b;
var lines = [];
var result = 0x0;
var readline = require(a0_0x4ca206(0x0));
var rl = readline[a0_0x4ca206(0x1)]({
    'input': process[a0_0x4ca206(0x2)],
    'output': process[a0_0x4ca206(0x3)]
});
function a0_0xe049() {
    var _0x5d88da = [
        'readline',
        'createInterface',
        'stdin',
        'stdout',
        'push',
        'close',
        'map'
    ];
    a0_0xe049 = function () {
        return _0x5d88da;
    };
    return a0_0xe049();
}
rl['on']('line', function (x) {
    var _0x3e2f60 = a0_0x499b;
    lines[_0x3e2f60(0x4)](x);
});
rl['on'](a0_0x4ca206(0x5), function () {
    var _0x4fd6aa = a0_0x499b;
    var N = Number(lines[0x0]);
    var a = lines[0x1]['split']('\x20')[_0x4fd6aa(0x6)](value => Number(value));
    for (var i = 0x0; i < N; i++) {
        if (i < a[i]) {
            if (a[a[i] - 0x1] === i + 0x1) {
                result++;
            }
        }
    }
    console['log'](result);
});
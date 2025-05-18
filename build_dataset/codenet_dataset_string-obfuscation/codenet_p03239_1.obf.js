function a0_0x512d() {
    var _0x98a8d4 = [
        '614428BruOSj',
        'split',
        'stdin',
        'log',
        '2821zvVlmy',
        '64834yIHIzC',
        '562836aVwgKf',
        '7605064PWgNbV',
        '2712vEYmkA',
        'min',
        '163989PElMpl',
        'close',
        'createInterface',
        '5uxoddt',
        '3002DYblTQ',
        'map',
        '2080Abcpqk',
        '3hXaiLy',
        'TLE',
        'readline'
    ];
    a0_0x512d = function () {
        return _0x98a8d4;
    };
    return a0_0x512d();
}
var a0_0x5e23b7 = a0_0x10fd;
(function (stringArrayFunction, comparisonValue) {
    var _0x50f273 = a0_0x10fd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x50f273(0x97)) / 0x1 * (-parseInt(_0x50f273(0x94)) / 0x2) + parseInt(_0x50f273(0x8c)) / 0x3 + -parseInt(_0x50f273(0x9a)) / 0x4 * (parseInt(_0x50f273(0x93)) / 0x5) + -parseInt(_0x50f273(0x8e)) / 0x6 * (-parseInt(_0x50f273(0x8a)) / 0x7) + -parseInt(_0x50f273(0x8d)) / 0x8 + -parseInt(_0x50f273(0x90)) / 0x9 + parseInt(_0x50f273(0x96)) / 0xa * (parseInt(_0x50f273(0x8b)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x512d, 0x74a42));
var lines = [];
function a0_0x10fd(XSAVyi, key) {
    var stringArray = a0_0x512d();
    a0_0x10fd = function (index, key) {
        index = index - 0x8a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x10fd(XSAVyi, key);
}
var result = Infinity;
var readline = require(a0_0x5e23b7(0x99));
var rl = readline[a0_0x5e23b7(0x92)]({
    'input': process[a0_0x5e23b7(0x9c)],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on'](a0_0x5e23b7(0x91), function () {
    var _0x2b6286 = a0_0x5e23b7;
    var N = Number(lines[0x0][_0x2b6286(0x9b)]('\x20')[0x0]);
    var T = Number(lines[0x0][_0x2b6286(0x9b)]('\x20')[0x1]);
    lines['shift']();
    var array = lines['map'](value => value[_0x2b6286(0x9b)]('\x20')[_0x2b6286(0x95)](value => Number(value)));
    for (var i of array) {
        if (i[0x1] <= T) {
            result = Math[_0x2b6286(0x8f)](result, i[0x0]);
        }
    }
    result !== Infinity ? console[_0x2b6286(0x9d)](result) : console['log'](_0x2b6286(0x98));
});
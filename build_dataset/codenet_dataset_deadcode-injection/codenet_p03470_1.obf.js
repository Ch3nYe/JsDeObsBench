var a0_0x11df72 = a0_0x3eed;
var lines = [];
function a0_0x3030() {
    var _0x23cb34 = [
        'readline',
        'createInterface',
        'stdin',
        'stdout',
        'line',
        'push',
        'close',
        'shift',
        'map',
        'filter',
        'length'
    ];
    a0_0x3030 = function () {
        return _0x23cb34;
    };
    return a0_0x3030();
}
function a0_0x3eed(rNoxGx, key) {
    var stringArray = a0_0x3030();
    a0_0x3eed = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3eed(rNoxGx, key);
}
var readline = require(a0_0x11df72(0x0));
var rl = readline[a0_0x11df72(0x1)]({
    'input': process[a0_0x11df72(0x2)],
    'output': process[a0_0x11df72(0x3)]
});
rl['on'](a0_0x11df72(0x4), function (x) {
    var _0x34310a = a0_0x3eed;
    lines[_0x34310a(0x5)](x);
});
rl['on'](a0_0x11df72(0x6), function () {
    var _0x966b27 = a0_0x3eed;
    var N = Number(lines[0x0]);
    lines[_0x966b27(0x7)]();
    var D = lines[_0x966b27(0x8)](i => Number(i));
    D = D[_0x966b27(0x9)]((value, index, array) => {
        return array['indexOf'](value) === index;
    });
    console['log'](D[_0x966b27(0xa)]);
});
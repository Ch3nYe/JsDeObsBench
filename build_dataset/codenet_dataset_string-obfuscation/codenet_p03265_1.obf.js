var a0_0x2e78ea = a0_0xf15d;
(function (stringArrayFunction, comparisonValue) {
    var _0x375296 = a0_0xf15d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x375296(0x118)) / 0x1 * (parseInt(_0x375296(0x109)) / 0x2) + -parseInt(_0x375296(0x10b)) / 0x3 + -parseInt(_0x375296(0x106)) / 0x4 + -parseInt(_0x375296(0x117)) / 0x5 + parseInt(_0x375296(0x10a)) / 0x6 * (-parseInt(_0x375296(0x107)) / 0x7) + -parseInt(_0x375296(0x10d)) / 0x8 + parseInt(_0x375296(0x10c)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2fd1, 0xafce9));
process['stdin']['resume']();
function a0_0xf15d(zNFLad, key) {
    var stringArray = a0_0x2fd1();
    a0_0xf15d = function (index, key) {
        index = index - 0x106;
        var value = stringArray[index];
        return value;
    };
    return a0_0xf15d(zNFLad, key);
}
process[a0_0x2e78ea(0x113)][a0_0x2e78ea(0x115)](a0_0x2e78ea(0x119));
var lines = [];
var reader = require(a0_0x2e78ea(0x10e))[a0_0x2e78ea(0x110)]({
    'input': process[a0_0x2e78ea(0x113)],
    'output': process[a0_0x2e78ea(0x10f)]
});
reader['on'](a0_0x2e78ea(0x116), line => {
    var _0x2c2e66 = a0_0x2e78ea;
    lines[_0x2c2e66(0x114)](line);
});
reader['on'](a0_0x2e78ea(0x112), () => {
    var _0x294183 = a0_0x2e78ea;
    var abcd = lines[0x0][_0x294183(0x11a)]('\x20');
    var one = Number(abcd[0x0]);
    var two = Number(abcd[0x1]);
    var three = Number(abcd[0x2]);
    var four = Number(abcd[0x3]);
    var ans = [];
    ans['push'](three + (two - four));
    ans[_0x294183(0x114)](three + four - one);
    ans['push'](one + two - four);
    ans[_0x294183(0x114)](three + two - one);
    console[_0x294183(0x108)](ans[_0x294183(0x111)]('\x20'));
});
function a0_0x2fd1() {
    var _0x192241 = [
        '2487948PEzVXh',
        '161ICSNVk',
        'log',
        '200726MvwilE',
        '148578vfveFq',
        '2602326JsOzwT',
        '39964770ONqWIc',
        '7939744VXQlzK',
        'readline',
        'stdout',
        'createInterface',
        'join',
        'close',
        'stdin',
        'push',
        'setEncoding',
        'line',
        '4850340iwCNYf',
        '3MuIAyN',
        'utf8',
        'split'
    ];
    a0_0x2fd1 = function () {
        return _0x192241;
    };
    return a0_0x2fd1();
}
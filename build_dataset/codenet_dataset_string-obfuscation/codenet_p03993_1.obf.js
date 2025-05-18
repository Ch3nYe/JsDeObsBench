var a0_0xc5819d = a0_0x3675;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b5a99 = a0_0x3675;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b5a99(0x1fa)) / 0x1 * (-parseInt(_0x5b5a99(0x203)) / 0x2) + -parseInt(_0x5b5a99(0x1f3)) / 0x3 * (-parseInt(_0x5b5a99(0x202)) / 0x4) + parseInt(_0x5b5a99(0x201)) / 0x5 + parseInt(_0x5b5a99(0x1ff)) / 0x6 + -parseInt(_0x5b5a99(0x1fd)) / 0x7 * (parseInt(_0x5b5a99(0x1fe)) / 0x8) + parseInt(_0x5b5a99(0x1fc)) / 0x9 + -parseInt(_0x5b5a99(0x1f2)) / 0xa * (parseInt(_0x5b5a99(0x1f1)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8800, 0x89cb6));
function a0_0x8800() {
    var _0x338017 = [
        '712840trkyqM',
        '136vSZTdB',
        '22HcULWT',
        'stdin',
        '247170qSAzmX',
        '180mACKnS',
        '42774Cdijwq',
        'close',
        'stdout',
        'createInterface',
        'log',
        'line',
        'map',
        '60020nDpxAm',
        'split',
        '851499IFkKeO',
        '6111063tJjNJk',
        '8QbMbgV',
        '2758224icuuUX',
        'readline'
    ];
    a0_0x8800 = function () {
        return _0x338017;
    };
    return a0_0x8800();
}
var lines = [];
function a0_0x3675(BjrYEv, key) {
    var stringArray = a0_0x8800();
    a0_0x3675 = function (index, key) {
        index = index - 0x1f1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3675(BjrYEv, key);
}
var result = 0x0;
var readline = require(a0_0xc5819d(0x200));
var rl = readline[a0_0xc5819d(0x1f6)]({
    'input': process[a0_0xc5819d(0x204)],
    'output': process[a0_0xc5819d(0x1f5)]
});
rl['on'](a0_0xc5819d(0x1f8), function (x) {
    lines['push'](x);
});
rl['on'](a0_0xc5819d(0x1f4), function () {
    var _0x5982bc = a0_0xc5819d;
    var N = Number(lines[0x0]);
    var a = lines[0x1][_0x5982bc(0x1fb)]('\x20')[_0x5982bc(0x1f9)](value => Number(value));
    for (var i = 0x0; i < N; i++) {
        if (i < a[i]) {
            if (a[a[i] - 0x1] === i + 0x1) {
                result++;
            }
        }
    }
    console[_0x5982bc(0x1f7)](result);
});
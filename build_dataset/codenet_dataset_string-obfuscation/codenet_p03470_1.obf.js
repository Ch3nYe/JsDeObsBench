var a0_0x2e4b41 = a0_0x2d48;
(function (stringArrayFunction, comparisonValue) {
    var _0x5ecf23 = a0_0x2d48;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5ecf23(0x1bc)) / 0x1 + -parseInt(_0x5ecf23(0x1c7)) / 0x2 + -parseInt(_0x5ecf23(0x1ce)) / 0x3 + -parseInt(_0x5ecf23(0x1c1)) / 0x4 * (parseInt(_0x5ecf23(0x1cf)) / 0x5) + -parseInt(_0x5ecf23(0x1ca)) / 0x6 + -parseInt(_0x5ecf23(0x1c4)) / 0x7 * (-parseInt(_0x5ecf23(0x1c2)) / 0x8) + parseInt(_0x5ecf23(0x1c6)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c67, 0x7ab54));
var lines = [];
function a0_0x2d48(aLNdgU, key) {
    var stringArray = a0_0x1c67();
    a0_0x2d48 = function (index, key) {
        index = index - 0x1bc;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d48(aLNdgU, key);
}
var readline = require(a0_0x2e4b41(0x1c9));
var rl = readline[a0_0x2e4b41(0x1c5)]({
    'input': process[a0_0x2e4b41(0x1be)],
    'output': process[a0_0x2e4b41(0x1cd)]
});
rl['on'](a0_0x2e4b41(0x1c8), function (x) {
    var _0x596734 = a0_0x2e4b41;
    lines[_0x596734(0x1cb)](x);
});
function a0_0x1c67() {
    var _0x57ad6f = [
        'indexOf',
        'stdout',
        '1955313Ihasof',
        '5mmaNoq',
        '626049sJYQtl',
        'close',
        'stdin',
        'map',
        'shift',
        '3598968SYsejc',
        '1085912yRbyNH',
        'filter',
        '7iQcXuv',
        'createInterface',
        '16037199AIVxqT',
        '844330stwdeD',
        'line',
        'readline',
        '404454HdZhxh',
        'push'
    ];
    a0_0x1c67 = function () {
        return _0x57ad6f;
    };
    return a0_0x1c67();
}
rl['on'](a0_0x2e4b41(0x1bd), function () {
    var _0x5119cc = a0_0x2e4b41;
    var N = Number(lines[0x0]);
    lines[_0x5119cc(0x1c0)]();
    var D = lines[_0x5119cc(0x1bf)](i => Number(i));
    D = D[_0x5119cc(0x1c3)]((value, index, array) => {
        var _0x24fa2b = _0x5119cc;
        return array[_0x24fa2b(0x1cc)](value) === index;
    });
    console['log'](D['length']);
});
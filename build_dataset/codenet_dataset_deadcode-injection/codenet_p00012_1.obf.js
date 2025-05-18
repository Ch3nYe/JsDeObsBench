var a0_0x5899f6 = a0_0x2113;
function area(x1, y1, x2, y2, x3, y3) {
    var _0x33a20a = a0_0x2113;
    var ab = Math[_0x33a20a(0x0)]((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)), bc = Math[_0x33a20a(0x0)]((x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3)), ca = Math[_0x33a20a(0x0)]((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1)), s = 0.5 * (ab + bc + ca), S = Math['sqrt'](s * (s - ab) * (s - bc) * (s - ca));
    return S;
}
function inTriangle(x1, y1, x2, y2, x3, y3, xp, yp) {
    var _0x5cd7a5 = a0_0x2113;
    var abc = area(x1, y1, x2, y2, x3, y3), abp = area(x1, y1, x2, y2, xp, yp), bcp = area(x2, y2, x3, y3, xp, yp), cap = area(x3, y3, x1, y1, xp, yp), sub = abc - (abp + bcp + cap);
    return Math[_0x5cd7a5(0x1)](sub) <= 0.01;
}
function a0_0x3a8e() {
    var _0x4acdba = [
        'sqrt',
        'abs',
        'trim',
        'log',
        'apply',
        'split',
        'map',
        'YES',
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'end'
    ];
    a0_0x3a8e = function () {
        return _0x4acdba;
    };
    return a0_0x3a8e();
}
function a0_0x2113(OqrxjG, key) {
    var stringArray = a0_0x3a8e();
    a0_0x2113 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2113(OqrxjG, key);
}
function main() {
    input['forEach'](function (line) {
        var _0x55e2fe = a0_0x2113;
        if (line[_0x55e2fe(0x2)]() === '')
            return;
        console[_0x55e2fe(0x3)](inTriangle[_0x55e2fe(0x4)](null, line[_0x55e2fe(0x5)]('\x20')[_0x55e2fe(0x6)](parseFloat)) ? _0x55e2fe(0x7) : 'NO');
    });
}
var input = '';
process[a0_0x5899f6(0x8)][a0_0x5899f6(0x9)]();
process[a0_0x5899f6(0x8)][a0_0x5899f6(0xa)](a0_0x5899f6(0xb));
process[a0_0x5899f6(0x8)]['on'](a0_0x5899f6(0xc), function (chunk) {
    input += chunk;
});
process[a0_0x5899f6(0x8)]['on'](a0_0x5899f6(0xd), function () {
    var _0x593426 = a0_0x2113;
    input = input[_0x593426(0x5)]('\x0a');
    main();
});
var a0_0x79331 = a0_0x1622;
function a0_0x330d() {
    var _0x162736 = [
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x330d = function () {
        return _0x162736;
    };
    return a0_0x330d();
}
function a0_0x1622(BMhBvD, key) {
    var stringArray = a0_0x330d();
    a0_0x1622 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1622(BMhBvD, key);
}
function Main(input) {
    var _0x57561f = a0_0x1622;
    input = input[_0x57561f(0x0)]('\x0a');
    var k = 0x0;
    while (0x1) {
        input[k] = input[k]['split']('\x20');
        var m = parseInt(input[k][0x0], 0xa);
        var nmin = parseInt(input[k][0x1], 0xa);
        var nmax = parseInt(input[k++][0x2], 0xa);
        if (m == 0x0 && nmin == 0x0 && nmax == 0x0)
            break;
        var maxg = 0x0, maxn = 0x0;
        var p = [];
        for (var i = 0x0; i < m; i++)
            p[i] = parseInt(input[k++], 0xa);
        for (var i = nmin - 0x1; i < nmax; i++) {
            if (p[i] - p[i + 0x1] >= maxg) {
                maxg = p[i] - p[i + 0x1];
                maxn = i;
            }
        }
        console['log'](maxn + 0x1);
    }
}
Main(require('fs')[a0_0x79331(0x1)](a0_0x79331(0x2), a0_0x79331(0x3)));
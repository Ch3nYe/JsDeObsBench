function a0_0x190c() {
    var _0x3ebedc = [
        'floor',
        'split',
        'slice',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x190c = function () {
        return _0x3ebedc;
    };
    return a0_0x190c();
}
function a0_0x68d9(rsurIY, key) {
    var stringArray = a0_0x190c();
    a0_0x68d9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x68d9(rsurIY, key);
}
var a0_0x812e1a = a0_0x68d9;
function median(l) {
    var _0x526fa6 = a0_0x68d9;
    return l['sort']()[Math[_0x526fa6(0x0)](l['length'] / 0x2)];
}
function Main(input) {
    var _0x5015e7 = a0_0x68d9;
    input = input[_0x5015e7(0x1)]('\x0a');
    N = parseInt(input[0x0]);
    a = input[0x1][_0x5015e7(0x1)]('\x20');
    m = [];
    for (var i = 0x0; i < N; i++) {
        for (var j = i + 0x1; j < N + 0x1; j++) {
            m['push'](median(a[_0x5015e7(0x2)](i, j)));
        }
    }
    console[_0x5015e7(0x3)](median(m));
}
Main(require('fs')[a0_0x812e1a(0x4)](a0_0x812e1a(0x5), 'utf8'));
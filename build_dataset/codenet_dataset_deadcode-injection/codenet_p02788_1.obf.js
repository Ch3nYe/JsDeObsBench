var a0_0x178137 = a0_0x7c00;
function a0_0x7c00(vNOFDF, key) {
    var stringArray = a0_0x4b77();
    a0_0x7c00 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7c00(vNOFDF, key);
}
function main(input) {
    var _0x2c9453 = a0_0x7c00;
    var N = input[0x0][_0x2c9453(0x0)]('\x20')[0x0] - 0x0;
    var D = input[0x0]['split']('\x20')[0x1] - 0x0;
    var A = input[0x0]['split']('\x20')[0x2] - 0x0;
    var list = [];
    for (var i = 0x1; i <= N; i++) {
        list[_0x2c9453(0x1)](input[i][_0x2c9453(0x0)]('\x20')[_0x2c9453(0x2)](v => v - 0x0));
    }
    list = list[_0x2c9453(0x3)]((a, b) => a[0x0] - b[0x0]);
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        var x = list[i];
        if (x[0x1] > 0x0) {
            var time = Math['ceil'](x[0x1] / A);
            ans += time;
            for (var j = i; j < N; j++) {
                var y = list[j];
                if (y[0x0] <= x[0x0] + D * 0x2 + 0x1) {
                    y[0x1] -= A * time;
                } else {
                    break;
                }
            }
        }
    }
    console[_0x2c9453(0x4)](ans);
}
main(require('fs')[a0_0x178137(0x5)]('/dev/stdin', a0_0x178137(0x6))[a0_0x178137(0x0)]('\x0a'));
function a0_0x4b77() {
    var _0x41cd75 = [
        'split',
        'push',
        'map',
        'sort',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x4b77 = function () {
        return _0x41cd75;
    };
    return a0_0x4b77();
}
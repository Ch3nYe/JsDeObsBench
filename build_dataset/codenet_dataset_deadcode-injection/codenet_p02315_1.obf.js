function a0_0x545c(zTHeFu, key) {
    var stringArray = a0_0x5833();
    a0_0x545c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x545c(zTHeFu, key);
}
var a0_0x41e3ba = a0_0x545c;
function Main(input) {
    var _0x2d0170 = a0_0x545c;
    input = input[_0x2d0170(0x0)]('\x0a');
    var p = input[0x0]['split']('\x20')[_0x2d0170(0x1)](Number);
    var max = p[0x1] - 0x0;
    var dp = new Array(p[0x0] + 0x1);
    for (var n = 0x0; n < p[0x0] + 0x1; n++) {
        dp[n] = new Array(max + 0x1)[_0x2d0170(0x2)](0x0);
    }
    for (var i = 0x1; i < input[_0x2d0170(0x3)]; i++) {
        var mem = input[i][_0x2d0170(0x0)]('\x20')[_0x2d0170(0x1)](Number);
        for (var j = 0x0; j <= max; j++) {
            if (j >= mem[0x1])
                dp[i][j] = Math[_0x2d0170(0x4)](dp[i - 0x1][j - mem[0x1]] + mem[0x0], dp[i - 0x1][j]);
            else
                dp[i][j] = dp[i - 0x1][j];
        }
    }
    console[_0x2d0170(0x5)](dp[p[0x0]][max]);
}
Main(require('fs')['readFileSync'](a0_0x41e3ba(0x6), 'utf8')['trim']());
function a0_0x5833() {
    var _0x13946a = [
        'split',
        'map',
        'fill',
        'length',
        'max',
        'log',
        '/dev/stdin'
    ];
    a0_0x5833 = function () {
        return _0x13946a;
    };
    return a0_0x5833();
}
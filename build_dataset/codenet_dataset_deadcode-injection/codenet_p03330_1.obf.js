function a0_0x3b93(yxIYLT, key) {
    var stringArray = a0_0x2641();
    a0_0x3b93 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b93(yxIYLT, key);
}
var a0_0x170200 = a0_0x3b93;
function Main(s) {
    var _0x1c03fe = a0_0x3b93;
    s = s['split']('\x0a');
    s[0x0] = s[0x0][_0x1c03fe(0x0)]('\x20')['map'](a => +a);
    var n = s[0x0][0x0];
    var c = s[0x0][0x1];
    var d = [], a = [];
    for (var i = 0x0; i < c; i++) {
        d[i] = s[i + 0x1][_0x1c03fe(0x0)]('\x20')[_0x1c03fe(0x1)](a => +a);
    }
    for (i = 0x0; i < n; i++) {
        a[i] = s[i + 0x1 + c]['split']('\x20')['map'](a => +a - 0x1);
    }
    var z = Array(0x3)['fill'](0x0)[_0x1c03fe(0x1)](a => Array(c)['fill'](0x0));
    for (i = 0x0; i < n; i++)
        for (var j = 0x0; j < n; j++) {
            var t = (i + j) % 0x3;
            z[t][a[i][j]]++;
        }
    var ans = 0x218711a00;
    for (i = 0x0; i < c; i++) {
        for (j = 0x0; j < c; j++) {
            if (i === j)
                continue;
            for (var k = 0x0; k < c; k++) {
                if (i === k || j === k)
                    continue;
                t = 0x0;
                for (var l = 0x0; l < c; l++) {
                    t += z[0x0][l] * d[l][i];
                    t += z[0x1][l] * d[l][j];
                    t += z[0x2][l] * d[l][k];
                }
                ans = Math[_0x1c03fe(0x2)](ans, t);
            }
        }
    }
    console[_0x1c03fe(0x3)](ans);
}
Main(require('fs')[a0_0x170200(0x4)](a0_0x170200(0x5), 'utf8'));
function a0_0x2641() {
    var _0x40b1c3 = [
        'split',
        'map',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2641 = function () {
        return _0x40b1c3;
    };
    return a0_0x2641();
}
function a0_0x4b2b() {
    var _0xc9b9be = [
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'length',
        'push'
    ];
    a0_0x4b2b = function () {
        return _0xc9b9be;
    };
    return a0_0x4b2b();
}
var a0_0x23ed63 = a0_0x10a4;
function a0_0x10a4(cKmfkc, key) {
    var stringArray = a0_0x4b2b();
    a0_0x10a4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x10a4(cKmfkc, key);
}
var input = require('fs')['readFileSync'](a0_0x23ed63(0x0), a0_0x23ed63(0x1));
var Arr = input['trim']()[a0_0x23ed63(0x2)]('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var m = Arr['shift']() - 0x0;
    var N = [];
    for (var i = 0x0; i < n; i++) {
        N[i] = [];
        for (var j = 0x0; j < n; j++) {
            N[i][j] = Infinity;
            if (i == j)
                N[i][j] = 0x0;
        }
    }
    var arr = [];
    for (var i = 0x0; i < m; i++) {
        var abc = Arr[a0_0x23ed63(0x3)]()['split'](',')['map'](Number);
        var a = abc[0x0];
        var b = abc[0x1];
        var c = abc[0x2] / 0x64;
        N[a][b] = c;
        N[b][a] = c;
    }
    var city = [0x0];
    var cost = 0x0;
    while (!![]) {
        if (city[a0_0x23ed63(0x4)] == n)
            break;
        var min = Infinity;
        var select = -0x1;
        for (var i = 0x0; i < city[a0_0x23ed63(0x4)]; i++) {
            for (var j = 0x0; j < n; j++) {
                if (city['indexOf'](j) != -0x1)
                    continue;
                if (N[city[i]][j] < min) {
                    select = j;
                    min = N[city[i]][j] - 0x1;
                }
            }
        }
        if (select != -0x1) {
            cost += min;
            city[a0_0x23ed63(0x5)](select);
        }
    }
    console['log'](cost);
}
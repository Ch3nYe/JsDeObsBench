var a0_0x53d3b3 = a0_0x2001;
function a0_0x2001(Mnbnrq, key) {
    var stringArray = a0_0x2de5();
    a0_0x2001 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2001(Mnbnrq, key);
}
function bomb(y, x) {
    var dy = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    var dx = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    for (var i = 0x0; i < 0x4; i++) {
        var yy = y + dy[i];
        var xx = x + dx[i];
        if (yy < 0x0 || yy >= 0xc || xx < 0x0 || xx >= 0xc)
            continue;
        if (yx[yy][xx] == 'a') {
            yx[yy][xx] = cnt;
            bomb(yy, xx);
        }
    }
}
var input = require('fs')[a0_0x53d3b3(0x0)]('/dev/stdin', a0_0x53d3b3(0x1));
var Arr = input['trim']()[a0_0x53d3b3(0x2)]('\x0a');
var n = 0x0;
var cnt = 0x0;
function a0_0x2de5() {
    var _0x89b0e2 = [
        'readFileSync',
        'utf8',
        'split',
        'length',
        'replace',
        'log'
    ];
    a0_0x2de5 = function () {
        return _0x89b0e2;
    };
    return a0_0x2de5();
}
var yx = [];
for (var I = 0x0; I < Arr[a0_0x53d3b3(0x3)]; I++) {
    n++;
    var v = Arr[I][a0_0x53d3b3(0x4)](/1/g, 'a');
    var arr = v[a0_0x53d3b3(0x2)]('');
    yx['push'](arr);
    if (n != 0xc)
        continue;
    cnt = 0x0;
    for (var i = 0x0; i < 0xc; i++) {
        for (var j = 0x0; j < 0xc; j++) {
            if (yx[i][j] == 'a') {
                cnt++;
                yx[i][j] = cnt;
                bomb(i, j);
            }
        }
    }
    console[a0_0x53d3b3(0x5)](cnt);
    n = 0x0;
    yx = [];
    I++;
}
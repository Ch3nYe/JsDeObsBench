var a0_0x27148e = a0_0x110e;
function Main(input) {
    var _0x130e3b = a0_0x110e;
    input = input['split']('\x0a');
    var M = input[0x0][_0x130e3b(0x0)]('\x20')[_0x130e3b(0x1)](a => parseInt(a));
    var N = M[0x0];
    M = M[0x1];
    var L = [];
    for (var i = 0x0; i < M; i++) {
        L[i] = input[i + 0x1][_0x130e3b(0x0)]('\x20')[_0x130e3b(0x1)](a => parseInt(a));
    }
    var anc = new Array(N + 0x1)[_0x130e3b(0x2)](0x0);
    var x = new Array(N + 0x1)['fill'](0x0);
    anc[0x0] = anc[0x1] = 0x1;
    var i, j, low = 0x1;
    var ans = 'Yes';
    top:
        while (L[_0x130e3b(0x3)]) {
            i = j = L[_0x130e3b(0x3)];
            while (i--) {
                if (anc[L[i][0x0]] && anc[L[i][0x1]]) {
                    if (x[L[i][0x1]] - x[L[i][0x0]] !== L[i][0x2]) {
                        ans = 'No';
                        break top;
                    } else {
                        L[_0x130e3b(0x4)](i, 0x1);
                        continue;
                    }
                }
                if (anc[L[i][0x0]]) {
                    anc[L[i][0x1]] = 0x1;
                    x[L[i][0x1]] = x[L[i][0x0]] + L[i][0x2];
                    L[_0x130e3b(0x4)](i, 0x1);
                } else if (anc[L[i][0x1]]) {
                    anc[L[i][0x0]] = 0x1;
                    x[L[i][0x0]] = x[L[i][0x1]] - L[i][0x2];
                    L[_0x130e3b(0x4)](i, 0x1);
                }
            }
            if (j === L[_0x130e3b(0x3)]) {
                i = anc[_0x130e3b(0x5)](a => a === 0x0);
                anc[i] = 0x1;
            }
        }
    console['log'](ans);
}
function a0_0x8cfc() {
    var _0x552aa7 = [
        'split',
        'map',
        'fill',
        'length',
        'splice',
        'findIndex',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x8cfc = function () {
        return _0x552aa7;
    };
    return a0_0x8cfc();
}
function a0_0x110e(dPcGSp, key) {
    var stringArray = a0_0x8cfc();
    a0_0x110e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x110e(dPcGSp, key);
}
Main(require('fs')[a0_0x27148e(0x6)](a0_0x27148e(0x7), a0_0x27148e(0x8)));
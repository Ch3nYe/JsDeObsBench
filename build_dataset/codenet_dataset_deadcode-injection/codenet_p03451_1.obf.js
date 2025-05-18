function a0_0x2078() {
    var _0xbd6fa7 = [
        'split',
        'map',
        'length',
        'bkwoq',
        'PQFdb',
        'slice',
        'naVsS',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2078 = function () {
        return _0xbd6fa7;
    };
    return a0_0x2078();
}
var a0_0x4d1a5f = a0_0x3e9f;
function Main(input) {
    var _0x1ae907 = a0_0x3e9f;
    input = input[_0x1ae907(0x0)]('\x0a');
    var a1 = input[0x1][_0x1ae907(0x0)]('\x20')[_0x1ae907(0x1)](e => {
        return parseInt(e);
    });
    var a2 = input[0x2]['split']('\x20')['map'](e => {
        return parseInt(e);
    });
    var j = a1[_0x1ae907(0x2)] - 0x1;
    var m = 0x0, n = a1[_0x1ae907(0x2)] - 0x2;
    var r = 0x0;
    var temp;
    for (var i = j; i >= m; i--) {
        if (_0x1ae907(0x3) !== _0x1ae907(0x4)) {
            temp = sum(a1['slice'](m, i + 0x1)) + sum(a2[_0x1ae907(0x5)](i));
            if (r < temp)
                r = temp;
        } else {
            r += arr[i];
        }
    }
    function sum(arr) {
        var _0x46d127 = a0_0x3e9f;
        var r = 0x0;
        for (var i = 0x0; i < arr['length']; i++) {
            if (_0x46d127(0x6) === 'naVsS') {
                r += arr[i];
            } else {
                return parseInt(e);
            }
        }
        return r;
    }
    console['log'](r);
}
function a0_0x3e9f(nBgpPa, key) {
    var stringArray = a0_0x2078();
    a0_0x3e9f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e9f(nBgpPa, key);
}
Main(require('fs')[a0_0x4d1a5f(0x7)](a0_0x4d1a5f(0x8), a0_0x4d1a5f(0x9)));
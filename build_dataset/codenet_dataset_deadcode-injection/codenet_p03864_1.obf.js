var a0_0x4d5c03 = a0_0x59c9;
function a0_0x59c9(nDIAoY, key) {
    var stringArray = a0_0x4320();
    a0_0x59c9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59c9(nDIAoY, key);
}
function a0_0x4320() {
    var _0x1f86f1 = [
        'trim',
        'split',
        'map',
        'forEach',
        'push',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4320 = function () {
        return _0x1f86f1;
    };
    return a0_0x4320();
}
function Main(input) {
    var _0x3c85a3 = a0_0x59c9;
    input = input[_0x3c85a3(0x0)]()[_0x3c85a3(0x1)]('\x0a')[_0x3c85a3(0x2)](function (x) {
        var _0x3f1532 = a0_0x59c9;
        return x[_0x3f1532(0x1)]('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var x = parseInt(input[0x0][0x1], 0xa);
    var vec_a = input[0x1][_0x3c85a3(0x2)](e => parseInt(e, 0xa));
    var sum = function (arr) {
        var _0x132012 = a0_0x59c9;
        var sum = 0x0;
        arr[_0x132012(0x3)](function (elm) {
            sum += elm;
        });
        return sum;
    };
    var vec_b = [];
    var tmp = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (vec_a[i] >= x - tmp)
            vec_b[_0x3c85a3(0x4)](x - tmp);
        else
            vec_b[_0x3c85a3(0x4)](vec_a[i]);
        tmp = vec_b[i];
    }
    console[_0x3c85a3(0x5)](sum(vec_a) - sum(vec_b));
}
Main(require('fs')[a0_0x4d5c03(0x6)](a0_0x4d5c03(0x7), a0_0x4d5c03(0x8)));
var a0_0x1248bb = a0_0x237c;
function a0_0x2a8f() {
    var _0x5a1f74 = [
        'max',
        'length',
        'trim',
        'split',
        'map',
        'fill',
        'slice',
        'readFileSync',
        'utf8'
    ];
    a0_0x2a8f = function () {
        return _0x5a1f74;
    };
    return a0_0x2a8f();
}
function gcd(arr) {
    var f = (a, b) => b ? f(b, a % b) : a;
    var ans = arr[0x0];
    for (var i = 0x1; i < arr['length']; i++) {
        ans = f(ans, arr[i]);
    }
    return ans;
}
function getExcep(c) {
    var _0x44c188 = a0_0x237c;
    var min = Math['min'](...c);
    var max = Math[_0x44c188(0x0)](...c);
    var mincount = 0x0;
    var maxcount = 0x0;
    var findValue = 0x0;
    for (var i = 0x0; i < c[_0x44c188(0x1)]; i++) {
        if (c[i] === min) {
            mincount++;
        }
    }
    if (mincount === 0x1) {
        findValue = min;
    } else {
        findValue = max;
    }
    for (var i = 0x0; i < c[_0x44c188(0x1)]; i++) {
        if (c[i] === findValue) {
            return i;
        }
    }
}
function main(arg) {
    var _0x6abb12 = a0_0x237c;
    arg = arg[_0x6abb12(0x2)]()[_0x6abb12(0x3)]('\x0a');
    var N = Number(arg[0x0]);
    var A = arg[0x1][_0x6abb12(0x3)]('\x20')[_0x6abb12(0x4)](Number);
    var c = new Array(A['length'])[_0x6abb12(0x5)](0x0);
    var result = 0x0;
    for (var i = 0x0; i < A['length']; i++) {
        var _A = A[_0x6abb12(0x6)]();
        _A['splice'](i, 0x1);
        var n = gcd(_A);
        c[i] = n;
    }
    var idx = getExcep(c);
    A[idx] = A[idx + 0x1];
    console['log'](gcd(A));
}
function a0_0x237c(JZLBBz, key) {
    var stringArray = a0_0x2a8f();
    a0_0x237c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x237c(JZLBBz, key);
}
main(require('fs')[a0_0x1248bb(0x7)]('/dev/stdin', a0_0x1248bb(0x8)));
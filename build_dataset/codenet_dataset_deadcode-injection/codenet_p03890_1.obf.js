var a0_0x4c106d = a0_0x1161;
function a0_0x26aa() {
    var _0x2a72f2 = [
        'split',
        'slice',
        'push',
        'log',
        '/dev/stdin'
    ];
    a0_0x26aa = function () {
        return _0x2a72f2;
    };
    return a0_0x26aa();
}
function Main(input) {
    var _0x9eeea1 = a0_0x1161;
    var data = input[_0x9eeea1(0x0)]('\x0a');
    var n = data[0x0];
    var a = data[_0x9eeea1(0x1)](0x1);
    for (var i = 0x0; i < n; ++i) {
        var b = [];
        for (var j = 0x0; j < a['length']; j += 0x2) {
            if (a[j] > a[j + 0x1]) {
                b['push'](a[j] - a[j + 0x1]);
            } else if (a[j] == a[j + 0x1]) {
                b['push'](a[j]);
            } else {
                b[_0x9eeea1(0x2)](a[j + 0x1] - a[j]);
            }
        }
        a = b;
    }
    console[_0x9eeea1(0x3)](a[0x0]);
}
function a0_0x1161(VmKdSd, key) {
    var stringArray = a0_0x26aa();
    a0_0x1161 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1161(VmKdSd, key);
}
Main(require('fs')['readFileSync'](a0_0x4c106d(0x4), 'utf8'));
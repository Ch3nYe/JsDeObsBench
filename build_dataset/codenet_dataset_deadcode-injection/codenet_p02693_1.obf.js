var a0_0x5267fc = a0_0x2b81;
function a0_0x2b81(QcepKZ, key) {
    var stringArray = a0_0x458c();
    a0_0x2b81 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b81(QcepKZ, key);
}
function Main(input) {
    var _0x2b5fa6 = a0_0x2b81;
    var str = input;
    const n = str[_0x2b5fa6(0x0)]('\x0a');
    var k = Number(n[0x0]);
    var p = n[0x1][_0x2b5fa6(0x0)]('\x20');
    var a = Number(p[0x0]);
    var b = Number(p[0x1]);
    var ans = '';
    for (var i = a; i <= b; i++) {
        if (i % k === 0x0) {
            ans = 'OK';
        }
    }
    if (ans !== 'OK') {
        ans = 'NG';
    }
    console['log'](ans);
}
function a0_0x458c() {
    var _0x31db9 = [
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x458c = function () {
        return _0x31db9;
    };
    return a0_0x458c();
}
Main(require('fs')[a0_0x5267fc(0x1)](a0_0x5267fc(0x2), a0_0x5267fc(0x3)));
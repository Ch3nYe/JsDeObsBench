var a0_0x56e3fe = a0_0x498b;
function main(input) {
    var _0x48c5f9 = a0_0x498b;
    var lines = input['split']('\x0a');
    var line0 = lines[0x0][_0x48c5f9(0x0)]('\x20');
    var n = parseInt(line0[0x0]);
    var a = parseInt(line0[0x1]);
    var b = parseInt(line0[0x2]);
    var x = lines[0x1]['split']('\x20')['map'](t => parseInt(t));
    var ans = 0x0;
    for (var i = 0x0; i < n - 0x1; i++) {
        ans += Math[_0x48c5f9(0x1)](a * (x[i + 0x1] - x[i]), b);
    }
    console['log'](ans);
}
main(require('fs')[a0_0x56e3fe(0x2)](a0_0x56e3fe(0x3), 'utf8'));
function a0_0x498b(JKAnsC, key) {
    var stringArray = a0_0x4e9a();
    a0_0x498b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x498b(JKAnsC, key);
}
function a0_0x4e9a() {
    var _0x1ac690 = [
        'split',
        'min',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4e9a = function () {
        return _0x1ac690;
    };
    return a0_0x4e9a();
}
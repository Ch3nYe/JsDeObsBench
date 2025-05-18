var a0_0x4369dc = a0_0x35ac;
function a0_0x2c98() {
    var _0x4db9d7 = [
        'split',
        'map',
        'slice',
        'sort',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2c98 = function () {
        return _0x4db9d7;
    };
    return a0_0x2c98();
}
function a0_0x35ac(HEmWol, key) {
    var stringArray = a0_0x2c98();
    a0_0x35ac = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x35ac(HEmWol, key);
}
function Main(s) {
    var _0x3d95de = a0_0x35ac;
    var s = s['split']('\x0a');
    var zero = s[0x0][_0x3d95de(0x0)]('\x20')[_0x3d95de(0x1)](e => parseInt(e, 0xa));
    var t = s[_0x3d95de(0x2)](0x1)[_0x3d95de(0x1)](e => parseInt(e, 0xa))[_0x3d95de(0x3)]((a, b) => a - b);
    var cnt = 0x1;
    var c = zero[0x1];
    for (var i = 0x1; i < zero[0x0]; i++) {
        if (t[i - 0x1] <= t[i] && t[i] <= t[i - 0x1] + zero[0x2]) {
            c--;
            if (c === 0x0) {
                cnt++;
                c = zero[0x1];
            }
        } else {
            cnt++;
            c = zero[0x1];
        }
    }
    console[_0x3d95de(0x4)](cnt);
}
Main(require('fs')[a0_0x4369dc(0x5)](a0_0x4369dc(0x6), a0_0x4369dc(0x7)));
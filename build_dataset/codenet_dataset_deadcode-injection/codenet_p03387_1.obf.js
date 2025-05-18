function a0_0x26fc() {
    var _0x784a65 = [
        'split',
        'map',
        'sort',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x26fc = function () {
        return _0x784a65;
    };
    return a0_0x26fc();
}
var a0_0x3800b3 = a0_0x1035;
function Main(s) {
    var _0x1be15e = a0_0x1035;
    var s = s['split']('\x0a')[0x0][_0x1be15e(0x0)]('\x20')[_0x1be15e(0x1)](e => parseInt(e, 0xa))[_0x1be15e(0x2)]((a, b) => b - a);
    var cnt = 0x0;
    if ((s[0x1] - s[0x2]) % 0x2 === 0x0) {
        cnt += s[0x0] - s[0x1];
        s[0x2] += cnt;
        cnt += (s[0x0] - s[0x2]) / 0x2;
    } else {
        s[0x0]++;
        s[0x1]++;
        cnt++;
        cnt += s[0x0] - s[0x1];
        s[0x2] += s[0x0] - s[0x1];
        cnt += (s[0x0] - s[0x2]) / 0x2;
    }
    console['log'](cnt);
}
function a0_0x1035(nWfsAv, key) {
    var stringArray = a0_0x26fc();
    a0_0x1035 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1035(nWfsAv, key);
}
Main(require('fs')[a0_0x3800b3(0x3)](a0_0x3800b3(0x4), 'utf8'));
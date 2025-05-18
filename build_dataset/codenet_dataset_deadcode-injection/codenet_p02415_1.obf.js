var a0_0x486e85 = a0_0x54e6;
function a0_0x46df() {
    var _0x69cdfe = [
        'log',
        'replace',
        'split',
        'match',
        'toUpperCase',
        'toLowerCase',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x46df = function () {
        return _0x69cdfe;
    };
    return a0_0x46df();
}
function a0_0x54e6(iRhvEU, key) {
    var stringArray = a0_0x46df();
    a0_0x54e6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x54e6(iRhvEU, key);
}
(function (input) {
    var _0x10150e = a0_0x54e6;
    console[_0x10150e(0x0)](input[_0x10150e(0x1)](/\n$/, '')[_0x10150e(0x2)]('')['map'](function (e) {
        var _0x2bb73e = a0_0x54e6;
        if (e[_0x2bb73e(0x3)](/[a-z]/)) {
            return e[_0x2bb73e(0x4)]();
        } else if (e[_0x2bb73e(0x3)](/[A-Z]/)) {
            return e[_0x2bb73e(0x5)]();
        }
        return e;
    })[_0x10150e(0x6)](''));
}(require('fs')[a0_0x486e85(0x7)](a0_0x486e85(0x8), a0_0x486e85(0x9))));
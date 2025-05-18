function a0_0xa904() {
    var _0x30fe39 = [
        'replace',
        'split',
        'map',
        'length',
        'shift',
        'toString',
        'reverse',
        'push',
        'pow',
        'join'
    ];
    a0_0xa904 = function () {
        return _0x30fe39;
    };
    return a0_0xa904();
}
function a0_0x53fb(SyXIYC, key) {
    var stringArray = a0_0xa904();
    a0_0x53fb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x53fb(SyXIYC, key);
}
(function (input) {
    var _0x30f649 = a0_0x53fb;
    var p = input[_0x30f649(0x0)](/\n$/, '')[_0x30f649(0x1)]('\x0a')[_0x30f649(0x2)](Number);
    var n = p[_0x30f649(0x3)];
    for (var i = 0x0; i < n; i++) {
        var g = p[_0x30f649(0x4)]();
        var s = [];
        g[_0x30f649(0x5)](0x2)[_0x30f649(0x1)]('')[_0x30f649(0x6)]()['map'](function (e, i) {
            var _0x40e3d2 = a0_0x53fb;
            if (e == 0x1) {
                s[_0x40e3d2(0x7)](Math[_0x40e3d2(0x8)](0x2, i));
            }
        });
        console['log'](s[_0x30f649(0x9)]('\x20'));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
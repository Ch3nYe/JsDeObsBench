function a0_0x2fa3() {
    var _0x36c35c = [
        'readFileSync',
        'stdin',
        'split',
        'newline',
        'forEach',
        'log',
        'IVfRr'
    ];
    a0_0x2fa3 = function () {
        return _0x36c35c;
    };
    return a0_0x2fa3();
}
var a0_0x54511d = a0_0x5f4c;
config = {
    'stdin': '/dev/stdin',
    'newline': '\x0a'
};
function a0_0x5f4c(eDcumr, key) {
    var stringArray = a0_0x2fa3();
    a0_0x5f4c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f4c(eDcumr, key);
}
require('fs')[a0_0x54511d(0x0)](config[a0_0x54511d(0x1)], 'ascii')['trim']()[a0_0x54511d(0x2)](config[a0_0x54511d(0x3)])[a0_0x54511d(0x4)](function (line) {
    var _0x1486bc = a0_0x5f4c;
    var ary = line[_0x1486bc(0x2)]('\x20');
    var a = ary[0x0], b = ary[0x1];
    console[_0x1486bc(0x5)]('%d\x20%d', gcd(a, b), lcm(a, b));
});
function gcd(a, b) {
    var _0x1537c7 = a0_0x5f4c;
    while (a !== b) {
        if ('IVfRr' !== _0x1537c7(0x6)) {
            while (a !== b) {
                if (a < b) {
                    var tmp = a;
                    a = b;
                    b = tmp;
                }
                if (a % b === 0x0)
                    return b;
                a -= b;
            }
            return a;
        } else {
            if (a < b) {
                var tmp = a;
                a = b;
                b = tmp;
            }
            if (a % b === 0x0)
                return b;
            a -= b;
        }
    }
    return a;
}
function lcm(a, b) {
    var g = gcd(a, b);
    return g * (a / g) * (b / g);
}
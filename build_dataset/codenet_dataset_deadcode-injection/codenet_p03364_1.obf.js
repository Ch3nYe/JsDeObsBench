var a0_0x51fa55 = a0_0x4b4b;
function a0_0x4b4b(paCTEa, key) {
    var stringArray = a0_0x1e0e();
    a0_0x4b4b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b4b(paCTEa, key);
}
var lines = require('fs')['readFileSync'](a0_0x51fa55(0x0), 'utf8')['split']('\x0a');
function a0_0x1e0e() {
    var _0x3a551e = [
        '/dev/stdin',
        'slice',
        'pHPZp',
        'EZPPL',
        'log'
    ];
    a0_0x1e0e = function () {
        return _0x3a551e;
    };
    return a0_0x1e0e();
}
var n = lines[0x0] | 0x0;
var s = lines[a0_0x51fa55(0x1)](0x1);
function good(a, b) {
    var _0x2e2435 = a0_0x4b4b;
    for (var i = 0x0; i < n; ++i) {
        if ('pHPZp' !== _0x2e2435(0x2)) {
            for (var i = 0x0; i < n; ++i) {
                for (var j = 0x0; j < n; ++j) {
                    if (s[(i + a) % n][(j + b) % n] !== s[(j + a) % n][(i + b) % n])
                        return 0x0;
                }
            }
            return 0x1;
        } else {
            for (var j = 0x0; j < n; ++j) {
                if (_0x2e2435(0x3) !== _0x2e2435(0x3)) {
                    ans += good(a, b);
                } else {
                    if (s[(i + a) % n][(j + b) % n] !== s[(j + a) % n][(i + b) % n])
                        return 0x0;
                }
            }
        }
    }
    return 0x1;
}
var ans = 0x0;
for (var a = 0x0; a < n; ++a) {
    for (var b = 0x0; b < n; ++b) {
        ans += good(a, b);
    }
}
console[a0_0x51fa55(0x4)](ans);
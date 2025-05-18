var a0_0x3f5870 = a0_0x3905;
var input = require('fs')[a0_0x3f5870(0x0)](a0_0x3f5870(0x1), a0_0x3f5870(0x2));
var arr = input[a0_0x3f5870(0x3)]()[a0_0x3f5870(0x4)]('\x0a');
while (!![]) {
    var abc = arr[a0_0x3f5870(0x5)]();
    if (abc == '0\x200\x200\x200\x200')
        break;
    var ary = (abc + '\x20' + arr['shift']())[a0_0x3f5870(0x4)]('\x20')[a0_0x3f5870(0x6)](Number);
    (function (a, b, c, d, e, na, nb, nc) {
        var _0x106745 = a0_0x3905;
        var ans = Math[_0x106745(0x7)](nc / d) * d * e;
        var nokori = nc % d;
        var A = function (ans) {
            var _0xa887f1 = a0_0x3905;
            if (_0xa887f1(0x8) !== _0xa887f1(0x9)) {
                ans += nokori * c;
                ans += na * a + nb * b;
                return ans;
            } else {
                return na * a + nb * b + nc * e;
            }
        }(ans);
        var B = function (ans, na, nb) {
            var _0x3036c0 = a0_0x3905;
            if (_0x3036c0(0xa) !== _0x3036c0(0xa)) {
                if (nb > 0x0)
                    nb--;
                else if (na > 0x0)
                    na--;
            } else {
                if (ans == 0x0) {
                    if ('tsjbZ' === _0x3036c0(0xb)) {
                        ans += nokori * c;
                        ans += na * a + nb * b;
                        return ans;
                    } else {
                        var yobun = nokori == 0x0 ? 0x0 : d - nokori;
                        if (yobun > 0x0)
                            ans += e * d;
                        while (yobun--) {
                            if (nb > 0x0)
                                nb--;
                            else if (na > 0x0)
                                na--;
                        }
                        ans += na * a + nb * b;
                        return ans;
                    }
                }
                if (ans != 0x0) {
                    return na * a + nb * b + nc * e;
                }
            }
        }(ans, na, nb);
        console[_0x106745(0xc)](Math[_0x106745(0xd)](A, B));
    }[a0_0x3f5870(0xe)](null, ary));
}
function a0_0x3905(NBPDGF, key) {
    var stringArray = a0_0x32da();
    a0_0x3905 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3905(NBPDGF, key);
}
function a0_0x32da() {
    var _0xaf5b54 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'floor',
        'pGrPo',
        'XsyXv',
        'hOmjS',
        'yyHCj',
        'log',
        'min',
        'apply'
    ];
    a0_0x32da = function () {
        return _0xaf5b54;
    };
    return a0_0x32da();
}
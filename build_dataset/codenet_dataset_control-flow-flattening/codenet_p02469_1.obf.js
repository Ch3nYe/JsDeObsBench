function gcd(a, b) {
    var ZyxQAm = {
        'WUzRc': function (x, y) {
            return x > y;
        },
        'Udqec': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'KuHeH': function (x, y) {
            return x == y;
        },
        'SmLLA': function (x, y) {
            return x % y;
        }
    };
    if (ZyxQAm['WUzRc'](b, a))
        return ZyxQAm['Udqec'](gcd, b, a);
    if (ZyxQAm['KuHeH'](b, 0x0))
        return a;
    return ZyxQAm['Udqec'](gcd, b, ZyxQAm['SmLLA'](a, b));
}
function lcm(a, b) {
    var OKKHDB = {
        'icYYg': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ecbqc': function (x, y) {
            return x / y;
        }
    };
    var d = OKKHDB['icYYg'](gcd, a, b);
    return OKKHDB['ecbqc'](a * b, d);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var n = +lines['shift']();
var nums = lines['shift']()['split']('\x20')['map'](function (num) {
    return +num;
});
var p = 0x1;
for (var i = 0x0; i < n; i++) {
    p = lcm(p, nums[i]);
}
console['log'](p);
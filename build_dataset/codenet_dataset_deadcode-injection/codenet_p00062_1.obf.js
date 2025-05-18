var a0_0x3d83c0 = a0_0x1552;
function a0_0x1552(CsdWHX, key) {
    var stringArray = a0_0xe623();
    a0_0x1552 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1552(CsdWHX, key);
}
var input = require('fs')[a0_0x3d83c0(0x0)](a0_0x3d83c0(0x1), a0_0x3d83c0(0x2));
function a0_0xe623() {
    var _0x424ffd = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'length',
        'push'
    ];
    a0_0xe623 = function () {
        return _0x424ffd;
    };
    return a0_0xe623();
}
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var nums = line[a0_0x3d83c0(0x3)]('')['map'](function (n) {
        return +n;
    });
    var n = nums[a0_0x3d83c0(0x4)];
    while (n > 0x1) {
        var a = [];
        for (var i = 0x0; i < n - 0x1; i++) {
            a[a0_0x3d83c0(0x5)]((nums[i] + nums[i + 0x1]) % 0xa);
        }
        n--;
        nums = a;
    }
    console['log'](nums[0x0]);
}
var a0_0x22d233 = a0_0x13dc;
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input[a0_0x22d233(0x0)]()[a0_0x22d233(0x1)]('\x0a');
var [n, q] = arr[a0_0x22d233(0x2)]()[a0_0x22d233(0x1)]('\x20')[a0_0x22d233(0x3)](Number);
var ary = arr['shift']()['split']('\x20')['map'](Number);
ary[a0_0x22d233(0x4)]((a, b) => a - b);
var tansaku = function (x, str) {
    var _0x57c32b = a0_0x13dc;
    var first = -0x1;
    var last = ary[_0x57c32b(0x5)];
    while (last - first > 0x1) {
        var mid = first + Math[_0x57c32b(0x6)]((last - first) / 0x2);
        if (ary[mid] < x)
            first = mid;
        else if (str == _0x57c32b(0x7) && ary[mid] == x)
            first = mid;
        else
            last = mid;
    }
    return last;
};
function a0_0x13dc(KPPEMz, key) {
    var stringArray = a0_0x5062();
    a0_0x13dc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x13dc(KPPEMz, key);
}
var ans = [];
arr[a0_0x22d233(0x8)](v => {
    var _0x1a9289 = a0_0x13dc;
    var [l, r] = v[_0x1a9289(0x1)]('\x20')[_0x1a9289(0x3)](Number);
    ans[_0x1a9289(0x9)](tansaku(r, _0x1a9289(0x7)) - tansaku(l, 'izyou'));
});
console[a0_0x22d233(0xa)](ans[a0_0x22d233(0xb)]('\x0a'));
function a0_0x5062() {
    var _0x230fd4 = [
        'trim',
        'split',
        'shift',
        'map',
        'sort',
        'length',
        'floor',
        'ookii',
        'forEach',
        'push',
        'log',
        'join'
    ];
    a0_0x5062 = function () {
        return _0x230fd4;
    };
    return a0_0x5062();
}
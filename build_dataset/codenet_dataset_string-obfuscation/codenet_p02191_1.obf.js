function a0_0x2d89(RbAyas, key) {
    var stringArray = a0_0x4aa8();
    a0_0x2d89 = function (index, key) {
        index = index - 0xf5;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d89(RbAyas, key);
}
var a0_0x1759cc = a0_0x2d89;
(function (stringArrayFunction, comparisonValue) {
    var _0x3a8c89 = a0_0x2d89;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3a8c89(0x108)) / 0x1 * (parseInt(_0x3a8c89(0x107)) / 0x2) + parseInt(_0x3a8c89(0xf6)) / 0x3 * (-parseInt(_0x3a8c89(0xfc)) / 0x4) + -parseInt(_0x3a8c89(0x10a)) / 0x5 + -parseInt(_0x3a8c89(0xfb)) / 0x6 + -parseInt(_0x3a8c89(0x102)) / 0x7 + parseInt(_0x3a8c89(0x103)) / 0x8 + parseInt(_0x3a8c89(0xfa)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4aa8, 0x3027a));
var input = require('fs')[a0_0x1759cc(0xff)](a0_0x1759cc(0x101), a0_0x1759cc(0xf9));
var arr = input['trim']()['split']('\x0a');
function a0_0x4aa8() {
    var _0x288c3b = [
        'push',
        'floor',
        'utf8',
        '6103206MGSHxw',
        '932214xiPrzK',
        '4DlGJUQ',
        'forEach',
        'split',
        'readFileSync',
        'map',
        '/dev/stdin',
        '1111215QFykxQ',
        '2851072mQIAoU',
        'ookii',
        'length',
        'join',
        '2026HpwUZf',
        '38MuKajw',
        'shift',
        '1097605zHHxru',
        'izyou',
        '795441zzJJfx'
    ];
    a0_0x4aa8 = function () {
        return _0x288c3b;
    };
    return a0_0x4aa8();
}
var [n, q] = arr[a0_0x1759cc(0x109)]()[a0_0x1759cc(0xfe)]('\x20')[a0_0x1759cc(0x100)](Number);
var ary = arr[a0_0x1759cc(0x109)]()[a0_0x1759cc(0xfe)]('\x20')[a0_0x1759cc(0x100)](Number);
ary['sort']((a, b) => a - b);
var tansaku = function (x, str) {
    var _0x68f009 = a0_0x1759cc;
    var first = -0x1;
    var last = ary[_0x68f009(0x105)];
    while (last - first > 0x1) {
        var mid = first + Math[_0x68f009(0xf8)]((last - first) / 0x2);
        if (ary[mid] < x)
            first = mid;
        else if (str == _0x68f009(0x104) && ary[mid] == x)
            first = mid;
        else
            last = mid;
    }
    return last;
};
var ans = [];
arr[a0_0x1759cc(0xfd)](v => {
    var _0x3044cb = a0_0x1759cc;
    var [l, r] = v[_0x3044cb(0xfe)]('\x20')[_0x3044cb(0x100)](Number);
    ans[_0x3044cb(0xf7)](tansaku(r, 'ookii') - tansaku(l, _0x3044cb(0xf5)));
});
console['log'](ans[a0_0x1759cc(0x106)]('\x0a'));
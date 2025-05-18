function a0_0x5a50(fCzvOD, key) {
    var stringArray = a0_0x1404();
    a0_0x5a50 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5a50(fCzvOD, key);
}
var a0_0x195f8a = a0_0x5a50;
function a0_0x1404() {
    var _0xf66ea9 = [
        'split',
        'map',
        'length',
        'trim',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1404 = function () {
        return _0xf66ea9;
    };
    return a0_0x1404();
}
function Main(input) {
    var _0x4cefde = a0_0x5a50;
    input = input[_0x4cefde(0x0)]('\x0a');
    var N = [];
    var arr = input[0x1][_0x4cefde(0x0)]('\x20')[_0x4cefde(0x1)](Number);
    for (var i = 0x0; i < arr[_0x4cefde(0x2)]; i++) {
        N['push']([
            arr[i],
            i + 0x1
        ]);
    }
    N = N['sort'](function (a, b) {
        return a[0x0] - b[0x0];
    });
    var ans = '';
    for (i = 0x0; i < N[_0x4cefde(0x2)]; i++) {
        ans += N[i][0x1];
        ans += '\x20';
    }
    console['log'](ans[_0x4cefde(0x3)]());
}
Main(require('fs')[a0_0x195f8a(0x4)](a0_0x195f8a(0x5), a0_0x195f8a(0x6))[a0_0x195f8a(0x3)]());
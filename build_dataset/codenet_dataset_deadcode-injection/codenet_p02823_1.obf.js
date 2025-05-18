var a0_0x428082 = a0_0x4b95;
function Main(input) {
    var _0x25360f = a0_0x4b95;
    const array = input[_0x25360f(0x0)]()[_0x25360f(0x1)]('\x20')['map'](s => parseInt(s));
    const N = array[0x0];
    var A = array[0x1];
    var B = array[0x2];
    var ans = 0x0;
    var dist = B - A;
    if (dist % 0x2) {
        var diff = Math[_0x25360f(0x2)](N - B, A - 0x1) + 0x1;
        ans += diff;
        ans += Math[_0x25360f(0x3)]((B - A - 0x1) / 0x2);
    } else {
        ans = dist / 0x2;
    }
    console[_0x25360f(0x4)](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x428082(0x5)));
function a0_0x4b95(CwLCMU, key) {
    var stringArray = a0_0x551a();
    a0_0x4b95 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b95(CwLCMU, key);
}
function a0_0x551a() {
    var _0x1821d8 = [
        'trim',
        'split',
        'min',
        'floor',
        'log',
        'utf8'
    ];
    a0_0x551a = function () {
        return _0x1821d8;
    };
    return a0_0x551a();
}
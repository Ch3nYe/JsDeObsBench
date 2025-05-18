function a0_0x7f57() {
    var _0xe0dc12 = [
        'trim',
        'split',
        'shift',
        'map',
        'log',
        'floor',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x7f57 = function () {
        return _0xe0dc12;
    };
    return a0_0x7f57();
}
function a0_0x5137(MXJnfn, key) {
    var stringArray = a0_0x7f57();
    a0_0x5137 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5137(MXJnfn, key);
}
var a0_0x4e64cf = a0_0x5137;
(stdin => {
    var _0x5c1c78 = a0_0x5137;
    var lines = stdin[_0x5c1c78(0x0)]()[_0x5c1c78(0x1)]('\x0a');
    var inputs = lines[_0x5c1c78(0x2)]()[_0x5c1c78(0x1)]('\x20')[_0x5c1c78(0x3)](Number);
    console[_0x5c1c78(0x4)](Math[_0x5c1c78(0x5)]((inputs[0x0] * 0x3 + inputs[0x1]) / 0x2));
})(require('fs')['readFileSync'](a0_0x4e64cf(0x6), a0_0x4e64cf(0x7)));
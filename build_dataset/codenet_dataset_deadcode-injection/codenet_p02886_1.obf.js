function a0_0x5cd8(LIdVLD, key) {
    var stringArray = a0_0x2557();
    a0_0x5cd8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5cd8(LIdVLD, key);
}
var a0_0x454aee = a0_0x5cd8;
function a0_0x2557() {
    var _0x1c25ce = [
        'split',
        'map',
        'log',
        '/dev/stdin'
    ];
    a0_0x2557 = function () {
        return _0x1c25ce;
    };
    return a0_0x2557();
}
function Main(input) {
    var _0x3f9394 = a0_0x5cd8;
    var input = input[_0x3f9394(0x0)]('\x0a');
    const n = Number(input[0x0]);
    const ocps = input[0x1][_0x3f9394(0x0)]('\x20')[_0x3f9394(0x1)](ocp => Number(ocp));
    var r = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = i + 0x1; j < n; j++) {
            r += ocps[i] * ocps[j];
        }
    }
    console[_0x3f9394(0x2)](r);
}
Main(require('fs')['readFileSync'](a0_0x454aee(0x3), 'utf8'));
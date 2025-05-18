var a0_0x53f730 = a0_0x3669;
function a0_0x3669(RpFowp, key) {
    var stringArray = a0_0x2e5c();
    a0_0x3669 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3669(RpFowp, key);
}
function a0_0x2e5c() {
    var _0x301648 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'UTF-8',
        'trim'
    ];
    a0_0x2e5c = function () {
        return _0x301648;
    };
    return a0_0x2e5c();
}
const main = inputs => {
    var _0x3d43a2 = a0_0x3669;
    var array = inputs[0x0][_0x3d43a2(0x0)]('\x20');
    var array2 = inputs[0x1][_0x3d43a2(0x0)]('\x20');
    var N = array[0x0] - 0x0;
    var M = array[0x1] - 0x0;
    var sum = 0x0;
    for (var i = 0x0; i < M; i++) {
        sum = sum + Number(array2[i]);
    }
    console[_0x3d43a2(0x1)](N - sum < 0x0 ? -0x1 : N - sum);
};
main(require('fs')[a0_0x53f730(0x2)](a0_0x53f730(0x3), a0_0x53f730(0x4))[a0_0x53f730(0x5)]()['split']('\x0a'));
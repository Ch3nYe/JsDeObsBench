function a0_0x2f98() {
    var _0x280c2f = [
        'split',
        'log',
        'YES',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2f98 = function () {
        return _0x280c2f;
    };
    return a0_0x2f98();
}
var a0_0x21dbb1 = a0_0x41b5;
function a0_0x41b5(ZGytdn, key) {
    var stringArray = a0_0x2f98();
    a0_0x41b5 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x41b5(ZGytdn, key);
}
function main(arg) {
    var _0x281255 = a0_0x41b5;
    arg = arg['split']('\x0a')[0x0][_0x281255(0x0)]('\x20');
    var N = Number(arg[0x0]);
    var K = Number(arg[0x1]);
    var count = 0x0;
    for (var i = 0x1; i <= N; i += 0x2) {
        count++;
    }
    if (K > count) {
        console[_0x281255(0x1)]('NO');
    } else {
        console[_0x281255(0x1)](_0x281255(0x2));
    }
}
main(require('fs')[a0_0x21dbb1(0x3)](a0_0x21dbb1(0x4), 'utf8'));
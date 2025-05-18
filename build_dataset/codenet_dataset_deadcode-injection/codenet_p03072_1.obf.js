var a0_0x5b3391 = a0_0x1ac8;
input = require('fs')[a0_0x5b3391(0x0)](a0_0x5b3391(0x1), a0_0x5b3391(0x2));
lines = input['split']('\x0a');
N = lines[a0_0x5b3391(0x3)]() * 0x1;
A = lines[a0_0x5b3391(0x3)]()['split']('\x20');
function a0_0x1ac8(ZKHyAG, key) {
    var stringArray = a0_0x3c06();
    a0_0x1ac8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ac8(ZKHyAG, key);
}
h = 0x0;
cnt = 0x0;
function a0_0x3c06() {
    var _0x1e0b5c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'shift',
        'log'
    ];
    a0_0x3c06 = function () {
        return _0x1e0b5c;
    };
    return a0_0x3c06();
}
for (i = 0x0; i < N; i++) {
    if (h <= A[i]) {
        cnt++;
        h = A[i];
    }
}
console[a0_0x5b3391(0x4)](cnt);
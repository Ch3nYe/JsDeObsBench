function a0_0x3482(qZGYyV, key) {
    var stringArray = a0_0x1eab();
    a0_0x3482 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3482(qZGYyV, key);
}
function a0_0x1eab() {
    var _0x1e03a6 = [
        'readFileSync',
        'trim',
        'split',
        'forEach',
        'map',
        'log',
        'round',
        'length'
    ];
    a0_0x1eab = function () {
        return _0x1e03a6;
    };
    return a0_0x1eab();
}
var a0_0x331818 = a0_0x3482;
var input = require('fs')[a0_0x331818(0x0)]('/dev/stdin', 'utf8');
var Arr = input[a0_0x331818(0x1)]()[a0_0x331818(0x2)]('\x0a');
var sum = 0x0;
var cnt = 0x0;
Arr[a0_0x331818(0x3)](function (v) {
    var _0x4bbfce = a0_0x3482;
    var arr = v[_0x4bbfce(0x2)](',')[_0x4bbfce(0x4)](Number);
    sum += arr[0x0] * arr[0x1];
    cnt += arr[0x1];
});
console[a0_0x331818(0x5)](sum);
console[a0_0x331818(0x5)](Math[a0_0x331818(0x6)](cnt / Arr[a0_0x331818(0x7)]));
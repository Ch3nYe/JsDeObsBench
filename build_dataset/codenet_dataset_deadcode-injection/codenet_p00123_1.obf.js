var a0_0x13e2fd = a0_0x3b4a;
var input = require('fs')[a0_0x13e2fd(0x0)](a0_0x13e2fd(0x1), a0_0x13e2fd(0x2));
function a0_0x3b4a(DHvCyJ, key) {
    var stringArray = a0_0x57ce();
    a0_0x3b4a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b4a(DHvCyJ, key);
}
var Arr = input[a0_0x13e2fd(0x3)]()['split']('\x0a');
Arr[a0_0x13e2fd(0x4)](function (v) {
    var _0xb63b14 = a0_0x3b4a;
    var arr = v[_0xb63b14(0x5)]('\x20')[_0xb63b14(0x6)](Number);
    var a = arr[0x0];
    var b = arr[0x1];
    var ans;
    if (35.5 > a && 0x47 > b)
        ans = _0xb63b14(0x7);
    else if (37.5 > a && 0x4d > b)
        ans = 'AA';
    else if (0x28 > a && 0x53 > b)
        ans = 'A';
    else if (0x2b > a && 0x59 > b)
        ans = 'B';
    else if (0x32 > a && 0x69 > b)
        ans = 'C';
    else if (0x37 > a && 0x74 > b)
        ans = 'D';
    else if (0x46 > a && 0x94 > b)
        ans = 'E';
    else
        ans = 'NA';
    console['log'](ans);
});
function a0_0x57ce() {
    var _0xd8c6b0 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'forEach',
        'split',
        'map',
        'AAA'
    ];
    a0_0x57ce = function () {
        return _0xd8c6b0;
    };
    return a0_0x57ce();
}
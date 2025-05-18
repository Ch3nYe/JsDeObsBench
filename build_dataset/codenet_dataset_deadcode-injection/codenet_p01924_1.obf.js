var a0_0x14d653 = a0_0x2dea;
function a0_0x2dea(qYMfYq, key) {
    var stringArray = a0_0x1ac4();
    a0_0x2dea = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2dea(qYMfYq, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x14d653(0x0));
var arr = input[a0_0x14d653(0x1)]()['split']('\x0a');
while (!![]) {
    var tdl = arr[0x0];
    if (tdl == '0\x200\x200')
        break;
    var [t, d, l] = tdl[a0_0x14d653(0x2)]('\x20')[a0_0x14d653(0x3)](Number);
    var cnt = 0x0;
    var time = 0x0;
    for (var i = 0x0; i < t; i++) {
        if (time != 0x0)
            cnt++;
        if (time > 0x0)
            time--;
        var x = arr[i + 0x1] - 0x0;
        if (x >= l)
            time = d;
    }
    console[a0_0x14d653(0x4)](cnt);
    arr = arr['slice'](t + 0x1);
}
function a0_0x1ac4() {
    var _0x1c685 = [
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x1ac4 = function () {
        return _0x1c685;
    };
    return a0_0x1ac4();
}
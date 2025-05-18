var a0_0x313b76 = a0_0x10d3;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x313b76(0x0));
var Arr = input['replace'](/\n$/, '')[a0_0x313b76(0x1)]('\x0a');
var N = Arr['shift']() - 0x0;
for (var I = 0x0; I < N; I++) {
    var xywh = Arr[a0_0x313b76(0x2)]()['split']('\x20')[a0_0x313b76(0x3)](Number);
    var x1 = xywh[0x0];
    var x2 = xywh[0x0] + xywh[0x2];
    var y1 = xywh[0x1];
    var y2 = xywh[0x1] + xywh[0x3];
    var n = Arr[a0_0x313b76(0x2)]() - 0x0;
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        var XY = Arr['shift']()['split']('\x20')[a0_0x313b76(0x3)](Number);
        var X = XY[0x0];
        var Y = XY[0x1];
        if (x1 <= X && x2 >= X && y1 <= Y && y2 >= Y)
            cnt++;
    }
    console['log'](cnt);
}
function a0_0x10d3(tHKHgE, key) {
    var stringArray = a0_0x43ac();
    a0_0x10d3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x10d3(tHKHgE, key);
}
function a0_0x43ac() {
    var _0x1a15ed = [
        'utf8',
        'split',
        'shift',
        'map'
    ];
    a0_0x43ac = function () {
        return _0x1a15ed;
    };
    return a0_0x43ac();
}
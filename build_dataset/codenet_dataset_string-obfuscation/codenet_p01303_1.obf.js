var a0_0x87e743 = a0_0x5383;
function a0_0x4a94() {
    var _0x52d83c = [
        'split',
        'utf8',
        '405HDvVqv',
        'shift',
        '6flIrJy',
        'map',
        '3954090lmUljV',
        '3564040CgKAKn',
        '10924SLrJPF',
        '816039dYPtGl',
        '7511656dZlkJo',
        '1949703bFCLOI',
        'replace',
        '36983835tebMhR'
    ];
    a0_0x4a94 = function () {
        return _0x52d83c;
    };
    return a0_0x4a94();
}
function a0_0x5383(BlnoHM, key) {
    var stringArray = a0_0x4a94();
    a0_0x5383 = function (index, key) {
        index = index - 0x162;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5383(BlnoHM, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x129d58 = a0_0x5383;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x129d58(0x16e)) / 0x1 + -parseInt(_0x129d58(0x16b)) / 0x2 + -parseInt(_0x129d58(0x167)) / 0x3 * (parseInt(_0x129d58(0x16d)) / 0x4) + parseInt(_0x129d58(0x16c)) / 0x5 * (parseInt(_0x129d58(0x169)) / 0x6) + parseInt(_0x129d58(0x162)) / 0x7 + -parseInt(_0x129d58(0x16f)) / 0x8 + parseInt(_0x129d58(0x164)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4a94, 0xf41f6));
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x87e743(0x166));
var Arr = input[a0_0x87e743(0x163)](/\n$/, '')[a0_0x87e743(0x165)]('\x0a');
var N = Arr['shift']() - 0x0;
for (var I = 0x0; I < N; I++) {
    var xywh = Arr[a0_0x87e743(0x168)]()['split']('\x20')['map'](Number);
    var x1 = xywh[0x0];
    var x2 = xywh[0x0] + xywh[0x2];
    var y1 = xywh[0x1];
    var y2 = xywh[0x1] + xywh[0x3];
    var n = Arr[a0_0x87e743(0x168)]() - 0x0;
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        var XY = Arr[a0_0x87e743(0x168)]()[a0_0x87e743(0x165)]('\x20')[a0_0x87e743(0x16a)](Number);
        var X = XY[0x0];
        var Y = XY[0x1];
        if (x1 <= X && x2 >= X && y1 <= Y && y2 >= Y)
            cnt++;
    }
    console['log'](cnt);
}
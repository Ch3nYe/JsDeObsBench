var a0_0xe6be80 = a0_0x5f2e;
function a0_0x5f2e(MdDBsx, key) {
    var stringArray = a0_0x2b46();
    a0_0x5f2e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5f2e(MdDBsx, key);
}
function Main(input) {
    var _0xa8006e = a0_0x5f2e;
    input = input[_0xa8006e(0x0)]('\x0a');
    var N = Number(input[0x0]['split']('\x20')[0x0]);
    var x = Number(input[0x0][_0xa8006e(0x0)]('\x20')[0x1]);
    var a = input[0x1][_0xa8006e(0x0)]('\x20')[_0xa8006e(0x1)](a => Number(a))[_0xa8006e(0x2)]((a, b) => a - b);
    var match = 0x0;
    var left = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (x - a[i] >= 0x0) {
            x = x - a[i];
            match++;
        } else {
            break;
        }
    }
    if (x > 0x0 && match != 0x0) {
        match--;
    }
    console[_0xa8006e(0x3)](match);
}
Main(require('fs')[a0_0xe6be80(0x4)]('/dev/stdin', a0_0xe6be80(0x5)));
function a0_0x2b46() {
    var _0x3a1cef = [
        'split',
        'map',
        'sort',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x2b46 = function () {
        return _0x3a1cef;
    };
    return a0_0x2b46();
}
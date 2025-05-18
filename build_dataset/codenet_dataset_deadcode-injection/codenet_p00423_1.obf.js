var a0_0x20e9b7 = a0_0x20d0;
(function (stdin) {
    var _0x5f34ee = a0_0x20d0;
    var lines = stdin[_0x5f34ee(0x0)]()[_0x5f34ee(0x1)]('\x0a');
    while (0x1) {
        var line = lines[_0x5f34ee(0x2)]();
        if (line == '0') {
            break;
        }
        var n = Number(line);
        var a = 0x0, b = 0x0;
        for (var i = 0x0; i < n; i++) {
            var numbers = lines[_0x5f34ee(0x2)]()[_0x5f34ee(0x1)]('\x20')['map'](Number);
            if (numbers[0x0] == numbers[0x1]) {
                a += numbers[0x0];
                b += numbers[0x0];
            } else if (numbers[0x0] > numbers[0x1]) {
                a += numbers[0x0] + numbers[0x1];
            } else {
                b += numbers[0x0] + numbers[0x1];
            }
        }
        console[_0x5f34ee(0x3)]([
            a,
            b
        ]['join']('\x20'));
    }
}(require('fs')[a0_0x20e9b7(0x4)](a0_0x20e9b7(0x5), 'utf8')));
function a0_0x20d0(gviocZ, key) {
    var stringArray = a0_0x174a();
    a0_0x20d0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x20d0(gviocZ, key);
}
function a0_0x174a() {
    var _0x5bd360 = [
        'trim',
        'split',
        'shift',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x174a = function () {
        return _0x5bd360;
    };
    return a0_0x174a();
}
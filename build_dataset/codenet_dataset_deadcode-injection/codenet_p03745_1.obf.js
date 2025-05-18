var a0_0x105c6a = a0_0x3c1b;
function a0_0x3c1b(OZReYr, key) {
    var stringArray = a0_0x18a8();
    a0_0x3c1b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c1b(OZReYr, key);
}
(function (stdin) {
    input = stdin['split']('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var a = input[0x1]['split']('\x20');
    var ans = 0x1;
    var up = ![];
    var down = ![];
    for (var i = 0x0; i < n - 0x1; i++) {
        if (a[i] < a[i + 0x1]) {
            up = !![];
        }
        if (a[i] > a[i + 0x1]) {
            down = !![];
        }
        if (up && down) {
            up = down = ![];
            ans++;
        }
    }
    console['log']('%d', ans);
}(require('fs')[a0_0x105c6a(0x0)](a0_0x105c6a(0x1), 'utf8')));
function a0_0x18a8() {
    var _0x5c707f = [
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x18a8 = function () {
        return _0x5c707f;
    };
    return a0_0x18a8();
}
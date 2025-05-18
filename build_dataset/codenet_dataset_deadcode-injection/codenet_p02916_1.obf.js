var a0_0x17a263 = a0_0x50bf;
function a0_0x50bf(soqBKg, key) {
    var stringArray = a0_0x2768();
    a0_0x50bf = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50bf(soqBKg, key);
}
function Main(input) {
    var _0x4a1534 = a0_0x50bf;
    input = input[_0x4a1534(0x0)]('\x0a');
    n = Number(input[0x0]['split']('\x20'));
    a = input[0x1]['split']('\x20')['map'](Number);
    b = input[0x2][_0x4a1534(0x0)]('\x20')['map'](Number);
    c = input[0x3][_0x4a1534(0x0)]('\x20')[_0x4a1534(0x1)](Number);
    var count = 0x0;
    for (var i = 0x0; i < n; i++) {
        count += b[a[i] - 0x1];
        if (a[i] === a[i - 0x1] + 0x1) {
            count += c[a[i] - 0x2];
        }
    }
    console['log'](count);
}
function a0_0x2768() {
    var _0x435e55 = [
        'split',
        'map',
        'readFileSync',
        'utf8'
    ];
    a0_0x2768 = function () {
        return _0x435e55;
    };
    return a0_0x2768();
}
Main(require('fs')[a0_0x17a263(0x2)]('/dev/stdin', a0_0x17a263(0x3)));
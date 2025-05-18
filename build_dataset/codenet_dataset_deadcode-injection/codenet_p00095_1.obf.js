var a0_0x2cd5e4 = a0_0x437e;
(function (input) {
    var _0x28716d = a0_0x437e;
    var inputs = input[_0x28716d(0x0)](/\r/g, '')[_0x28716d(0x1)]('\x0a'), data = [], n, line, max_index, a, b;
    n = parseInt(inputs[_0x28716d(0x2)]());
    max_index = 0x65;
    max_value = -0x1;
    while (n--) {
        line = inputs[_0x28716d(0x2)]()[_0x28716d(0x1)]('\x20');
        a = parseInt(line[0x0]);
        b = parseInt(line[0x1]);
        if (b > max_value || b === max_value && a < max_index) {
            max_index = a;
            max_value = b;
        }
    }
    console[_0x28716d(0x3)](max_index + '\x20' + max_value);
}(require('fs')['readFileSync'](a0_0x2cd5e4(0x4), a0_0x2cd5e4(0x5))));
function a0_0x437e(bDsvNC, key) {
    var stringArray = a0_0x2539();
    a0_0x437e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x437e(bDsvNC, key);
}
function a0_0x2539() {
    var _0xe23d15 = [
        'replace',
        'split',
        'shift',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2539 = function () {
        return _0xe23d15;
    };
    return a0_0x2539();
}
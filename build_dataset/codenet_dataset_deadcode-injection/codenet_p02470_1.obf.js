var a0_0x546081 = a0_0x91ae;
function a0_0x91ae(hOwiCP, key) {
    var stringArray = a0_0x3270();
    a0_0x91ae = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x91ae(hOwiCP, key);
}
function Main(input) {
    var _0x378ac8 = a0_0x91ae;
    var n = parseInt(input, 0xa);
    var count = 0x0;
    for (i = 0x1; i < n; i++) {
        if (_0x378ac8(0x0) !== _0x378ac8(0x1)) {
            if (gcd(n, i) == 0x1)
                count++;
        } else {
            if (gcd(n, i) == 0x1)
                count++;
        }
    }
    console[_0x378ac8(0x2)](count);
}
function a0_0x3270() {
    var _0x56e74c = [
        'uIkqg',
        'gcSqZ',
        'log',
        'max',
        'readFileSync'
    ];
    a0_0x3270 = function () {
        return _0x56e74c;
    };
    return a0_0x3270();
}
function gcd(n, m) {
    var _0x4a74ba = a0_0x91ae;
    var a, b, c;
    a = Math[_0x4a74ba(0x3)](n, m);
    b = Math['min'](n, m);
    c = a % b;
    if (c == 0x0) {
        return b;
    } else {
        return gcd(b, c);
    }
}
Main(require('fs')[a0_0x546081(0x4)]('/dev/stdin', 'utf8'));
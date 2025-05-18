function a0_0x5c7f(SebZBg, key) {
    var stringArray = a0_0x1d31();
    a0_0x5c7f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5c7f(SebZBg, key);
}
var a0_0x592103 = a0_0x5c7f;
function a0_0x1d31() {
    var _0x3af874 = [
        'charAt',
        'sZiUC',
        'log',
        'AMBIGUOUS',
        'YYMM',
        'readFileSync'
    ];
    a0_0x1d31 = function () {
        return _0x3af874;
    };
    return a0_0x1d31();
}
function Main(input) {
    var _0x52cfb6 = a0_0x5c7f;
    var a = parseInt(input[_0x52cfb6(0x0)](0x0) + input[_0x52cfb6(0x0)](0x1));
    var b = parseInt(input[_0x52cfb6(0x0)](0x2) + input[_0x52cfb6(0x0)](0x3));
    var r = 0x0;
    if (a >= 0xd || a == 0x0) {
        r = 0x1;
    }
    if (b >= 0xd || b == 0x0) {
        r = 0x2;
    }
    if (a >= 0x1 && a <= 0xc && b >= 0x1 && b <= 0xc) {
        r = 0x3;
    }
    if (a >= 0xd && b >= 0xd || a >= 0xd && b == 0x0 || a == 0x0 && b >= 0xd || a == 0x0 && b == 0x0) {
        if (_0x52cfb6(0x1) !== 'Tielg') {
            r = 0x4;
        } else {
            console[_0x52cfb6(0x2)](_0x52cfb6(0x3));
        }
    }
    if (r == 0x1) {
        console['log'](_0x52cfb6(0x4));
    }
    if (r == 0x2) {
        console[_0x52cfb6(0x2)]('MMYY');
    }
    if (r == 0x3) {
        console[_0x52cfb6(0x2)]('AMBIGUOUS');
    }
    if (r == 0x4) {
        console[_0x52cfb6(0x2)]('NA');
    }
}
Main(require('fs')[a0_0x592103(0x5)]('/dev/stdin', 'utf8'));
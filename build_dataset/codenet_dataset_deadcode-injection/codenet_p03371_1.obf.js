var a0_0x4238fc = a0_0x2279;
function a0_0x2279(tTwUcT, key) {
    var stringArray = a0_0x44ac();
    a0_0x2279 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2279(tTwUcT, key);
}
function a0_0x44ac() {
    var _0x574e4f = [
        'split',
        'min',
        'rlTUO',
        'max',
        'GQfIW',
        'log',
        'getElementById',
        'input',
        'readFileSync',
        'utf8'
    ];
    a0_0x44ac = function () {
        return _0x574e4f;
    };
    return a0_0x44ac();
}
function Main(input) {
    var _0x29ccd9 = a0_0x2279;
    input = input[_0x29ccd9(0x0)]('\x0a');
    A = parseInt(input[0x0][_0x29ccd9(0x0)]('\x20')[0x0]);
    B = parseInt(input[0x0][_0x29ccd9(0x0)]('\x20')[0x1]);
    C = parseInt(input[0x0][_0x29ccd9(0x0)]('\x20')[0x2]);
    X = parseInt(input[0x0]['split']('\x20')[0x3]);
    Y = parseInt(input[0x0][_0x29ccd9(0x0)]('\x20')[0x4]);
    var ans = 0x0;
    if (C <= (A + B) / 0x2 && C >= Math[_0x29ccd9(0x1)](A, B)) {
        if (X <= Y) {
            ans = C * X * 0x2 + B * (Y - X);
        } else {
            if (_0x29ccd9(0x2) === _0x29ccd9(0x2)) {
                ans = C * Y * 0x2 + A * (X - Y);
            } else {
                ans = C * Math[_0x29ccd9(0x3)](X, Y) * 0x2;
            }
        }
    } else if (C <= (A + B) / 0x2 && C < Math[_0x29ccd9(0x1)](A, B)) {
        ans = C * Math[_0x29ccd9(0x3)](X, Y) * 0x2;
    } else {
        if (_0x29ccd9(0x4) === _0x29ccd9(0x4)) {
            ans = X * A + Y * B;
        } else {
            ans = X * A + Y * B;
        }
    }
    console[_0x29ccd9(0x5)]('%s', ans);
}
function debug() {
    var _0x4ffa7f = a0_0x2279;
    var input = document[_0x4ffa7f(0x6)](_0x4ffa7f(0x7))['value'];
    Main(input);
}
Main(require('fs')[a0_0x4238fc(0x8)]('/dev/stdin', a0_0x4238fc(0x9)));
var a0_0x241bc9 = a0_0x2c91;
(function (stringArrayFunction, comparisonValue) {
    var _0xcf9cbf = a0_0x2c91;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xcf9cbf(0x97)) / 0x1 + parseInt(_0xcf9cbf(0x95)) / 0x2 * (-parseInt(_0xcf9cbf(0x99)) / 0x3) + -parseInt(_0xcf9cbf(0x9e)) / 0x4 + -parseInt(_0xcf9cbf(0x96)) / 0x5 * (-parseInt(_0xcf9cbf(0x93)) / 0x6) + -parseInt(_0xcf9cbf(0x92)) / 0x7 + parseInt(_0xcf9cbf(0x9a)) / 0x8 * (-parseInt(_0xcf9cbf(0xa2)) / 0x9) + parseInt(_0xcf9cbf(0x9c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x290d, 0x38bc5));
function a0_0x2c91(MyUTnG, key) {
    var stringArray = a0_0x290d();
    a0_0x2c91 = function (index, key) {
        index = index - 0x92;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2c91(MyUTnG, key);
}
function myout(text) {
    var _0x23f835 = a0_0x2c91;
    console[_0x23f835(0x94)](text);
}
function Main(input) {
    var _0x463015 = a0_0x2c91;
    input = parseInt(input);
    var list = [];
    var output = 0x0;
    for (var i = 0x1; i <= input; i++) {
        output += i;
        list[_0x463015(0xa3)](i);
        if (output == input) {
            myout(list[_0x463015(0xa4)]('\x0a'));
            return;
        } else if (output > input) {
            var diff = output - input;
            list[_0x463015(0x98)](list[_0x463015(0x9d)](diff), 0x1);
            myout(list[_0x463015(0xa4)]('\x0a'));
            return;
        }
    }
}
function a0_0x290d() {
    var _0x391f22 = [
        'readFileSync',
        '/dev/stdin',
        '3256128mMgqXW',
        'push',
        'join',
        '3220686SEahUj',
        '73974FgrJXS',
        'log',
        '2JvpwvG',
        '155SnemOc',
        '129812XnEExJ',
        'splice',
        '1186359aTAhuC',
        '8GfNaCa',
        'trim',
        '15015230oxGpZF',
        'indexOf',
        '1216712DCjYeB',
        'utf8'
    ];
    a0_0x290d = function () {
        return _0x391f22;
    };
    return a0_0x290d();
}
Main(require('fs')[a0_0x241bc9(0xa0)](a0_0x241bc9(0xa1), a0_0x241bc9(0x9f))[a0_0x241bc9(0x9b)]());
var a0_0xacebf8 = a0_0x5939;
(function (stringArrayFunction, comparisonValue) {
    var _0x49b4a2 = a0_0x5939;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x49b4a2(0x129)) / 0x1 * (-parseInt(_0x49b4a2(0x125)) / 0x2) + -parseInt(_0x49b4a2(0x130)) / 0x3 + parseInt(_0x49b4a2(0x124)) / 0x4 + -parseInt(_0x49b4a2(0x126)) / 0x5 + parseInt(_0x49b4a2(0x12f)) / 0x6 * (-parseInt(_0x49b4a2(0x123)) / 0x7) + parseInt(_0x49b4a2(0x12c)) / 0x8 + -parseInt(_0x49b4a2(0x12b)) / 0x9 * (parseInt(_0x49b4a2(0x12e)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x46a4, 0x1c4ae));
function a0_0x46a4() {
    var _0x47955b = [
        'log',
        '619EJbzaE',
        'readFileSync',
        '9DTgarX',
        '1190176GkXiHc',
        'Yes',
        '2011510bVxDVi',
        '606lcuUGn',
        '266880BUZGwp',
        'utf8',
        'split',
        '266BbwCCY',
        '905532rrpCYf',
        '282SkQzdk',
        '262995RRutio',
        'trim'
    ];
    a0_0x46a4 = function () {
        return _0x47955b;
    };
    return a0_0x46a4();
}
function a0_0x5939(DdZELx, key) {
    var stringArray = a0_0x46a4();
    a0_0x5939 = function (index, key) {
        index = index - 0x121;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5939(DdZELx, key);
}
function Main(input) {
    var _0x5bc9e8 = a0_0x5939;
    var A = parseInt(input[0x0], 0xa);
    var B = parseInt(input[0x1], 0xa);
    var C = parseInt(input[0x2], 0xa);
    if (A < B) {
        if (A < C && C < B) {
            console['log'](_0x5bc9e8(0x12d));
        } else {
            console[_0x5bc9e8(0x128)]('No');
        }
    } else {
        if (B < C && C < A) {
            console['log'](_0x5bc9e8(0x12d));
        } else {
            console[_0x5bc9e8(0x128)]('No');
        }
    }
}
Main(require('fs')[a0_0xacebf8(0x12a)]('/dev/stdin', a0_0xacebf8(0x121))[a0_0xacebf8(0x127)]()[a0_0xacebf8(0x122)](/\n|\s/));
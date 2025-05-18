var a0_0x17fd6b = a0_0xa20c;
function a0_0xa20c(XKhYUQ, key) {
    var stringArray = a0_0x4e6b();
    a0_0xa20c = function (index, key) {
        index = index - 0x1de;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa20c(XKhYUQ, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x753482 = a0_0xa20c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x753482(0x1e5)) / 0x1 * (-parseInt(_0x753482(0x1eb)) / 0x2) + -parseInt(_0x753482(0x1e9)) / 0x3 * (parseInt(_0x753482(0x1e0)) / 0x4) + parseInt(_0x753482(0x1e7)) / 0x5 * (-parseInt(_0x753482(0x1e1)) / 0x6) + -parseInt(_0x753482(0x1e8)) / 0x7 + -parseInt(_0x753482(0x1ed)) / 0x8 * (parseInt(_0x753482(0x1de)) / 0x9) + parseInt(_0x753482(0x1ea)) / 0xa + parseInt(_0x753482(0x1df)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4e6b, 0x6dbba));
function a0_0x4e6b() {
    var _0x368e54 = [
        'readFileSync',
        '/dev/stdin',
        'floor',
        '1gQGhXI',
        'split',
        '55hCayuh',
        '2783102oRzcIe',
        '459kUtLCr',
        '8350370jPaoPI',
        '433018fVamNv',
        'log',
        '3783400LtbNFx',
        '9lSEzGw',
        '15447388pQqceU',
        '13088qxyNuj',
        '346506UktamJ'
    ];
    a0_0x4e6b = function () {
        return _0x368e54;
    };
    return a0_0x4e6b();
}
function Main(input) {
    var _0x3870f7 = a0_0xa20c;
    var inputArr = input[_0x3870f7(0x1e6)]('\x20');
    var sNum = Number(inputArr[0x0]);
    var cNum = Number(inputArr[0x1]);
    var result = 0x0;
    if (sNum > cNum / 0x2) {
        result += Math[_0x3870f7(0x1e4)](cNum / 0x2);
    } else {
        result += sNum;
        cNum -= result * 0x2;
        result += Math['floor'](cNum / 0x4);
    }
    console[_0x3870f7(0x1ec)](result);
}
Main(require('fs')[a0_0x17fd6b(0x1e2)](a0_0x17fd6b(0x1e3), 'utf8'));
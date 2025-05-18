function a0_0x1775() {
    var _0x390056 = [
        'split',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1775 = function () {
        return _0x390056;
    };
    return a0_0x1775();
}
var a0_0x2732f4 = a0_0x2d32;
function a0_0x2d32(hYGhWo, key) {
    var stringArray = a0_0x1775();
    a0_0x2d32 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d32(hYGhWo, key);
}
function Main(input) {
    var _0x1be119 = a0_0x2d32;
    var inputArr = input[_0x1be119(0x0)]('\x20');
    var sNum = Number(inputArr[0x0]);
    var cNum = Number(inputArr[0x1]);
    var result = 0x0;
    if (sNum > cNum / 0x2) {
        result += Math[_0x1be119(0x1)](cNum / 0x2);
    } else {
        result += sNum;
        cNum -= result * 0x2;
        result += Math[_0x1be119(0x1)](cNum / 0x4);
    }
    console[_0x1be119(0x2)](result);
}
Main(require('fs')[a0_0x2732f4(0x3)](a0_0x2732f4(0x4), 'utf8'));
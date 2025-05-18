var a0_0x28a2bc = a0_0x3b3d;
function Main(input) {
    var _0x3157f8 = a0_0x3b3d;
    inputList = input[_0x3157f8(0x0)]('\x0a');
    inputNum = parseInt(inputList[0x0], 0xa);
    firstList = inputList[0x1][_0x3157f8(0x0)]('');
    secondList = inputList[0x2][_0x3157f8(0x0)]('');
    thirdList = inputList[0x3][_0x3157f8(0x0)]('');
    count = 0x0;
    for (var i = 0x0; i < inputNum; i++) {
        if (firstList[i] == secondList[i] && secondList[i] == thirdList[i]) {
            continue;
        }
        if (firstList[i] == secondList[i] || secondList[i] == thirdList[i] || thirdList[i] == firstList[i]) {
            count++;
            continue;
        }
        count++;
        count++;
    }
    console[_0x3157f8(0x1)](count);
}
Main(require('fs')[a0_0x28a2bc(0x2)](a0_0x28a2bc(0x3), a0_0x28a2bc(0x4)));
function a0_0x3b3d(HpYIBg, key) {
    var stringArray = a0_0x43fa();
    a0_0x3b3d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b3d(HpYIBg, key);
}
function a0_0x43fa() {
    var _0x14570b = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x43fa = function () {
        return _0x14570b;
    };
    return a0_0x43fa();
}
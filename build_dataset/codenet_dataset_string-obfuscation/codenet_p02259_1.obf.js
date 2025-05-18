var a0_0x32a97a = a0_0x5bdc;
(function (stringArrayFunction, comparisonValue) {
    var _0x30b2c0 = a0_0x5bdc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x30b2c0(0x1a2)) / 0x1 * (parseInt(_0x30b2c0(0x1a9)) / 0x2) + -parseInt(_0x30b2c0(0x1ac)) / 0x3 + -parseInt(_0x30b2c0(0x1ab)) / 0x4 * (parseInt(_0x30b2c0(0x1ae)) / 0x5) + -parseInt(_0x30b2c0(0x1a5)) / 0x6 + -parseInt(_0x30b2c0(0x1a1)) / 0x7 * (parseInt(_0x30b2c0(0x1ad)) / 0x8) + -parseInt(_0x30b2c0(0x1b1)) / 0x9 + parseInt(_0x30b2c0(0x1a3)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31ee, 0xdfb41));
function a0_0x5bdc(lvtzVe, key) {
    var stringArray = a0_0x31ee();
    a0_0x5bdc = function (index, key) {
        index = index - 0x1a1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5bdc(lvtzVe, key);
}
function bubbleSort(A) {
    var _0x392a0b = a0_0x5bdc;
    var N = A[_0x392a0b(0x1a6)];
    var flag = 0x1;
    var i = 0x0;
    var cnt = 0x0;
    while (flag == 0x1) {
        flag = 0x0;
        for (var j = N - 0x1; j >= i + 0x1; j--) {
            if (A[j] < A[j - 0x1]) {
                var m = A[j];
                A[j] = A[j - 0x1];
                A[j - 0x1] = m;
                flag = 0x1;
                cnt++;
            }
        }
        i++;
    }
    return [
        A,
        cnt
    ];
}
var input = require('fs')['readFileSync'](a0_0x32a97a(0x1a7), a0_0x32a97a(0x1b0));
var Arr = input[a0_0x32a97a(0x1b2)]()['split']('\x0a');
Arr['shift']();
var arr = Arr[0x0][a0_0x32a97a(0x1aa)]('\x20')[a0_0x32a97a(0x1a4)](Number);
function a0_0x31ee() {
    var _0x1df891 = [
        '2625704SZunyL',
        'split',
        '8ZliksR',
        '4212696QEkUYY',
        '11960008QLCoCW',
        '1929435kFzcNC',
        'log',
        'utf8',
        '13948443rWQkFr',
        'trim',
        '7yPWQWG',
        '1sgelHN',
        '56806860kzHKzr',
        'map',
        '5138490dXkhUS',
        'length',
        '/dev/stdin',
        'join'
    ];
    a0_0x31ee = function () {
        return _0x1df891;
    };
    return a0_0x31ee();
}
var result = bubbleSort(arr);
console[a0_0x32a97a(0x1af)](result[0x0][a0_0x32a97a(0x1a8)]('\x20'));
console[a0_0x32a97a(0x1af)](result[0x1]);
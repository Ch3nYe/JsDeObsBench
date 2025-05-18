var a0_0x735111 = a0_0x1080;
function bubbleSort(A) {
    var _0x212b49 = a0_0x1080;
    var N = A[_0x212b49(0x0)];
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
var input = require('fs')['readFileSync'](a0_0x735111(0x1), 'utf8');
var Arr = input[a0_0x735111(0x2)]()['split']('\x0a');
Arr[a0_0x735111(0x3)]();
var arr = Arr[0x0][a0_0x735111(0x4)]('\x20')[a0_0x735111(0x5)](Number);
var result = bubbleSort(arr);
console[a0_0x735111(0x6)](result[0x0][a0_0x735111(0x7)]('\x20'));
console[a0_0x735111(0x6)](result[0x1]);
function a0_0x1080(jNjHgK, key) {
    var stringArray = a0_0x2656();
    a0_0x1080 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1080(jNjHgK, key);
}
function a0_0x2656() {
    var _0x31f8db = [
        'length',
        '/dev/stdin',
        'trim',
        'shift',
        'split',
        'map',
        'log',
        'join'
    ];
    a0_0x2656 = function () {
        return _0x31f8db;
    };
    return a0_0x2656();
}
var a0_0x8b3686 = a0_0xafcb;
function binarySearch(A, key) {
    var _0x7e9c0d = a0_0xafcb;
    var left = 0x0;
    var right = A[_0x7e9c0d(0x0)] - 0x1;
    var cnt = 0x0;
    while (!![]) {
        cnt++;
        if (left == right)
            break;
        var mid = Math[_0x7e9c0d(0x1)]((left + right) / 0x2);
        if (A[mid] == key)
            return cnt;
        if (key < A[mid])
            right = mid;
        else
            left = mid + 0x1;
    }
    return cnt;
}
var input = require('fs')['readFileSync'](a0_0x8b3686(0x2), 'utf8');
function a0_0xafcb(SeyFsV, key) {
    var stringArray = a0_0x2ca4();
    a0_0xafcb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xafcb(SeyFsV, key);
}
function a0_0x2ca4() {
    var _0x4f8712 = [
        'length',
        'floor',
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'push'
    ];
    a0_0x2ca4 = function () {
        return _0x4f8712;
    };
    return a0_0x2ca4();
}
var Arr = input[a0_0x8b3686(0x3)]()[a0_0x8b3686(0x4)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x8b3686(0x5)]() - 0x0;
    if (n == 0x0)
        break;
    var arr = [];
    for (var i = 0x0; i < n; i++)
        arr[a0_0x8b3686(0x6)](Arr[a0_0x8b3686(0x5)]() - 0x0);
    console['log'](binarySearch(arr, Arr['shift']() - 0x0));
}
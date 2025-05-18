var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
const binarySearch = (key, arr, N) => {
    const APgMdZ = {
        'jjVbc': function (x, y) {
            return x < y;
        },
        'SXYSg': function (x, y) {
            return x + y;
        },
        'roWhb': function (x, y) {
            return x > y;
        }
    };
    let mid;
    let left = 0x0;
    let right = N;
    while (APgMdZ['jjVbc'](left, right)) {
        mid = Math['floor'](APgMdZ['SXYSg'](left, right) / 0x2);
        if (APgMdZ['jjVbc'](key, arr[mid]))
            right = mid;
        else if (APgMdZ['roWhb'](key, arr[mid]))
            left = mid + 0x1;
        else
            return 0x1;
    }
    return 0x0;
};
(function () {
    const N1 = Number(Arr[0x0]);
    const arr1 = Arr[0x1]['split']('\x20')['map'](Number);
    const arr2 = Arr[0x3]['split']('\x20')['map'](Number);
    console['log'](arr2['map'](e => binarySearch(e, arr1, N1))['reduce']((a, b) => a + b, 0x0));
}());
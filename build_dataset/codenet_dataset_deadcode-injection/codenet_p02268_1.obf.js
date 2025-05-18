const a0_0x160b96 = a0_0x39d6;
function a0_0x39d6(OVcRtv, key) {
    const stringArray = a0_0x46e1();
    a0_0x39d6 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x39d6(OVcRtv, key);
}
var input = require('fs')[a0_0x160b96(0x0)]('/dev/stdin', a0_0x160b96(0x1));
var Arr = input[a0_0x160b96(0x2)]()[a0_0x160b96(0x3)]('\x0a');
function a0_0x46e1() {
    const _0x5b3a69 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'floor',
        'map',
        'log',
        'reduce'
    ];
    a0_0x46e1 = function () {
        return _0x5b3a69;
    };
    return a0_0x46e1();
}
const binarySearch = (key, arr, N) => {
    const _0x4b1961 = a0_0x39d6;
    let mid;
    let left = 0x0;
    let right = N;
    while (left < right) {
        mid = Math[_0x4b1961(0x4)]((left + right) / 0x2);
        if (key < arr[mid])
            right = mid;
        else if (key > arr[mid])
            left = mid + 0x1;
        else
            return 0x1;
    }
    return 0x0;
};
(function () {
    const _0x4b8496 = a0_0x39d6;
    const N1 = Number(Arr[0x0]);
    const arr1 = Arr[0x1][_0x4b8496(0x3)]('\x20')[_0x4b8496(0x5)](Number);
    const arr2 = Arr[0x3][_0x4b8496(0x3)]('\x20')[_0x4b8496(0x5)](Number);
    console[_0x4b8496(0x6)](arr2[_0x4b8496(0x5)](e => binarySearch(e, arr1, N1))[_0x4b8496(0x7)]((a, b) => a + b, 0x0));
}());
const a0_0x412922 = a0_0x47f0;
function a0_0x47f0(qkAbrs, key) {
    const stringArray = a0_0x34cc();
    a0_0x47f0 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x47f0(qkAbrs, key);
}
function a0_0x34cc() {
    const _0x13b240 = [
        'trim',
        'split',
        'map',
        'abs',
        'YES',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x34cc = function () {
        return _0x13b240;
    };
    return a0_0x34cc();
}
function Main(input) {
    const _0x56723c = a0_0x47f0;
    const arr = input[_0x56723c(0x0)]()[_0x56723c(0x1)]('\x0a');
    const AV = arr[0x0][_0x56723c(0x1)]('\x20')[_0x56723c(0x2)](Number);
    const BW = arr[0x1][_0x56723c(0x1)]('\x20')[_0x56723c(0x2)](Number);
    const T = Number(arr[0x2]);
    if (Math[_0x56723c(0x3)](AV[0x0] - BW[0x0]) < T * (AV[0x1] - BW[0x1])) {
        console['log'](_0x56723c(0x4));
    } else {
        console[_0x56723c(0x5)]('NO');
    }
}
Main(require('fs')[a0_0x412922(0x6)](a0_0x412922(0x7), 'utf8'));
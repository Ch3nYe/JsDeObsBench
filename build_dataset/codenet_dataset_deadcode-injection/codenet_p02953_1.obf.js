const a0_0x26aa3d = a0_0x13ae;
function a0_0x16af() {
    const _0x443ec3 = [
        'split',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x16af = function () {
        return _0x443ec3;
    };
    return a0_0x16af();
}
function a0_0x13ae(JnVRWp, key) {
    const stringArray = a0_0x16af();
    a0_0x13ae = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x13ae(JnVRWp, key);
}
function Main(args) {
    const _0x376c97 = a0_0x13ae;
    const firstRow = args['split']('\x0a')[0x0];
    const row = args[_0x376c97(0x0)]('\x0a')[0x1][_0x376c97(0x0)]('\x20');
    for (var i = row[_0x376c97(0x1)] - 0x1; i > 0x0; i--) {
        if (row[i - 0x1] > row[i]) {
            row[i - 0x1] -= 0x1;
        }
        if (row[i - 0x1] > row[i]) {
            return console[_0x376c97(0x2)]('No');
        }
    }
    console[_0x376c97(0x2)]('Yes');
}
Main(require('fs')[a0_0x26aa3d(0x3)](a0_0x26aa3d(0x4), a0_0x26aa3d(0x5)));
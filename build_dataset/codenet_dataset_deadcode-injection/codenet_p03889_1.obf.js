const a0_0x53410e = a0_0xd3ca;
function Main(input) {
    const _0x58ee01 = a0_0xd3ca;
    const arr = input['split']('');
    if (arr[_0x58ee01(0x0)] % 0x2 !== 0x0) {
        console['log']('No');
        return;
    }
    const a = arr['slice'](0x0, arr[_0x58ee01(0x0)] / 0x2);
    const b = arr['slice'](arr[_0x58ee01(0x0)] / 0x2, arr['length']);
    if (a[_0x58ee01(0x1)]('') === b[_0x58ee01(0x2)]()[_0x58ee01(0x3)](mirror)['join']('')) {
        console['log'](_0x58ee01(0x4));
    } else {
        console['log']('No');
    }
    function mirror(a) {
        switch (a) {
        case 'b':
            return 'd';
        case 'd':
            return 'b';
        case 'p':
            return 'q';
        case 'q':
            return 'p';
        }
    }
}
function a0_0x17ff() {
    const _0x5144db = [
        'length',
        'join',
        'reverse',
        'map',
        'Yes',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x17ff = function () {
        return _0x5144db;
    };
    return a0_0x17ff();
}
function a0_0xd3ca(cJMEyj, key) {
    const stringArray = a0_0x17ff();
    a0_0xd3ca = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd3ca(cJMEyj, key);
}
Main(require('fs')['readFileSync'](a0_0x53410e(0x5), a0_0x53410e(0x6)));
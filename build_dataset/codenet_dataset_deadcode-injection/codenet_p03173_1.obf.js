'use strict';
function a0_0x2e5e(NPnZuu, key) {
    const stringArray = a0_0xd9e8();
    a0_0x2e5e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2e5e(NPnZuu, key);
}
const a0_0x2a9a6b = a0_0x2e5e;
function a0_0xd9e8() {
    const _0x5d09ee = [
        'map',
        'shift',
        'splice',
        'indexOf',
        'apply',
        'push',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xd9e8 = function () {
        return _0x5d09ee;
    };
    return a0_0xd9e8();
}
(function (input) {
    const _0xcdeb20 = a0_0x2e5e;
    input = input['trim']()['split'](/\s+/)[_0xcdeb20(0x0)](x => x - 0x0);
    const N = input[_0xcdeb20(0x1)]();
    const a = input;
    var ans = 0x0;
    while (a['length'] > 0x1) {
        let x = a[_0xcdeb20(0x2)](a[_0xcdeb20(0x3)](Math['min'][_0xcdeb20(0x4)](null, a)), 0x1)[0x0];
        let y = a[_0xcdeb20(0x2)](a[_0xcdeb20(0x3)](Math['min'][_0xcdeb20(0x4)](null, a)), 0x1)[0x0];
        a[_0xcdeb20(0x5)](x + y);
        ans += x + y;
    }
    console[_0xcdeb20(0x6)](ans);
}(require('fs')['readFileSync'](a0_0x2a9a6b(0x7), a0_0x2a9a6b(0x8))));
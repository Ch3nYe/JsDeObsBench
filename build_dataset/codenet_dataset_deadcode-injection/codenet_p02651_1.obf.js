function a0_0xfd16(rvlBZE, key) {
    const stringArray = a0_0x5f5b();
    a0_0xfd16 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xfd16(rvlBZE, key);
}
const a0_0x2dd828 = a0_0xfd16;
function a0_0x5f5b() {
    const _0x1ba904 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5f5b = function () {
        return _0x1ba904;
    };
    return a0_0x5f5b();
}
function Main(input) {
    const _0x3fd822 = a0_0xfd16;
    let t = input['split']('\x0a')[0x0], n, a = new Array(n), s = new Array(n), x = 0x0;
    for (let i = 0x0; i < t; i++) {
        n = input[_0x3fd822(0x0)]('\x0a')[i * 0x3 + 0x1];
        a = input[_0x3fd822(0x0)]('\x0a')[i * 0x3 + 0x2][_0x3fd822(0x0)]('\x20');
        s = input['split']('\x0a')[i * 0x3 + 0x3]['split']('');
        let tmp;
        for (let j = 0x0; j < n; j++) {
            tmp = x ^ a[j];
            if (s[j] == 0x0) {
                if (tmp == 0x0)
                    x = tmp;
            } else
                x = tmp;
        }
        if (x == 0x0) {
            console[_0x3fd822(0x1)](0x0);
        } else
            console['log'](0x1);
        x = 0x0;
    }
}
Main(require('fs')[a0_0x2dd828(0x2)](a0_0x2dd828(0x3), a0_0x2dd828(0x4)));
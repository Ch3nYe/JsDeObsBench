function a0_0x32ce(Gmhstr, key) {
    const stringArray = a0_0x1bee();
    a0_0x32ce = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x32ce(Gmhstr, key);
}
const a0_0x3622f4 = a0_0x32ce;
console['log']((args => {
    const _0x3f3135 = a0_0x32ce;
    const S = args[_0x3f3135(0x0)]()[_0x3f3135(0x1)]``[_0x3f3135(0x2)](c => c[_0x3f3135(0x3)]() - 0x61);
    const N = S[_0x3f3135(0x4)];
    const a = Array(0x1a)[_0x3f3135(0x5)](-0x1);
    for (let i = 0x0; i < 0x1a; i++) {
        let d = 0x0;
        for (let j = 0x0; j < N; j++) {
            d = S[j] === i ? 0x0 : d + 0x1;
            if (a[i] < d)
                a[i] = d;
        }
    }
    return Math[_0x3f3135(0x6)](...a[_0x3f3135(0x7)](v => v >= 0x0));
})(require('fs')['readFileSync'](a0_0x3622f4(0x8), a0_0x3622f4(0x9))));
function a0_0x1bee() {
    const _0x11d30b = [
        'trim',
        'split',
        'map',
        'charCodeAt',
        'length',
        'fill',
        'min',
        'filter',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1bee = function () {
        return _0x11d30b;
    };
    return a0_0x1bee();
}
var a0_0x5cbb00 = a0_0x129e;
function Main(input) {
    var _0x5b3ab4 = a0_0x129e;
    var s, K, ref;
    ref = input[_0x5b3ab4(0x0)]('\x0a'), s = ref[0x0], K = parseInt(ref[0x1]);
    console[_0x5b3ab4(0x1)](Array[_0x5b3ab4(0x2)](s)[_0x5b3ab4(0x3)]((v, i, arr) => {
        var _0x40b2dd = a0_0x129e;
        var code = v[_0x40b2dd(0x4)]();
        if (i === arr[_0x40b2dd(0x5)] - 0x1) {
            code += K % 0x1a;
            code -= code > 0x7a ? 0x1a : 0x0;
            return String[_0x40b2dd(0x6)](code);
        } else {
            if (v === 'a')
                return v;
            return 0x7b - code <= K ? (K -= 0x7b - code, 'a') : v;
        }
    })['join'](''));
}
function a0_0x3e9b() {
    var _0x3e3956 = [
        'split',
        'log',
        'from',
        'map',
        'charCodeAt',
        'length',
        'fromCharCode',
        'readFileSync',
        'utf8'
    ];
    a0_0x3e9b = function () {
        return _0x3e3956;
    };
    return a0_0x3e9b();
}
function a0_0x129e(BUGvVF, key) {
    var stringArray = a0_0x3e9b();
    a0_0x129e = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x129e(BUGvVF, key);
}
Main(require('fs')[a0_0x5cbb00(0x7)]('/dev/stdin', a0_0x5cbb00(0x8)));
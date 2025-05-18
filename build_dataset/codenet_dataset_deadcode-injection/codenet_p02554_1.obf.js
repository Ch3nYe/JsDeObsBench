var a0_0x595b53 = a0_0x44ad;
const mod = 0xa ** 0x9 + 0x7;
function a0_0xaa82() {
    var _0x5c22ac = [
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xaa82 = function () {
        return _0x5c22ac;
    };
    return a0_0xaa82();
}
function pow(x, y) {
    var r = 0x1;
    for (var i = 0x1; i <= y; i++) {
        r = r * x % mod;
    }
    return r;
}
;
function Main(input) {
    var _0x402171 = a0_0x44ad;
    const [N] = input['trim']()[_0x402171(0x0)]('\x20')[_0x402171(0x1)](x => parseInt(x));
    var count = pow(0xa, N) - pow(0x9, N) * 0x2 + pow(0x8, N);
    count = count % mod;
    count = (count + mod) % mod;
    console[_0x402171(0x2)](count);
}
;
function a0_0x44ad(CnYylJ, key) {
    var stringArray = a0_0xaa82();
    a0_0x44ad = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x44ad(CnYylJ, key);
}
Main(require('fs')[a0_0x595b53(0x3)](a0_0x595b53(0x4), a0_0x595b53(0x5)));
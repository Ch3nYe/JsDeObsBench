const a0_0x574932 = a0_0x2b1f;
function main(input) {
    const _0x163426 = a0_0x2b1f;
    const lines = input['split']('\x0a');
    const K = 0x0 | lines[0x0]['split']('\x20')[0x1];
    let arr = new Int32Array(lines[0x1][_0x163426(0x0)]('\x20'));
    let isOk = (t = 0x0, k = 0x0) => {
        const _0xf5d33 = a0_0x2b1f;
        if (_0xf5d33(0x1) !== _0xf5d33(0x1)) {
            res = mid;
            r = mid - 0x1;
        } else {
            arr[_0xf5d33(0x2)](v => {
                let d = 0x0 | v / t;
                if (v === d * t) {
                    d--;
                }
                k -= d;
            });
            return k >= 0x0;
        }
    };
    let l = 0x0;
    let r = Math[_0x163426(0x3)](...arr);
    let mid = 0x0 | (r + l) * 0.5;
    let res = r;
    while (l < r) {
        if (isOk(mid, K)) {
            res = mid;
            r = mid - 0x1;
        } else {
            l = mid + 0x1;
        }
        mid = 0x0 | (r + l) * 0.5;
    }
    return res;
}
exports[a0_0x574932(0x4)] = main;
function a0_0x7860() {
    const _0x56d07e = [
        'split',
        'wLvkw',
        'forEach',
        'max',
        'main',
        'log',
        'trim',
        'argv',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x7860 = function () {
        return _0x56d07e;
    };
    return a0_0x7860();
}
function a0_0x2b1f(FPrRqy, key) {
    const stringArray = a0_0x7860();
    a0_0x2b1f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b1f(FPrRqy, key);
}
function Main(input) {
    const _0x52b6ab = a0_0x2b1f;
    console[_0x52b6ab(0x5)](main(input[_0x52b6ab(0x6)]()));
}
if (process[a0_0x574932(0x7)][0x2] !== 'test') {
    Main(require('fs')[a0_0x574932(0x8)](a0_0x574932(0x9), a0_0x574932(0xa)));
}
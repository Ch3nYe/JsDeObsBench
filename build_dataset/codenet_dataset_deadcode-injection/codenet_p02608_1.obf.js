const a0_0xc87555 = a0_0x2b26;
function Main(input) {
    const _0x336604 = a0_0x2b26;
    const N = Number(input);
    let fn = new Array(N)[_0x336604(0x0)](0x0);
    for (let x = 0x1; x ** 0x2 <= N; x++) {
        for (let y = 0x1; y ** 0x2 <= N; y++) {
            if (x + y > N)
                break;
            for (let z = 0x1; z ** 0x2 <= N; z++) {
                const i = x ** 0x2 + y ** 0x2 + z ** 0x2 + x * y + y * z + z * x;
                if (i > N)
                    break;
                fn[i - 0x1]++;
            }
        }
    }
    console[_0x336604(0x1)](fn[_0x336604(0x2)]('\x0a'));
}
function a0_0x2b26(PqZkkD, key) {
    const stringArray = a0_0x318e();
    a0_0x2b26 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b26(PqZkkD, key);
}
function a0_0x318e() {
    const _0x495a43 = [
        'fill',
        'log',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x318e = function () {
        return _0x495a43;
    };
    return a0_0x318e();
}
Main(require('fs')[a0_0xc87555(0x3)](a0_0xc87555(0x4), a0_0xc87555(0x5)));
function a0_0x245e() {
    const _0x44be5e = [
        'split',
        'log',
        'Yes',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x245e = function () {
        return _0x44be5e;
    };
    return a0_0x245e();
}
const a0_0xb9b9d2 = a0_0x1689;
function a0_0x1689(GZSsef, key) {
    const stringArray = a0_0x245e();
    a0_0x1689 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1689(GZSsef, key);
}
function Main(input) {
    const _0x589452 = a0_0x1689;
    const array = input[_0x589452(0x0)]('\x20');
    let takahashi = Number(array[0x0]);
    let aoki = Number(array[0x2]);
    let count = 0x0;
    let bool = !![];
    while (bool) {
        if (count % 0x2 === 0x0) {
            aoki = aoki - Number(array[0x1]);
            if (aoki <= 0x0) {
                console[_0x589452(0x1)](_0x589452(0x2));
                bool = ![];
            }
        } else {
            takahashi = takahashi - Number(array[0x3]);
            if (takahashi <= 0x0) {
                console[_0x589452(0x1)]('No');
                bool = ![];
            }
        }
        count++;
    }
}
Main(require('fs')['readFileSync'](a0_0xb9b9d2(0x3), a0_0xb9b9d2(0x4)));
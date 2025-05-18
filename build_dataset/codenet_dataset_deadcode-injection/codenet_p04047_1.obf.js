const a0_0x573e4e = a0_0x5047;
function a0_0x1ff2() {
    const _0x34e2f8 = [
        'split',
        'map',
        'sort',
        'log',
        'utf8'
    ];
    a0_0x1ff2 = function () {
        return _0x34e2f8;
    };
    return a0_0x1ff2();
}
function a0_0x5047(mELiZA, key) {
    const stringArray = a0_0x1ff2();
    a0_0x5047 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5047(mELiZA, key);
}
const main = input => {
    const _0x557a56 = a0_0x5047;
    const data = input[_0x557a56(0x0)](/\n/);
    const num = data[0x0];
    const hoge = data[0x1][_0x557a56(0x0)](/\s/)[_0x557a56(0x1)](a => parseInt(a, 0xa))[_0x557a56(0x2)]((a, b) => {
        if (a < b)
            return 0x1;
        if (a > b)
            return -0x1;
        return 0x0;
    });
    var res = 0x0;
    for (i = 0x0; i < num; i++) {
        res += hoge[i * 0x2 + 0x1];
    }
    console[_0x557a56(0x3)](res);
};
main(require('fs')['readFileSync']('/dev/stdin', a0_0x573e4e(0x4)));
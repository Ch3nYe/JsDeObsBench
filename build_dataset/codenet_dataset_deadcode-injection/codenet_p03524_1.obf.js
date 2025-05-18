function a0_0x1919() {
    const _0x57bb4c = [
        'trim',
        'charCodeAt',
        'max',
        'min',
        'log',
        'YES',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1919 = function () {
        return _0x57bb4c;
    };
    return a0_0x1919();
}
function a0_0x2fb5(mvAPCu, key) {
    const stringArray = a0_0x1919();
    a0_0x2fb5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2fb5(mvAPCu, key);
}
const a0_0x4e67d7 = a0_0x2fb5;
function main(input) {
    const _0x3d8c2e = a0_0x2fb5;
    const s = input[_0x3d8c2e(0x0)]();
    let array = s['split']('')['reduce']((a, c) => {
        const _0x5afbbf = a0_0x2fb5;
        a[c[_0x5afbbf(0x1)]() - 'a'[_0x5afbbf(0x1)]()]++;
        return a;
    }, [
        0x0,
        0x0,
        0x0
    ]);
    if (Math[_0x3d8c2e(0x2)](...array) - Math[_0x3d8c2e(0x3)](...array) >= 0x2) {
        console[_0x3d8c2e(0x4)]('NO');
    } else {
        console[_0x3d8c2e(0x4)](_0x3d8c2e(0x5));
    }
}
main(require('fs')[a0_0x4e67d7(0x6)](a0_0x4e67d7(0x7), 'utf8'));
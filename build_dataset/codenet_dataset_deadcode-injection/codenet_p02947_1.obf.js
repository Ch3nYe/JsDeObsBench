function a0_0x24b2() {
    const _0x5515bf = [
        'slice',
        'map',
        'from',
        'join',
        'length',
        'has',
        'get',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x24b2 = function () {
        return _0x5515bf;
    };
    return a0_0x24b2();
}
function a0_0x405b(ObAiqD, key) {
    const stringArray = a0_0x24b2();
    a0_0x405b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x405b(ObAiqD, key);
}
const a0_0x5ed1ec = a0_0x405b;
function main(input) {
    const _0x33ef6e = a0_0x405b;
    const list = input['split']('\x0a')[_0x33ef6e(0x0)](0x1)[_0x33ef6e(0x1)](s => Array[_0x33ef6e(0x2)](s)['sort']()[_0x33ef6e(0x3)](''));
    let totalCount = 0x0;
    const map = new Map();
    for (let i = 0x0; i < list[_0x33ef6e(0x4)]; i++) {
        if (!map[_0x33ef6e(0x5)](list[i])) {
            map['set'](list[i], 0x1);
            continue;
        }
        totalCount += map[_0x33ef6e(0x6)](list[i]);
        map['set'](list[i], map[_0x33ef6e(0x6)](list[i]) + 0x1);
    }
    console[_0x33ef6e(0x7)](totalCount);
}
main(require('fs')[a0_0x5ed1ec(0x8)](a0_0x5ed1ec(0x9), a0_0x5ed1ec(0xa)));
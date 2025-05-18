function a0_0x347f(iosAEY, key) {
    const stringArray = a0_0x3190();
    a0_0x347f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x347f(iosAEY, key);
}
const a0_0x4afe26 = a0_0x347f;
const config = {
    'input': a0_0x4afe26(0x0),
    'newline': '\x0a'
};
function a0_0x3190() {
    const _0x52abe7 = [
        '/dev/stdin',
        'readFileSync',
        'input',
        'utf-8',
        'split',
        'map',
        'length',
        'toString',
        'join'
    ];
    a0_0x3190 = function () {
        return _0x52abe7;
    };
    return a0_0x3190();
}
const line = require('fs')[a0_0x4afe26(0x1)](config[a0_0x4afe26(0x2)], a0_0x4afe26(0x3))[a0_0x4afe26(0x4)](config['newline']);
const list = line[0x1][a0_0x4afe26(0x4)]('\x20')[a0_0x4afe26(0x5)](x => parseInt(x));
const partition = arr => {
    const _0x119683 = a0_0x347f;
    const x = arr[arr[_0x119683(0x6)] - 0x1];
    const result = [...arr];
    let i = -0x1;
    for (let j = 0x0; j < arr[_0x119683(0x6)] - 0x1; j++) {
        if (result[j] <= x) {
            i++;
            const tmp = result[i];
            result[i] = result[j];
            result[j] = tmp;
        }
    }
    const tmp = result[i + 0x1];
    result[i + 0x1] = result[arr[_0x119683(0x6)] - 0x1];
    result[arr[_0x119683(0x6)] - 0x1] = tmp;
    return [
        i + 0x1,
        result
    ];
};
const res = partition(list);
console['log'](res[0x1][a0_0x4afe26(0x5)]((x, i) => i === res[0x0] ? '[' + x + ']' : x[a0_0x4afe26(0x7)]())[a0_0x4afe26(0x8)]('\x20'));
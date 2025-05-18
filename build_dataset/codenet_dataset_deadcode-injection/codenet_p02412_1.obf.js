function a0_0x3ab9(VkWCoh, key) {
    const stringArray = a0_0x1335();
    a0_0x3ab9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ab9(VkWCoh, key);
}
const a0_0x56bf49 = a0_0x3ab9;
function a0_0x1335() {
    const _0x10af99 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'length',
        'map'
    ];
    a0_0x1335 = function () {
        return _0x10af99;
    };
    return a0_0x1335();
}
const input = require('fs')[a0_0x56bf49(0x0)](a0_0x56bf49(0x1), a0_0x56bf49(0x2))[a0_0x56bf49(0x3)](/\n/);
for (let i = 0x0; i < input[a0_0x56bf49(0x4)]; i++) {
    let [n, x] = input[i][a0_0x56bf49(0x3)]('\x20')[a0_0x56bf49(0x5)](Number);
    if (n === 0x0 && x === 0x0) {
        break;
    }
    let count = 0x0;
    for (let j = 0x1; j <= n; j++) {
        for (let k = 0x1; k <= n; k++) {
            if (j === k) {
                break;
            }
            for (let l = 0x1; l <= n; l++) {
                if (j === l || k === l || j === k) {
                    break;
                }
                if (j + k + l === x) {
                    count++;
                }
            }
        }
    }
    console['log'](count);
}
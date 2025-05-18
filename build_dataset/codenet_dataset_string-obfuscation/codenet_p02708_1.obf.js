function a0_0x5ee2(ymAPkM, key) {
    const stringArray = a0_0x46f6();
    a0_0x5ee2 = function (index, key) {
        index = index - 0x76;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5ee2(ymAPkM, key);
}
const a0_0x502524 = a0_0x5ee2;
(function (stringArrayFunction, comparisonValue) {
    const _0x1b90b4 = a0_0x5ee2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1b90b4(0x80)) / 0x1 * (parseInt(_0x1b90b4(0x7b)) / 0x2) + parseInt(_0x1b90b4(0x7d)) / 0x3 + parseInt(_0x1b90b4(0x78)) / 0x4 * (-parseInt(_0x1b90b4(0x82)) / 0x5) + -parseInt(_0x1b90b4(0x7f)) / 0x6 * (parseInt(_0x1b90b4(0x79)) / 0x7) + -parseInt(_0x1b90b4(0x81)) / 0x8 * (parseInt(_0x1b90b4(0x7c)) / 0x9) + parseInt(_0x1b90b4(0x87)) / 0xa + parseInt(_0x1b90b4(0x86)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x46f6, 0x59ee3));
function a0_0x46f6() {
    const _0x2d92a1 = [
        '50034PTVTDK',
        '85818yOUFsG',
        '40YRLQAj',
        '366070sGknwn',
        'utf8',
        'MYTEST',
        'log',
        '13649933sqUrjf',
        '1764900nZePgC',
        'test',
        '/dev/stdin',
        'map',
        'env',
        '24nSoJEq',
        '21SyvbPZ',
        'split',
        '6aiDzud',
        '891747vRRRfz',
        '504396gVnDij',
        'readFileSync'
    ];
    a0_0x46f6 = function () {
        return _0x2d92a1;
    };
    return a0_0x46f6();
}
const main = input => {
    const _0x442710 = a0_0x5ee2;
    const mod = 0xa ** 0x9 + 0x7;
    const [n, k] = input['trim']()[_0x442710(0x7a)]('\x20')[_0x442710(0x76)](Number);
    let ans = 0x0;
    for (let i = k; i <= n + 0x1; i++) {
        const s_sum = (i - 0x1) * i / 0x2;
        const b_f = n - i + 0x1;
        const b_sum = (b_f + n) * i / 0x2;
        ans += b_sum - s_sum + 0x1;
    }
    return console[_0x442710(0x85)]((ans % mod + mod) % mod);
};
process[a0_0x502524(0x77)][a0_0x502524(0x84)] ? process['env'][a0_0x502524(0x84)] === a0_0x502524(0x88) ? test() : main(require('fs')[a0_0x502524(0x7e)]('dev/stdin', a0_0x502524(0x83))) : main(require('fs')[a0_0x502524(0x7e)](a0_0x502524(0x89), a0_0x502524(0x83)));
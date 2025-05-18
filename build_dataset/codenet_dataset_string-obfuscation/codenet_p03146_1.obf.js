const a0_0x22b7b1 = a0_0x5b86;
(function (stringArrayFunction, comparisonValue) {
    const _0x2ccbea = a0_0x5b86;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2ccbea(0x15c)) / 0x1 + parseInt(_0x2ccbea(0x155)) / 0x2 + parseInt(_0x2ccbea(0x158)) / 0x3 + parseInt(_0x2ccbea(0x15a)) / 0x4 * (-parseInt(_0x2ccbea(0x15b)) / 0x5) + parseInt(_0x2ccbea(0x15d)) / 0x6 + parseInt(_0x2ccbea(0x153)) / 0x7 + parseInt(_0x2ccbea(0x15e)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c61, 0xb182b));
const collatz = n => {
    if (n % 0x2 === 0x0) {
        n /= 0x2;
    } else {
        n = 0x3 * n + 0x1;
    }
    return n;
};
const main = stdin => {
    const _0x211f0b = a0_0x5b86;
    const input = stdin[_0x211f0b(0x157)]()[_0x211f0b(0x154)]('\x0a');
    const s = parseInt(input[0x0]);
    if (s === 0x1 || s === 0x2 || s === 0x4) {
        console[_0x211f0b(0x152)](0x4);
        return;
    }
    let tmp = s;
    let first = 0x0;
    let second = 0x0;
    for (let i = 0x1;; i++) {
        if (tmp === 0x4 && first === 0x0) {
            first = i;
        } else if (tmp === 0x4 && first !== 0x0) {
            second = i;
            break;
        }
        tmp = collatz(tmp);
    }
    console[_0x211f0b(0x152)](second);
};
function a0_0x2c61() {
    const _0x4be6fc = [
        'log',
        '7826413RkWauP',
        'split',
        '1622086CrllBq',
        '/dev/stdin',
        'trim',
        '1222848dEdyTz',
        'utf8',
        '116QHqvEE',
        '192315UxnRsc',
        '1281234bkLWOa',
        '2514576zWARwR',
        '2943440REsCdh',
        'readFileSync'
    ];
    a0_0x2c61 = function () {
        return _0x4be6fc;
    };
    return a0_0x2c61();
}
function a0_0x5b86(KvmSmP, key) {
    const stringArray = a0_0x2c61();
    a0_0x5b86 = function (index, key) {
        index = index - 0x152;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5b86(KvmSmP, key);
}
main(require('fs')[a0_0x22b7b1(0x15f)](a0_0x22b7b1(0x156), a0_0x22b7b1(0x159)));
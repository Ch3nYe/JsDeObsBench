function a0_0x1e25(hjctRp, key) {
    const stringArray = a0_0x1e43();
    a0_0x1e25 = function (index, key) {
        index = index - 0xac;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1e25(hjctRp, key);
}
const a0_0x299d18 = a0_0x1e25;
function a0_0x1e43() {
    const _0x58f482 = [
        'length',
        '/dev/stdin',
        '3WmNeHb',
        '45xbLKNW',
        'readFileSync',
        '14pbjHbE',
        'split',
        '3746evyZrm',
        '385746dGradW',
        '17254611JSfLBK',
        '1000430IwXKod',
        'utf8',
        '210032jPJOLn',
        '3865232fCSMIf',
        '249dXocRb',
        '87140xkjMTe'
    ];
    a0_0x1e43 = function () {
        return _0x58f482;
    };
    return a0_0x1e43();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1e609e = a0_0x1e25;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1e609e(0xac)) / 0x1 * (-parseInt(_0x1e609e(0xb5)) / 0x2) + parseInt(_0x1e609e(0xb0)) / 0x3 * (parseInt(_0x1e609e(0xba)) / 0x4) + -parseInt(_0x1e609e(0xb8)) / 0x5 + parseInt(_0x1e609e(0xb6)) / 0x6 * (parseInt(_0x1e609e(0xb3)) / 0x7) + -parseInt(_0x1e609e(0xbb)) / 0x8 + -parseInt(_0x1e609e(0xb1)) / 0x9 * (-parseInt(_0x1e609e(0xad)) / 0xa) + parseInt(_0x1e609e(0xb7)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e43, 0x9d23c));
function main(input) {
    const _0x2c1a99 = a0_0x1e25;
    input = input['trim']();
    let list = input[_0x2c1a99(0xb4)]('');
    let answer = 0x0;
    for (let i = 0x0; i < list[_0x2c1a99(0xae)]; i++) {
        if (list[i] === 'R') {
            if (answer === 0x0) {
                answer++;
            } else if (list[i - 0x1] === 'R') {
                answer++;
            }
        }
    }
    console['log'](answer);
}
main(require('fs')[a0_0x299d18(0xb2)](a0_0x299d18(0xaf), a0_0x299d18(0xb9)));
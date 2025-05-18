function a0_0x4c90(jWqscI, key) {
    const stringArray = a0_0x37c7();
    a0_0x4c90 = function (index, key) {
        index = index - 0xf7;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4c90(jWqscI, key);
}
function a0_0x37c7() {
    const _0x29b0c4 = [
        'readFileSync',
        '2410vpuzEv',
        '/dev/stdin',
        '9425133pJkXYE',
        '2416gtmPID',
        '28KpGdWL',
        '462238NJPHWC',
        'log',
        '13288740sjDDLy',
        '1481214CrBSjn',
        '363954acHGrj',
        '6398888aLxxLQ',
        '14SOOnSW'
    ];
    a0_0x37c7 = function () {
        return _0x29b0c4;
    };
    return a0_0x37c7();
}
const a0_0xee5400 = a0_0x4c90;
(function (stringArrayFunction, comparisonValue) {
    const _0x1bf7fc = a0_0x4c90;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1bf7fc(0xfd)) / 0x1 + parseInt(_0x1bf7fc(0x103)) / 0x2 * (parseInt(_0x1bf7fc(0x101)) / 0x3) + -parseInt(_0x1bf7fc(0xfb)) / 0x4 * (parseInt(_0x1bf7fc(0xf8)) / 0x5) + -parseInt(_0x1bf7fc(0x100)) / 0x6 * (-parseInt(_0x1bf7fc(0xfc)) / 0x7) + -parseInt(_0x1bf7fc(0x102)) / 0x8 + -parseInt(_0x1bf7fc(0xfa)) / 0x9 + parseInt(_0x1bf7fc(0xff)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x37c7, 0x89f78));
function main(input) {
    const _0x1c250c = a0_0x4c90;
    const n = parseInt(input, 0xa);
    let sum = 0x0;
    for (let i = 0x1; i <= n; i++) {
        sum += i;
    }
    console[_0x1c250c(0xfe)](sum);
}
main(require('fs')[a0_0xee5400(0xf7)](a0_0xee5400(0xf9), 'utf8'));
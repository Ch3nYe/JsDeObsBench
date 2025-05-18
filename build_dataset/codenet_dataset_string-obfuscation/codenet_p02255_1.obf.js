function a0_0x4467(yPEpeI, key) {
    const stringArray = a0_0x1af8();
    a0_0x4467 = function (index, key) {
        index = index - 0x15a;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4467(yPEpeI, key);
}
const a0_0x3593d4 = a0_0x4467;
function a0_0x1af8() {
    const _0x3ea689 = [
        '253lRgtdV',
        '3377586btrHAt',
        '2588648JrmaaU',
        '115tBMgPd',
        '763188nEGOtx',
        '2018511WxQdMN',
        '244vYMavJ',
        '98586UPUtHX',
        '10QDMPgn',
        '7LqSXMb',
        'utf8',
        '9283yhsqgK',
        '/dev/stdin',
        '4ltdVMp',
        'split',
        '13zyixYK',
        '12481742KFAgBt',
        'join',
        'readFileSync'
    ];
    a0_0x1af8 = function () {
        return _0x3ea689;
    };
    return a0_0x1af8();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x405ece = a0_0x4467;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x405ece(0x165)) / 0x1 * (-parseInt(_0x405ece(0x160)) / 0x2) + -parseInt(_0x405ece(0x15b)) / 0x3 * (parseInt(_0x405ece(0x167)) / 0x4) + -parseInt(_0x405ece(0x15d)) / 0x5 * (parseInt(_0x405ece(0x161)) / 0x6) + parseInt(_0x405ece(0x163)) / 0x7 * (parseInt(_0x405ece(0x15c)) / 0x8) + parseInt(_0x405ece(0x15f)) / 0x9 * (parseInt(_0x405ece(0x162)) / 0xa) + parseInt(_0x405ece(0x15a)) / 0xb * (parseInt(_0x405ece(0x15e)) / 0xc) + parseInt(_0x405ece(0x169)) / 0xd * (-parseInt(_0x405ece(0x16a)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1af8, 0xb693b));
function main(lines) {
    const _0x57f613 = a0_0x4467;
    const n = lines[_0x57f613(0x168)]('\x0a')[0x0];
    const An = lines['split']('\x0a')[0x1][_0x57f613(0x168)]('\x20')['map'](Number);
    console['log'](An[_0x57f613(0x16b)]('\x20'));
    for (let i = 0x1; i < n; i++) {
        value = An[i];
        let j = i - 0x1;
        while (j >= 0x0 && value < An[j]) {
            An[j + 0x1] = An[j];
            j--;
        }
        An[j + 0x1] = value;
        console['log'](An[_0x57f613(0x16b)]('\x20'));
    }
}
main(require('fs')[a0_0x3593d4(0x16c)](a0_0x3593d4(0x166), a0_0x3593d4(0x164)));
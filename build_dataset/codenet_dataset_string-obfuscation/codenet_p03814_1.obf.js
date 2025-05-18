const a0_0x422050 = a0_0x1df0;
(function (stringArrayFunction, comparisonValue) {
    const _0x5c31b3 = a0_0x1df0;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5c31b3(0x92)) / 0x1 + -parseInt(_0x5c31b3(0x91)) / 0x2 + parseInt(_0x5c31b3(0x90)) / 0x3 * (parseInt(_0x5c31b3(0x96)) / 0x4) + parseInt(_0x5c31b3(0x8c)) / 0x5 * (-parseInt(_0x5c31b3(0x89)) / 0x6) + -parseInt(_0x5c31b3(0x93)) / 0x7 + -parseInt(_0x5c31b3(0x8b)) / 0x8 * (-parseInt(_0x5c31b3(0x8f)) / 0x9) + parseInt(_0x5c31b3(0x8a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3d36, 0x8359f));
function a0_0x3d36() {
    const _0x35cdfe = [
        '240TOmaMf',
        'utf8',
        'split',
        '63yfjVDm',
        '3651qQzLQC',
        '1838286YVkMfS',
        '22089wWdmlw',
        '7397068mNzpIP',
        'readFileSync',
        '/dev/stdin',
        '1380GVshLA',
        '16266ngcxuV',
        '14594890UUimrb',
        '848648BiTtvf'
    ];
    a0_0x3d36 = function () {
        return _0x35cdfe;
    };
    return a0_0x3d36();
}
function a0_0x1df0(hOjtOO, key) {
    const stringArray = a0_0x3d36();
    a0_0x1df0 = function (index, key) {
        index = index - 0x89;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1df0(hOjtOO, key);
}
function main(input) {
    const _0x17d630 = a0_0x1df0;
    const S = input[_0x17d630(0x8e)]('');
    let a_idx;
    let z_idx;
    for (let i = 0x0; i < S['length']; i++) {
        if (S[i] === 'A' && !a_idx) {
            a_idx = i;
        }
        if (S[i] === 'Z') {
            z_idx = i;
        }
    }
    console['log'](z_idx - a_idx + 0x1);
}
main(require('fs')[a0_0x422050(0x94)](a0_0x422050(0x95), a0_0x422050(0x8d)));
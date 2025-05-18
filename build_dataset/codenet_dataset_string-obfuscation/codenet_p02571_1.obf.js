const a0_0x37177e = a0_0x5b90;
(function (stringArrayFunction, comparisonValue) {
    const _0x565a54 = a0_0x5b90;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x565a54(0x13b)) / 0x1 + -parseInt(_0x565a54(0x141)) / 0x2 + -parseInt(_0x565a54(0x143)) / 0x3 * (-parseInt(_0x565a54(0x13f)) / 0x4) + parseInt(_0x565a54(0x13c)) / 0x5 + parseInt(_0x565a54(0x144)) / 0x6 + parseInt(_0x565a54(0x145)) / 0x7 + -parseInt(_0x565a54(0x140)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1201, 0xd87ef));
function a0_0x1201() {
    const _0x9bcbc9 = [
        '5085870QBVTJV',
        '4903976FnkCMJ',
        'trim',
        '/dev/stdin',
        '251829XxADkg',
        '7818865oGTruh',
        'log',
        'length',
        '224syEieD',
        '28915824oABHmD',
        '618548benbyw',
        'utf8',
        '77502rdSIsV'
    ];
    a0_0x1201 = function () {
        return _0x9bcbc9;
    };
    return a0_0x1201();
}
function a0_0x5b90(CVtXHZ, key) {
    const stringArray = a0_0x1201();
    a0_0x5b90 = function (index, key) {
        index = index - 0x13b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5b90(CVtXHZ, key);
}
(input => {
    const _0xfb7c97 = a0_0x5b90;
    const [S, T] = input[_0xfb7c97(0x146)]()['split']('\x0a');
    const sl = S[_0xfb7c97(0x13e)];
    const tl = T[_0xfb7c97(0x13e)];
    const range = sl - tl;
    let min = tl;
    for (let i = 0x0; i < range; i++) {
        const target = S['slice'](i, tl + i);
        let diff = 0x0;
        for (let j = 0x0; j < tl; j++) {
            if (target[j] !== T[j])
                diff += 0x1;
        }
        if (min > diff) {
            min = diff;
        }
    }
    console[_0xfb7c97(0x13d)](min);
})(require('fs')['readFileSync'](a0_0x37177e(0x147), a0_0x37177e(0x142)));
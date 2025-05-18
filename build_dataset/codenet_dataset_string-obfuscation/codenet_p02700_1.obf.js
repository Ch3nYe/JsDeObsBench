const a0_0x4b53f5 = a0_0x1870;
function a0_0x307b() {
    const _0xfe1307 = [
        '11xqGYSo',
        '1031300BnaOvu',
        '3280QzreYX',
        '454180UVqTap',
        'Yes',
        '7zfNwEs',
        '5412wfgPsO',
        '26zqQOYr',
        'utf8',
        '9vlZMsy',
        'log',
        '3970482oKGBBF',
        '7758BADLIA',
        '1200145pcUnyu',
        '36985UaMVYR',
        'readFileSync',
        '28379osxkiO'
    ];
    a0_0x307b = function () {
        return _0xfe1307;
    };
    return a0_0x307b();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x7bbeb2 = a0_0x1870;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x7bbeb2(0x194)) / 0x1 * (parseInt(_0x7bbeb2(0x19e)) / 0x2) + -parseInt(_0x7bbeb2(0x1a0)) / 0x3 * (parseInt(_0x7bbeb2(0x198)) / 0x4) + -parseInt(_0x7bbeb2(0x193)) / 0x5 + -parseInt(_0x7bbeb2(0x1a2)) / 0x6 * (-parseInt(_0x7bbeb2(0x19c)) / 0x7) + parseInt(_0x7bbeb2(0x199)) / 0x8 * (parseInt(_0x7bbeb2(0x1a3)) / 0x9) + -parseInt(_0x7bbeb2(0x19a)) / 0xa * (parseInt(_0x7bbeb2(0x197)) / 0xb) + parseInt(_0x7bbeb2(0x19d)) / 0xc * (parseInt(_0x7bbeb2(0x196)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x307b, 0x704c5));
function a0_0x1870(EzryOW, key) {
    const stringArray = a0_0x307b();
    a0_0x1870 = function (index, key) {
        index = index - 0x193;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1870(EzryOW, key);
}
function Main(input) {
    const _0x1f674f = a0_0x1870;
    const array = input['split']('\x20');
    let takahashi = Number(array[0x0]);
    let aoki = Number(array[0x2]);
    let count = 0x0;
    let bool = !![];
    while (bool) {
        if (count % 0x2 === 0x0) {
            aoki = aoki - Number(array[0x1]);
            if (aoki <= 0x0) {
                console[_0x1f674f(0x1a1)](_0x1f674f(0x19b));
                bool = ![];
            }
        } else {
            takahashi = takahashi - Number(array[0x3]);
            if (takahashi <= 0x0) {
                console[_0x1f674f(0x1a1)]('No');
                bool = ![];
            }
        }
        count++;
    }
}
Main(require('fs')[a0_0x4b53f5(0x195)]('/dev/stdin', a0_0x4b53f5(0x19f)));
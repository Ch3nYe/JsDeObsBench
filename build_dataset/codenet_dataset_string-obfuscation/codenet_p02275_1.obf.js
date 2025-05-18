function a0_0x69c9(fsALND, key) {
    const stringArray = a0_0xeafd();
    a0_0x69c9 = function (index, key) {
        index = index - 0x142;
        let value = stringArray[index];
        return value;
    };
    return a0_0x69c9(fsALND, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x4b6562 = a0_0x69c9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4b6562(0x14e)) / 0x1 * (parseInt(_0x4b6562(0x150)) / 0x2) + parseInt(_0x4b6562(0x148)) / 0x3 + parseInt(_0x4b6562(0x14f)) / 0x4 * (parseInt(_0x4b6562(0x143)) / 0x5) + parseInt(_0x4b6562(0x14c)) / 0x6 + -parseInt(_0x4b6562(0x146)) / 0x7 + -parseInt(_0x4b6562(0x149)) / 0x8 + parseInt(_0x4b6562(0x144)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xeafd, 0x9996b));
(function main() {
    const _0x3a3edc = a0_0x69c9;
    const lines = require('fs')[_0x3a3edc(0x14d)](_0x3a3edc(0x142), _0x3a3edc(0x147))['trim']()['split']('\x0a');
    const n = Number(lines[_0x3a3edc(0x14b)]());
    const arr = lines[_0x3a3edc(0x14b)]()['split']('\x20')[_0x3a3edc(0x145)](Number);
    const k = 0x2710;
    let cnt_arr = [];
    for (let i = 0x0; i <= k; i++)
        cnt_arr[i] = 0x0;
    for (let i = 0x0; i < n; i++)
        cnt_arr[arr[i]]++;
    for (let i = 0x1; i <= k; i++)
        cnt_arr[i] += cnt_arr[i - 0x1];
    let out_arr = [];
    for (let i = n - 0x1; i >= 0x0; i--)
        out_arr[--cnt_arr[arr[i]]] = arr[i];
    console[_0x3a3edc(0x14a)](out_arr[_0x3a3edc(0x151)]('\x20'));
}());
function a0_0xeafd() {
    const _0x542035 = [
        '3007764qhNiKD',
        'map',
        '3554509YdrQoH',
        'utf8',
        '1588182BvdBRr',
        '3181488ArbJVZ',
        'log',
        'shift',
        '1273248HxUMpk',
        'readFileSync',
        '40931jryZCC',
        '16YrUBBq',
        '4lxuOnx',
        'join',
        '/dev/stdin',
        '675795wgXAfa'
    ];
    a0_0xeafd = function () {
        return _0x542035;
    };
    return a0_0xeafd();
}
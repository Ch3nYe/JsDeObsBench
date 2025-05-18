const a0_0x3bc4b4 = a0_0x50ac;
(function (stringArrayFunction, comparisonValue) {
    const _0x2f5367 = a0_0x50ac;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2f5367(0x1e2)) / 0x1 * (parseInt(_0x2f5367(0x1dd)) / 0x2) + -parseInt(_0x2f5367(0x1d4)) / 0x3 * (parseInt(_0x2f5367(0x1db)) / 0x4) + parseInt(_0x2f5367(0x1d8)) / 0x5 + parseInt(_0x2f5367(0x1de)) / 0x6 * (-parseInt(_0x2f5367(0x1d6)) / 0x7) + parseInt(_0x2f5367(0x1e1)) / 0x8 * (-parseInt(_0x2f5367(0x1d9)) / 0x9) + parseInt(_0x2f5367(0x1d7)) / 0xa + parseInt(_0x2f5367(0x1df)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3b9c, 0xdb97e));
function a0_0x3b9c() {
    const _0x329d97 = [
        '875131jRAivb',
        'utf8',
        'log',
        '341283XdiVph',
        'readFileSync',
        '7teIqqi',
        '13744970BVOEEI',
        '7672680PkGJQL',
        '189vRRXmQ',
        '/dev/stdin',
        '52CJckQl',
        'map',
        '2LDeeVl',
        '3580350nEvqYa',
        '17382431YyQTFg',
        'Yes',
        '243448krDAfh'
    ];
    a0_0x3b9c = function () {
        return _0x329d97;
    };
    return a0_0x3b9c();
}
function main(input) {
    const _0x5564ad = a0_0x50ac;
    let numarray = input['split']('\x20')[_0x5564ad(0x1dc)](Number);
    let W, H, x, y, r;
    W = numarray[0x0];
    H = numarray[0x1];
    x = numarray[0x2];
    y = numarray[0x3];
    r = numarray[0x4];
    if (x < r || y < r || x + r > W || y + r > H) {
        console[_0x5564ad(0x1d3)]('No');
    } else {
        console['log'](_0x5564ad(0x1e0));
    }
}
function a0_0x50ac(GVIwPz, key) {
    const stringArray = a0_0x3b9c();
    a0_0x50ac = function (index, key) {
        index = index - 0x1d3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x50ac(GVIwPz, key);
}
main(require('fs')[a0_0x3bc4b4(0x1d5)](a0_0x3bc4b4(0x1da), a0_0x3bc4b4(0x1e3)));
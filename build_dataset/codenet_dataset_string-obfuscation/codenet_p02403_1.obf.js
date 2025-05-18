const a0_0x55f7a8 = a0_0x228e;
(function (stringArrayFunction, comparisonValue) {
    const _0x3b5c31 = a0_0x228e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3b5c31(0x131)) / 0x1 + -parseInt(_0x3b5c31(0x13a)) / 0x2 * (parseInt(_0x3b5c31(0x135)) / 0x3) + -parseInt(_0x3b5c31(0x12f)) / 0x4 + -parseInt(_0x3b5c31(0x13c)) / 0x5 + -parseInt(_0x3b5c31(0x12e)) / 0x6 * (-parseInt(_0x3b5c31(0x136)) / 0x7) + parseInt(_0x3b5c31(0x137)) / 0x8 + parseInt(_0x3b5c31(0x133)) / 0x9 * (parseInt(_0x3b5c31(0x130)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x299c, 0xad017));
let fs = require('fs');
function a0_0x228e(VSWWan, key) {
    const stringArray = a0_0x299c();
    a0_0x228e = function (index, key) {
        index = index - 0x12b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x228e(VSWWan, key);
}
function a0_0x299c() {
    const _0x3d7f3a = [
        'argv',
        '12szTtyS',
        '7inYMge',
        '11087064pUAgYb',
        '/dev/stdin',
        'readFile',
        '679342Qlptgy',
        'readFileSync',
        '6886665OgaIsw',
        'utf8',
        'log',
        'length',
        '4208208OMFCwk',
        '5126516DaJcUy',
        '3590JNuKFZ',
        '972189GnOCqO',
        'map',
        '41787YpOaSs'
    ];
    a0_0x299c = function () {
        return _0x3d7f3a;
    };
    return a0_0x299c();
}
const fuga = data => {
    const _0x157deb = a0_0x228e;
    lines = data['split']('\x0a');
    lines = lines[_0x157deb(0x132)](line => line['split']('\x20'));
    lines = lines[_0x157deb(0x132)](line => line[_0x157deb(0x132)](elem => parseInt(elem)));
    for (let i = 0x0; i < lines[_0x157deb(0x12d)]; i++) {
        let str = '';
        if (!lines[i][0x0])
            return;
        for (let j = 0x0; j < lines[i][0x0]; j++) {
            for (let k = 0x0; k < lines[i][0x1]; k++) {
                str += '#';
            }
            console['log'](str);
            str = '';
        }
        console[_0x157deb(0x12c)]('');
    }
};
const readFile = route => {
    const _0x5c6079 = a0_0x228e;
    fs[_0x5c6079(0x139)](route, 'utf8', (err, data) => {
        fuga(data);
    });
};
const readFileWithoutArg = () => {
    const _0x5ad463 = a0_0x228e;
    const data = require('fs')[_0x5ad463(0x13b)](_0x5ad463(0x138), _0x5ad463(0x12b));
    fuga(data);
};
let sampleInputPath = '';
if (process['argv'][a0_0x55f7a8(0x12d)] > 0x2) {
    sampleInputPath = process[a0_0x55f7a8(0x134)][0x2];
    readFile(sampleInputPath);
} else {
    readFileWithoutArg();
}
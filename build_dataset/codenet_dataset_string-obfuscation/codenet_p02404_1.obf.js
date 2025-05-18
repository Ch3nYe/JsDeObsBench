const a0_0x967f80 = a0_0x18fd;
function a0_0x18fd(HUHQek, key) {
    const stringArray = a0_0x484c();
    a0_0x18fd = function (index, key) {
        index = index - 0xb2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x18fd(HUHQek, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0xf05ef2 = a0_0x18fd;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xf05ef2(0xbf)) / 0x1 * (-parseInt(_0xf05ef2(0xc4)) / 0x2) + -parseInt(_0xf05ef2(0xc0)) / 0x3 + parseInt(_0xf05ef2(0xba)) / 0x4 * (parseInt(_0xf05ef2(0xb4)) / 0x5) + -parseInt(_0xf05ef2(0xbc)) / 0x6 * (-parseInt(_0xf05ef2(0xb7)) / 0x7) + parseInt(_0xf05ef2(0xc8)) / 0x8 + parseInt(_0xf05ef2(0xb9)) / 0x9 * (-parseInt(_0xf05ef2(0xc1)) / 0xa) + -parseInt(_0xf05ef2(0xc6)) / 0xb * (parseInt(_0xf05ef2(0xbe)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x484c, 0x6fb27));
let content = '';
process[a0_0x967f80(0xb2)][a0_0x967f80(0xbd)]();
process['stdin'][a0_0x967f80(0xc3)](a0_0x967f80(0xc5));
function a0_0x484c() {
    const _0x20be5f = [
        'end',
        '477dCVKRa',
        '30044UZyAoM',
        'split',
        '2005986eLtdby',
        'resume',
        '6540byTVJJ',
        '26WdUMyb',
        '836862QqGaex',
        '163810oGybfV',
        'data',
        'setEncoding',
        '24392ZmvyHW',
        'utf8',
        '17963dFLyaM',
        'log',
        '6663160GodOTr',
        'stdin',
        'trim',
        '450rIANLp',
        'repeat',
        'map',
        '14eFzQnr'
    ];
    a0_0x484c = function () {
        return _0x20be5f;
    };
    return a0_0x484c();
}
process[a0_0x967f80(0xb2)]['on'](a0_0x967f80(0xc2), buf => {
    content += buf;
});
process[a0_0x967f80(0xb2)]['on'](a0_0x967f80(0xb8), () => {
    const _0xfad5d4 = a0_0x967f80;
    const rects = content[_0xfad5d4(0xb3)]()[_0xfad5d4(0xbb)]('\x0a')[_0xfad5d4(0xb6)](line => line[_0xfad5d4(0xbb)]('\x20')['map'](n => parseInt(n, 0xa)));
    for (const rect of rects) {
        if (rect[0x0] !== 0x0 || rect[0x1] !== 0x0) {
            console[_0xfad5d4(0xc7)](drawReact(rect));
        }
    }
});
const drawReact = ([h, w]) => {
    const _0x2cafc3 = a0_0x967f80;
    const hline = '#'[_0x2cafc3(0xb5)](w) + '\x0a';
    return hline + ('#' + '.'[_0x2cafc3(0xb5)](w - 0x2) + '#\x0a')[_0x2cafc3(0xb5)](h - 0x2) + hline;
};
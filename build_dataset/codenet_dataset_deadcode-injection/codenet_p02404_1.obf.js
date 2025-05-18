const a0_0x1b69f7 = a0_0x375c;
let content = '';
process[a0_0x1b69f7(0x0)][a0_0x1b69f7(0x1)]();
function a0_0x11db() {
    const _0x37deb7 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'data',
        'trim',
        'map',
        'split',
        'log',
        'repeat'
    ];
    a0_0x11db = function () {
        return _0x37deb7;
    };
    return a0_0x11db();
}
process[a0_0x1b69f7(0x0)][a0_0x1b69f7(0x2)](a0_0x1b69f7(0x3));
process[a0_0x1b69f7(0x0)]['on'](a0_0x1b69f7(0x4), buf => {
    content += buf;
});
process[a0_0x1b69f7(0x0)]['on']('end', () => {
    const _0x47ff7b = a0_0x375c;
    const rects = content[_0x47ff7b(0x5)]()['split']('\x0a')[_0x47ff7b(0x6)](line => line[_0x47ff7b(0x7)]('\x20')[_0x47ff7b(0x6)](n => parseInt(n, 0xa)));
    for (const rect of rects) {
        if (rect[0x0] !== 0x0 || rect[0x1] !== 0x0) {
            console[_0x47ff7b(0x8)](drawReact(rect));
        }
    }
});
function a0_0x375c(DPLZrp, key) {
    const stringArray = a0_0x11db();
    a0_0x375c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x375c(DPLZrp, key);
}
const drawReact = ([h, w]) => {
    const _0x30fc9f = a0_0x375c;
    const hline = '#'[_0x30fc9f(0x9)](w) + '\x0a';
    return hline + ('#' + '.'[_0x30fc9f(0x9)](w - 0x2) + '#\x0a')[_0x30fc9f(0x9)](h - 0x2) + hline;
};
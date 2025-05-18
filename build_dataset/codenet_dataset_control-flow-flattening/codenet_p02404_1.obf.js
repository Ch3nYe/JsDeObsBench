let content = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', buf => {
    content += buf;
});
process['stdin']['on']('end', () => {
    const atrBbt = {
        'tVMVf': function (x, y) {
            return x !== y;
        },
        'qMHJw': function (callee, param1) {
            return callee(param1);
        }
    };
    const rects = content['trim']()['split']('\x0a')['map'](line => line['split']('\x20')['map'](n => parseInt(n, 0xa)));
    for (const rect of rects) {
        if (atrBbt['tVMVf'](rect[0x0], 0x0) || rect[0x1] !== 0x0) {
            console['log'](atrBbt['qMHJw'](drawReact, rect));
        }
    }
});
const drawReact = ([h, w]) => {
    const dHfPSR = {
        'oIpff': function (x, y) {
            return x + y;
        },
        'FEgVs': function (x, y) {
            return x - y;
        },
        'dviqo': function (x, y) {
            return x - y;
        }
    };
    const hline = dHfPSR['oIpff']('#'['repeat'](w), '\x0a');
    return dHfPSR['oIpff'](hline + ('#' + '.'['repeat'](dHfPSR['FEgVs'](w, 0x2)) + '#\x0a')['repeat'](dHfPSR['dviqo'](h, 0x2)), hline);
};
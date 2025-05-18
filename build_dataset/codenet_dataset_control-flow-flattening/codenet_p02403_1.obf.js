let fs = require('fs');
const fuga = data => {
    const SOeIge = {
        'uendv': function (x, y) {
            return x < y;
        },
        'ApzVr': function (x, y) {
            return x < y;
        }
    };
    lines = data['split']('\x0a');
    lines = lines['map'](line => line['split']('\x20'));
    lines = lines['map'](line => line['map'](elem => parseInt(elem)));
    for (let i = 0x0; SOeIge['uendv'](i, lines['length']); i++) {
        let str = '';
        if (!lines[i][0x0])
            return;
        for (let j = 0x0; SOeIge['ApzVr'](j, lines[i][0x0]); j++) {
            for (let k = 0x0; k < lines[i][0x1]; k++) {
                str += '#';
            }
            console['log'](str);
            str = '';
        }
        console['log']('');
    }
};
const readFile = route => {
    const lNdCFE = { 'ErOZu': 'utf8' };
    fs['readFile'](route, lNdCFE['ErOZu'], (err, data) => {
        fuga(data);
    });
};
const readFileWithoutArg = () => {
    const Kvwkpm = {
        'ByUaJ': function (callee, param1) {
            return callee(param1);
        },
        'qGjZt': '/dev/stdin',
        'FMddc': 'utf8'
    };
    const data = Kvwkpm['ByUaJ'](require, 'fs')['readFileSync'](Kvwkpm['qGjZt'], Kvwkpm['FMddc']);
    fuga(data);
};
let sampleInputPath = '';
if (process['argv']['length'] > 0x2) {
    sampleInputPath = process['argv'][0x2];
    readFile(sampleInputPath);
} else {
    readFileWithoutArg();
}
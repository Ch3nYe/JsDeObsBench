let fs = require('fs');
const fuga = _0x22092a => {
    lines = _0x22092a['split']('\x0a');
    lines = lines['map'](_0x42ce8e => _0x42ce8e['split']('\x20'));
    lines = lines['map'](_0x43285e => _0x43285e['map'](_0x3d4815 => parseInt(_0x3d4815)));
    for (let _0x276e6a = 0x0; _0x276e6a < lines['length']; _0x276e6a++) {
        let _0x5480eb = '';
        if (!lines[_0x276e6a][0x0])
            return;
        for (let _0x139785 = 0x0; _0x139785 < lines[_0x276e6a][0x0]; _0x139785++) {
            for (let _0xfa0493 = 0x0; _0xfa0493 < lines[_0x276e6a][0x1]; _0xfa0493++) {
                _0x5480eb += '#';
            }
            console['log'](_0x5480eb);
            _0x5480eb = '';
        }
        console['log']('');
    }
};
const readFile = _0x3bf337 => {
    fs['readFile'](_0x3bf337, 'utf8', (_0x343829, _0x152369) => {
        fuga(_0x152369);
    });
};
const readFileWithoutArg = () => {
    const _0x24e3e9 = require('fs')['readFileSync']('/dev/stdin', 'utf8');
    fuga(_0x24e3e9);
};
let sampleInputPath = '';
if (process['argv']['length'] > 0x2) {
    sampleInputPath = process['argv'][0x2];
    readFile(sampleInputPath);
} else {
    readFileWithoutArg();
}
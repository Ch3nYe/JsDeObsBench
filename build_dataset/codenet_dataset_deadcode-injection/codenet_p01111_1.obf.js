function a0_0x4d93() {
    const _0x126d60 = [
        'data',
        'end',
        'stdout',
        'split',
        'map',
        'SRQge',
        'hUQLs',
        'JlWgg',
        'pERKA',
        'write'
    ];
    a0_0x4d93 = function () {
        return _0x126d60;
    };
    return a0_0x4d93();
}
function a0_0x22ba(fDSwnU, key) {
    const stringArray = a0_0x4d93();
    a0_0x22ba = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x22ba(fDSwnU, key);
}
new Promise(function (resolve, reject) {
    const _0x53e417 = a0_0x22ba;
    let cin = '';
    process['stdin']['on'](_0x53e417(0x0), chunk => {
        cin += chunk;
    })['on'](_0x53e417(0x1), () => {
        const _0x34c156 = a0_0x22ba;
        resolve([
            cin,
            process[_0x34c156(0x2)]
        ]);
    });
})['then'](function ([cin, cout]) {
    const _0x37eaba = a0_0x22ba;
    for (const b of cin[_0x37eaba(0x3)](/[ \n]/)[_0x37eaba(0x4)](elt => parseInt(elt))) {
        if (_0x37eaba(0x5) === _0x37eaba(0x6)) {
            opt = det / (0x2 * m) + '\x20' + m + '\x0a';
        } else {
            if (b === 0x0) {
                if ('udgJc' === _0x37eaba(0x7)) {
                    cin += chunk;
                } else {
                    break;
                }
            }
            let opt = '\x0a';
            for (let m = 0x1; m * (m - 0x1) < 0x2 * b; ++m) {
                if (_0x37eaba(0x8) !== _0x37eaba(0x8)) {
                    const det = 0x2 * b - m * (m - 0x1);
                    if (det % (0x2 * m) === 0x0) {
                        opt = det / (0x2 * m) + '\x20' + m + '\x0a';
                    }
                } else {
                    const det = 0x2 * b - m * (m - 0x1);
                    if (det % (0x2 * m) === 0x0) {
                        opt = det / (0x2 * m) + '\x20' + m + '\x0a';
                    }
                }
            }
            cout[_0x37eaba(0x9)](opt);
        }
    }
});
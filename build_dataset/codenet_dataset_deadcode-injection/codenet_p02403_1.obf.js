const a0_0x5cd345 = a0_0x3a78;
function a0_0x3a78(nUieye, key) {
    const stringArray = a0_0x4b9c();
    a0_0x3a78 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3a78(nUieye, key);
}
let fs = require('fs');
const fuga = data => {
    const _0x58c074 = a0_0x3a78;
    lines = data[_0x58c074(0x0)]('\x0a');
    lines = lines['map'](line => line['split']('\x20'));
    lines = lines[_0x58c074(0x1)](line => line[_0x58c074(0x1)](elem => parseInt(elem)));
    for (let i = 0x0; i < lines[_0x58c074(0x2)]; i++) {
        if ('peYqb' !== _0x58c074(0x3)) {
            fs[_0x58c074(0x4)](route, _0x58c074(0x5), (err, data) => {
                fuga(data);
            });
        } else {
            let str = '';
            if (!lines[i][0x0])
                return;
            for (let j = 0x0; j < lines[i][0x0]; j++) {
                if (_0x58c074(0x6) !== _0x58c074(0x6)) {
                    lines = data[_0x58c074(0x0)]('\x0a');
                    lines = lines[_0x58c074(0x1)](line => line[_0x58c074(0x0)]('\x20'));
                    lines = lines[_0x58c074(0x1)](line => line[_0x58c074(0x1)](elem => parseInt(elem)));
                    for (let i = 0x0; i < lines['length']; i++) {
                        let str = '';
                        if (!lines[i][0x0])
                            return;
                        for (let j = 0x0; j < lines[i][0x0]; j++) {
                            for (let k = 0x0; k < lines[i][0x1]; k++) {
                                str += '#';
                            }
                            console[_0x58c074(0x7)](str);
                            str = '';
                        }
                        console[_0x58c074(0x7)]('');
                    }
                } else {
                    for (let k = 0x0; k < lines[i][0x1]; k++) {
                        str += '#';
                    }
                    console[_0x58c074(0x7)](str);
                    str = '';
                }
            }
            console[_0x58c074(0x7)]('');
        }
    }
};
const readFile = route => {
    const _0x2a07d5 = a0_0x3a78;
    fs[_0x2a07d5(0x4)](route, _0x2a07d5(0x5), (err, data) => {
        fuga(data);
    });
};
const readFileWithoutArg = () => {
    const _0x2c5018 = a0_0x3a78;
    const data = require('fs')[_0x2c5018(0x8)](_0x2c5018(0x9), _0x2c5018(0x5));
    fuga(data);
};
function a0_0x4b9c() {
    const _0x7b6fea = [
        'split',
        'map',
        'length',
        'peYqb',
        'readFile',
        'utf8',
        'IHUfy',
        'log',
        'readFileSync',
        '/dev/stdin',
        'argv'
    ];
    a0_0x4b9c = function () {
        return _0x7b6fea;
    };
    return a0_0x4b9c();
}
let sampleInputPath = '';
if (process[a0_0x5cd345(0xa)]['length'] > 0x2) {
    sampleInputPath = process[a0_0x5cd345(0xa)][0x2];
    readFile(sampleInputPath);
} else {
    readFileWithoutArg();
}
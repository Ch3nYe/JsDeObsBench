const a0_0xebc83e = (function () {
    let firstCall = !![];
    return function (context, fn) {
        const rfn = firstCall ? function () {
            if (fn) {
                const res = fn['apply'](context, arguments);
                fn = null;
                return res;
            }
        } : function () {
        };
        firstCall = ![];
        return rfn;
    };
}());
(function () {
    a0_0xebc83e(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x224c8e('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x224c8e();
        }
    })();
}());
let fs = require('fs');
const fuga = data => {
    lines = data['split']('\x0a');
    lines = lines['map'](line => line['split']('\x20'));
    lines = lines['map'](line => line['map'](elem => parseInt(elem)));
    for (let i = 0x0; i < lines['length']; i++) {
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
        console['log']('');
    }
};
const readFile = route => {
    fs['readFile'](route, 'utf8', (err, data) => {
        fuga(data);
    });
};
const readFileWithoutArg = () => {
    const data = require('fs')['readFileSync']('/dev/stdin', 'utf8');
    fuga(data);
};
let sampleInputPath = '';
if (process['argv']['length'] > 0x2) {
    sampleInputPath = process['argv'][0x2];
    readFile(sampleInputPath);
} else {
    readFileWithoutArg();
}
function a0_0x224c8e(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}
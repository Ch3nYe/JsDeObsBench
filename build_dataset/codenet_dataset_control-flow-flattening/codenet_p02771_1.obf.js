const Main = input => {
    var fZkXmY = {
        'LFxSa': function (callee, param1) {
            return callee(param1);
        },
        'RhMLk': function (x, y) {
            return x === y;
        },
        'UQMhc': function (x, y) {
            return x !== y;
        },
        'utHlL': function (x, y) {
            return x === y;
        }
    };
    const tmp = input['split']('\x20');
    var a = parseInt(tmp[0x0]);
    var b = fZkXmY['LFxSa'](parseInt, tmp[0x1]);
    var c = parseInt(tmp[0x2]);
    if (fZkXmY['RhMLk'](a, b) && fZkXmY['UQMhc'](b, c) || fZkXmY['RhMLk'](b, c) && fZkXmY['UQMhc'](c, a) || fZkXmY['utHlL'](c, a) && b !== c) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(input) {
    const FilCCh = {
        'aakIg': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'DvPOH': function (x, y) {
            return x <= y;
        },
        'ooByx': function (x, y) {
            return x * y;
        },
        'zCmow': function (x, y) {
            return x === y;
        },
        'GKqyi': 'Yes'
    };
    let num = FilCCh['aakIg'](parseInt, input, 0xa);
    let sum = 0x0;
    let tmp = 0x0;
    for (let i = input['length'] - 0x1; FilCCh['DvPOH'](0x0, i); i--) {
        tmp = Math['floor'](num / Math['pow'](0xa, i));
        sum += tmp;
        num -= FilCCh['ooByx'](tmp, Math['pow'](0xa, i));
    }
    const ans = FilCCh['zCmow'](sum % 0x9, 0x0) ? FilCCh['GKqyi'] : 'No';
    console['log'](ans);
}
;
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
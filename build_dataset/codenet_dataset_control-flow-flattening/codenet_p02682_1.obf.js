'use strict';
function main(arg) {
    const IcysuZ = {
        'TYAeb': function (x, y) {
            return x == y;
        },
        'oeyZT': function (x, y) {
            return x - y;
        },
        'CQMuH': function (x, y) {
            return x - y;
        },
        'tFLtb': function (x, y) {
            return x > y;
        },
        'dTXaA': function (x, y) {
            return x + y;
        },
        'Tzpdw': function (x, y) {
            return x * y;
        }
    };
    let getInt = arg['trim']()['split']('\x20')[0x3];
    let oneCount = arg['trim']()['split']('\x20')[0x0];
    let zeroCnt = arg['trim']()['split']('\x20')[0x1];
    let minusCnt = arg['trim']()['split']('\x20')[0x2];
    let result = 0x0;
    if (IcysuZ['TYAeb'](oneCount, 0x0) && IcysuZ['TYAeb'](zeroCnt, 0x0) && IcysuZ['TYAeb'](minusCnt, 0x0)) {
        console['log'](0x0);
        return;
    }
    if (getInt > 0x0) {
        if (getInt > oneCount) {
            result = oneCount * 0x1;
        } else {
            result = getInt * 0x1;
        }
        getInt = IcysuZ['oeyZT'](getInt, oneCount);
    }
    if (getInt > 0x0) {
        getInt = IcysuZ['CQMuH'](getInt, zeroCnt);
    }
    if (IcysuZ['tFLtb'](getInt, 0x0)) {
        result = IcysuZ['dTXaA'](result, IcysuZ['Tzpdw'](getInt, -0x1));
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
new Promise(function (resolve, reject) {
    const hKVTvT = {
        'NfMjO': function (callee, param1) {
            return callee(param1);
        },
        'MsDQH': 'end'
    };
    let cin = '';
    process['stdin']['on']('data', chunk => {
        cin += chunk;
    })['on'](hKVTvT['MsDQH'], () => {
        hKVTvT['NfMjO'](resolve, [
            cin,
            process['stdout']
        ]);
    });
})['then'](function ([cin, cout]) {
    const ovwXqU = {
        'vVGbv': function (x, y) {
            return x === y;
        },
        'mCYux': function (x, y) {
            return x < y;
        },
        'iUjrc': function (x, y) {
            return x * y;
        },
        'yIBAT': function (x, y) {
            return x - y;
        },
        'uvCmM': function (x, y) {
            return x * y;
        },
        'llsKi': function (x, y) {
            return x - y;
        },
        'rknKA': function (x, y) {
            return x * y;
        },
        'PNPwV': function (x, y) {
            return x / y;
        }
    };
    for (const b of cin['split'](/[ \n]/)['map'](elt => parseInt(elt))) {
        if (ovwXqU['vVGbv'](b, 0x0)) {
            break;
        }
        let opt = '\x0a';
        for (let m = 0x1; ovwXqU['mCYux'](ovwXqU['iUjrc'](m, ovwXqU['yIBAT'](m, 0x1)), ovwXqU['uvCmM'](0x2, b)); ++m) {
            const det = ovwXqU['llsKi'](0x2 * b, ovwXqU['rknKA'](m, m - 0x1));
            if (ovwXqU['vVGbv'](det % ovwXqU['iUjrc'](0x2, m), 0x0)) {
                opt = ovwXqU['PNPwV'](det, 0x2 * m) + '\x20' + m + '\x0a';
            }
        }
        cout['write'](opt);
    }
});
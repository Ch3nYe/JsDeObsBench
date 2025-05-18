const main = inputs => {
    var iAAUqZ = {
        'SOAoW': function (x, y) {
            return x - y;
        },
        'NpsqL': function (x, y) {
            return x - y;
        },
        'qRxxT': function (x, y) {
            return x < y;
        },
        'extkr': function (x, y) {
            return x + y;
        },
        'iLxLc': function (x, y) {
            return x + y;
        },
        'iTuZp': function (x, y) {
            return x - y;
        },
        'Mvqoe': function (x, y) {
            return x + y;
        },
        'yTPSD': function (x, y) {
            return x + y;
        },
        'CcjWp': function (x, y) {
            return x == y;
        },
        'iViII': function (x, y) {
            return x >= y;
        },
        'UERwb': function (x, y) {
            return x == y;
        },
        'zfvsV': function (x, y) {
            return x + y;
        }
    };
    var H = iAAUqZ['SOAoW'](inputs[0x0]['split']('\x20')[0x0], 0x0);
    var W = iAAUqZ['NpsqL'](inputs[0x0]['split']('\x20')[0x1], 0x0);
    var map = {};
    var ymap = {};
    var tmap = {};
    var keys = [];
    for (var h = 0x0; iAAUqZ['qRxxT'](h, H); h++) {
        map[h] = inputs[iAAUqZ['extkr'](h, 0x1)];
        for (var w = 0x0; iAAUqZ['qRxxT'](w, W); w++) {
            var ukey = iAAUqZ['extkr'](iAAUqZ['iLxLc'](h - 0x1, '_'), w);
            var lkey = iAAUqZ['extkr'](h + '_', iAAUqZ['iTuZp'](w, 0x1));
            var key = iAAUqZ['Mvqoe'](iAAUqZ['yTPSD'](h, '_'), w);
            if (iAAUqZ['CcjWp'](map[h][w], '#')) {
            } else {
                keys['push'](key);
                if (ymap[lkey]) {
                    ymap[key] = ymap[lkey];
                    ymap[key]['n']++;
                } else {
                    ymap[key] = { 'n': 0x1 };
                }
                if (tmap[ukey]) {
                    tmap[key] = tmap[ukey];
                    tmap[key]['n']++;
                } else {
                    tmap[key] = { 'n': 0x1 };
                }
            }
        }
    }
    var ans = 0x0;
    var key;
    for (var i = iAAUqZ['SOAoW'](keys['length'], 0x1); iAAUqZ['iViII'](i, 0x0); i--) {
        key = keys[i];
        ans = Math['max'](ans, iAAUqZ['iTuZp'](iAAUqZ['Mvqoe'](tmap[key]['n'], ymap[key]['n']), 0x1));
        if (iAAUqZ['UERwb'](ans, iAAUqZ['SOAoW'](iAAUqZ['zfvsV'](H, W), 0x1)))
            break;
    }
    console['log'](ans);
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));
const main = input => {
    var rMfUOV = {
        'OymfW': function (x, y) {
            return x < y;
        },
        'tVGxu': function (x, y) {
            return x < y;
        },
        'kqCtF': function (x, y) {
            return x > y;
        },
        'wOrLl': function (x, y) {
            return x * y;
        },
        'CcSoh': function (x, y) {
            return x + y;
        },
        'DQKvl': function (x, y) {
            return x + y;
        }
    };
    var K = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x3];
    var x = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x0];
    var y = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x1];
    var z = input['trim']()['split']('\x0a')[0x0]['split']('\x20')[0x2];
    var a = input['trim']()['split']('\x0a')[0x1]['split']('\x20')['sort']((a, b) => b - a)['map'](v => v - 0x0);
    var b = input['trim']()['split']('\x0a')[0x2]['split']('\x20')['sort']((a, b) => b - a)['map'](v => v - 0x0);
    var c = input['trim']()['split']('\x0a')[0x3]['split']('\x20')['sort']((a, b) => b - a)['map'](v => v - 0x0);
    var anss = [];
    var idxa = 0x0, idxb = 0x0, idxc = 0x0;
    var min = 0x0;
    for (var i = 0x0; rMfUOV['OymfW'](i, x); i++) {
        for (var j = 0x0; rMfUOV['tVGxu'](j, y); j++) {
            for (var k = 0x0; rMfUOV['tVGxu'](k, z); k++) {
                if (rMfUOV['kqCtF'](rMfUOV['wOrLl'](rMfUOV['wOrLl'](i, j), k), K))
                    break;
                var sum = rMfUOV['CcSoh'](rMfUOV['DQKvl'](a[i], b[j]), c[k]);
                anss['push'](sum);
            }
        }
    }
    console['log'](anss['sort']((a, b) => b - a)['filter']((v, i) => i < K)['join']('\x0a'));
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));
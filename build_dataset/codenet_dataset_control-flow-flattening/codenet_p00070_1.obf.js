function perm(xs, n, s, callback) {
    var OJIICu = {
        'zAxVt': function (callee, param1) {
            return callee(param1);
        },
        'otCSe': function (x, y) {
            return x < y;
        },
        'FdUFU': '3|2|4|0|1',
        'juYgG': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'BszWc': function (x, y) {
            return x - y;
        }
    };
    var x, i, len = xs['length'];
    s = s || [];
    if (n === 0x0) {
        OJIICu['zAxVt'](callback, s);
    } else {
        for (i = 0x0; OJIICu['otCSe'](i, len); i++) {
            var VvGawD = OJIICu['FdUFU']['split']('|');
            var GEuHmk = 0x0;
            while (!![]) {
                switch (VvGawD[GEuHmk++]) {
                case '0':
                    s['pop']();
                    continue;
                case '1':
                    xs['push'](x);
                    continue;
                case '2':
                    s['push'](x);
                    continue;
                case '3':
                    x = xs['shift']();
                    continue;
                case '4':
                    OJIICu['juYgG'](perm, xs, OJIICu['BszWc'](n, 0x1), s, callback);
                    continue;
                }
                break;
            }
        }
    }
}
function main() {
    var QcqnbX = {
        'BBnfL': '0|2|3|5|7|1|6|4',
        'fMxre': function (x, y) {
            return x * y;
        },
        'ngOVH': function (x, y) {
            return x === y;
        },
        'QSbrP': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        }
    };
    input['forEach'](function (line) {
        var azxQUt = QcqnbX['BBnfL']['split']('|');
        var aHIwNr = 0x0;
        while (!![]) {
            switch (azxQUt[aHIwNr++]) {
            case '0':
                var jToKwM = {
                    'yzfFZ': function (x, y) {
                        return QcqnbX['fMxre'](x, y);
                    },
                    'vBWPg': function (x, y) {
                        return QcqnbX['ngOVH'](x, y);
                    }
                };
                continue;
            case '1':
                s = line[0x1];
                continue;
            case '2':
                var n, s, r = 0x0;
                continue;
            case '3':
                if (line['trim']() === '')
                    return;
                continue;
            case '4':
                console['log'](r);
                continue;
            case '5':
                line = line['split']('\x20')['map'](parseFloat);
                continue;
            case '6':
                QcqnbX['QSbrP'](perm, [
                    0x0,
                    0x1,
                    0x2,
                    0x3,
                    0x4,
                    0x5,
                    0x6,
                    0x7,
                    0x8,
                    0x9
                ], n, [], function (xs) {
                    r += jToKwM['vBWPg'](xs['reduce'](function (m, x, i) {
                        return m + jToKwM['yzfFZ'](x, i + 0x1);
                    }, 0x0), s) ? 0x1 : 0x0;
                });
                continue;
            case '7':
                n = line[0x0];
                continue;
            }
            break;
        }
    });
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var NWlizO = {
        'CEsSe': function (callee) {
            return callee();
        }
    };
    input = input['split']('\x0a');
    NWlizO['CEsSe'](main);
});
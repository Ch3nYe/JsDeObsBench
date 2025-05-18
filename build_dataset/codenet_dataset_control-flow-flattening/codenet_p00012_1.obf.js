function area(x1, y1, x2, y2, x3, y3) {
    var YxPEnm = {
        'utUIK': function (x, y) {
            return x - y;
        },
        'jAVIq': function (x, y) {
            return x - y;
        },
        'YBiGb': function (x, y) {
            return x * y;
        },
        'BJWwH': function (x, y) {
            return x - y;
        },
        'fEwnF': function (x, y) {
            return x - y;
        },
        'RJoMi': function (x, y) {
            return x * y;
        },
        'TMKQT': function (x, y) {
            return x - y;
        },
        'AitSZ': function (x, y) {
            return x * y;
        },
        'CpHek': function (x, y) {
            return x + y;
        },
        'mhLTI': function (x, y) {
            return x + y;
        },
        'trjhJ': function (x, y) {
            return x * y;
        },
        'QxweP': function (x, y) {
            return x * y;
        }
    };
    var ab = Math['sqrt'](YxPEnm['utUIK'](x1, x2) * YxPEnm['jAVIq'](x1, x2) + YxPEnm['YBiGb'](YxPEnm['BJWwH'](y1, y2), y1 - y2)), bc = Math['sqrt'](YxPEnm['YBiGb'](YxPEnm['jAVIq'](x2, x3), YxPEnm['fEwnF'](x2, x3)) + YxPEnm['fEwnF'](y2, y3) * YxPEnm['jAVIq'](y2, y3)), ca = Math['sqrt'](YxPEnm['YBiGb'](x3 - x1, YxPEnm['utUIK'](x3, x1)) + YxPEnm['RJoMi'](y3 - y1, YxPEnm['TMKQT'](y3, y1))), s = YxPEnm['AitSZ'](0.5, YxPEnm['CpHek'](YxPEnm['mhLTI'](ab, bc), ca)), S = Math['sqrt'](YxPEnm['trjhJ'](YxPEnm['RJoMi'](YxPEnm['QxweP'](s, s - ab), YxPEnm['utUIK'](s, bc)), YxPEnm['BJWwH'](s, ca)));
    return S;
}
function inTriangle(x1, y1, x2, y2, x3, y3, xp, yp) {
    var pjbcrB = {
        'Malaj': function (callee, param1, param2, param3, param4, param5, param6) {
            return callee(param1, param2, param3, param4, param5, param6);
        },
        'vOYdZ': function (x, y) {
            return x - y;
        },
        'oDpYH': function (x, y) {
            return x + y;
        },
        'gSwhV': function (x, y) {
            return x <= y;
        }
    };
    var abc = area(x1, y1, x2, y2, x3, y3), abp = pjbcrB['Malaj'](area, x1, y1, x2, y2, xp, yp), bcp = area(x2, y2, x3, y3, xp, yp), cap = area(x3, y3, x1, y1, xp, yp), sub = pjbcrB['vOYdZ'](abc, pjbcrB['oDpYH'](pjbcrB['oDpYH'](abp, bcp), cap));
    return pjbcrB['gSwhV'](Math['abs'](sub), 0.01);
}
function main() {
    var CpoQXJ = {
        'veZVU': function (x, y) {
            return x === y;
        },
        'oDWvG': 'YES'
    };
    input['forEach'](function (line) {
        if (CpoQXJ['veZVU'](line['trim'](), ''))
            return;
        console['log'](inTriangle['apply'](null, line['split']('\x20')['map'](parseFloat)) ? CpoQXJ['oDWvG'] : 'NO');
    });
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var wxXlJa = {
        'InlHU': function (callee) {
            return callee();
        }
    };
    input = input['split']('\x0a');
    wxXlJa['InlHU'](main);
});
class Point {
    constructor(x, y) {
        this['x'] = x;
        this['y'] = y;
    }
    ['print']() {
        const AVEamx = {
            'YBfsL': function (x, y) {
                return x + y;
            },
            'PFNTj': function (x, y) {
                return x + y;
            }
        };
        console['log'](AVEamx['YBfsL'](AVEamx['PFNTj'](this['x']['toFixed'](0x8), '\x20'), this['y']['toFixed'](0x8)));
    }
}
(function main() {
    const UWpszz = {
        'zcKdF': function (callee, param1) {
            return callee(param1);
        },
        'xnQET': '/dev/stdin',
        'FWOQw': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    const n = Number(UWpszz['zcKdF'](require, 'fs')['readFileSync'](UWpszz['xnQET'], 'utf8')['trim']());
    let p1 = new Point(0x0, 0x0);
    let p2 = new Point(0x64, 0x0);
    p1['print']();
    UWpszz['FWOQw'](kock, n, p1, p2);
    p2['print']();
}());
function kock(n, p1, p2) {
    const FVFeGo = {
        'xBTNa': function (x, y) {
            return x - y;
        },
        'JMpIK': function (x, y) {
            return x + y;
        },
        'sOYvk': function (x, y) {
            return x / y;
        },
        'CffYC': function (x, y) {
            return x + y;
        },
        'cipxl': function (x, y) {
            return x + y;
        },
        'dELRF': function (x, y) {
            return x / y;
        },
        'lEAiK': function (x, y) {
            return x + y;
        },
        'JRMYL': function (x, y) {
            return x - y;
        },
        'cpYvL': function (x, y) {
            return x - y;
        },
        'pBCww': function (x, y) {
            return x * y;
        },
        'ZzAri': function (x, y) {
            return x + y;
        },
        'OqFca': function (x, y) {
            return x - y;
        },
        'kGxrS': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'jnyee': function (x, y) {
            return x - y;
        },
        'imiTV': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'KJkJM': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'gTBKK': function (x, y) {
            return x - y;
        },
        'hMrve': function (x, y) {
            return x * y;
        },
        'zaUcf': function (x, y) {
            return x * y;
        }
    };
    const sin60 = Math['sin'](FVFeGo['sOYvk'](FVFeGo['hMrve'](0x3c, Math['PI']), 0xb4));
    const cos60 = Math['cos'](FVFeGo['dELRF'](FVFeGo['zaUcf'](0x3c, Math['PI']), 0xb4));
    function innerFunc(n, p1, p2) {
        if (!n)
            return;
        xDiff = FVFeGo['xBTNa'](p2['x'], p1['x']);
        yDiff = FVFeGo['xBTNa'](p2['y'], p1['y']);
        let s = new Point(FVFeGo['JMpIK'](p1['x'], FVFeGo['sOYvk'](xDiff, 0x3)), FVFeGo['CffYC'](p1['y'], FVFeGo['sOYvk'](yDiff, 0x3)));
        let t = new Point(FVFeGo['CffYC'](s['x'], xDiff / 0x3), FVFeGo['cipxl'](s['y'], FVFeGo['dELRF'](yDiff, 0x3)));
        let u = new Point(FVFeGo['lEAiK'](FVFeGo['JRMYL'](FVFeGo['cpYvL'](t['x'], s['x']) * cos60, FVFeGo['pBCww'](FVFeGo['JRMYL'](t['y'], s['y']), sin60)), s['x']), FVFeGo['CffYC'](FVFeGo['ZzAri'](FVFeGo['pBCww'](FVFeGo['OqFca'](t['x'], s['x']), sin60), FVFeGo['JRMYL'](t['y'], s['y']) * cos60), s['y']));
        FVFeGo['kGxrS'](kock, n - 0x1, p1, s);
        s['print']();
        kock(FVFeGo['jnyee'](n, 0x1), s, u);
        u['print']();
        FVFeGo['imiTV'](kock, n - 0x1, u, t);
        t['print']();
        FVFeGo['KJkJM'](kock, FVFeGo['gTBKK'](n, 0x1), t, p2);
    }
    kock = innerFunc;
    innerFunc(n, p1, p2);
}
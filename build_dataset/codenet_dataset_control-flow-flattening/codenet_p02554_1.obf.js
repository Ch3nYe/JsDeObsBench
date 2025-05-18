const mod = 0xa ** 0x9 + 0x7;
function pow(x, y) {
    var QJpkGZ = {
        'YNFoL': function (x, y) {
            return x <= y;
        },
        'czTDv': function (x, y) {
            return x % y;
        },
        'iewMf': function (x, y) {
            return x * y;
        }
    };
    var r = 0x1;
    for (var i = 0x1; QJpkGZ['YNFoL'](i, y); i++) {
        r = QJpkGZ['czTDv'](QJpkGZ['iewMf'](r, x), mod);
    }
    return r;
}
;
function Main(input) {
    var YfEWru = {
        'ccjcz': function (x, y) {
            return x + y;
        },
        'VpayY': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'mCuVN': function (x, y) {
            return x * y;
        },
        'RxFSz': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'XziFZ': function (x, y) {
            return x % y;
        },
        'uROVz': function (x, y) {
            return x % y;
        }
    };
    const [N] = input['trim']()['split']('\x20')['map'](x => parseInt(x));
    var count = YfEWru['ccjcz'](YfEWru['VpayY'](pow, 0xa, N) - YfEWru['mCuVN'](YfEWru['VpayY'](pow, 0x9, N), 0x2), YfEWru['RxFSz'](pow, 0x8, N));
    count = YfEWru['XziFZ'](count, mod);
    count = YfEWru['uROVz'](YfEWru['ccjcz'](count, mod), mod);
    console['log'](count);
}
;
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
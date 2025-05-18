function Main(input) {
    const AEGCkv = {
        'sNHTX': function (callee, param1) {
            return callee(param1);
        },
        'wcMLJ': function (callee, param1) {
            return callee(param1);
        },
        'NvWwx': function (x, y) {
            return x < y;
        },
        'CJcCX': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        },
        'CvdAw': function (x, y) {
            return x == y;
        },
        'sgdHD': 'Yes'
    };
    const Param = input['split']('\x20');
    const N = AEGCkv['sNHTX'](i, Param[0x0]);
    const M = AEGCkv['sNHTX'](i, Param[0x1]);
    const K = AEGCkv['wcMLJ'](i, Param[0x2]);
    for (var n = 0x0; AEGCkv['NvWwx'](n, N); n++) {
        for (var m = 0x0; AEGCkv['NvWwx'](m, M); m++) {
            var b = AEGCkv['CJcCX'](calcBlack, n, m, N, M);
            if (AEGCkv['CvdAw'](b, K))
                return console['log'](AEGCkv['sgdHD']);
        }
    }
    console['log']('No');
}
function calcBlack(n, m, N, M) {
    const owHtCm = {
        'hmesy': function (x, y) {
            return x + y;
        },
        'qFOEa': function (x, y) {
            return x * y;
        },
        'kWjAN': function (x, y) {
            return x - y;
        },
        'oyqEZ': function (x, y) {
            return x * y;
        },
        'btvbJ': function (x, y) {
            return x * y;
        }
    };
    return owHtCm['hmesy'](N * n - owHtCm['qFOEa'](m, n), owHtCm['kWjAN'](owHtCm['oyqEZ'](M, m), owHtCm['btvbJ'](n, m)));
}
function i(x) {
    const KTjRlQ = {
        'ShprG': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return KTjRlQ['ShprG'](parseInt, x, 0xa);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
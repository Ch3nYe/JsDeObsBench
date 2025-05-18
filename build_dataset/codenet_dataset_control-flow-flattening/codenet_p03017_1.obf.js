debug = ![];
function log(...args) {
    if (debug) {
        console['log'](...args);
    }
}
function Main(input) {
    var mAXSZw = {
        'UCdlc': function (x, y) {
            return x * y;
        },
        'fQMHR': function (x, y) {
            return x * y;
        },
        'IHMiG': function (x, y) {
            return x > y;
        },
        'ICzaz': function (x, y) {
            return x <= y;
        },
        'voGmn': function (x, y) {
            return x - y;
        },
        'PjGWq': function (x, y) {
            return x == y;
        },
        'YuWbR': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'vprvK': function (x, y) {
            return x - y;
        },
        'HrtOV': function (x, y) {
            return x + y;
        },
        'gBcFk': function (callee, param1) {
            return callee(param1);
        },
        'hNdtz': function (x, y) {
            return x - y;
        },
        'pfWGL': function (x, y) {
            return x - y;
        },
        'lsZQD': function (x, y) {
            return x - y;
        },
        'aSPtZ': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'AhFOF': 'Yes'
    };
    lines = input['split']('\x0a');
    f = lines[0x0]['split']('\x20');
    N = f[0x0];
    A = mAXSZw['UCdlc'](f[0x1], 0x1);
    B = f[0x2] * 0x1;
    C = mAXSZw['fQMHR'](f[0x3], 0x1);
    D = f[0x4] * 0x1;
    s = lines[0x1];
    log(N, A, B, C, D, s);
    bool = !![];
    if (mAXSZw['IHMiG'](C, D)) {
        end = D;
        if (mAXSZw['ICzaz'](mAXSZw['voGmn'](C, D), 0x2)) {
            end = C;
        }
        s2 = s;
        if (mAXSZw['PjGWq'](s[mAXSZw['voGmn'](D, 0x2)], '#')) {
            mAXSZw['YuWbR'](log, s2, s2[mAXSZw['voGmn'](D, 0x1)]);
            s2[mAXSZw['vprvK'](D, 0x1)] = '#';
            s2 = mAXSZw['HrtOV'](s2['slice'](0x0, D - 0x1), '#') + s2['slice'](D);
        }
        mAXSZw['gBcFk'](log, s2);
        str = s2['slice'](mAXSZw['hNdtz'](B, 0x1), end);
        mAXSZw['YuWbR'](log, str, bool);
        bool = bool && /\.\.\./['test'](str);
        log(str, bool);
    }
    str = s['slice'](mAXSZw['pfWGL'](A, 0x1), C);
    bool = bool && !/##/['test'](str);
    mAXSZw['YuWbR'](log, str, bool);
    str = s['slice'](mAXSZw['lsZQD'](B, 0x1), D);
    bool = bool && !/##/['test'](str);
    mAXSZw['aSPtZ'](log, str, bool);
    ans = bool ? mAXSZw['AhFOF'] : 'No';
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
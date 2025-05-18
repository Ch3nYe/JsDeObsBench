function main(input) {
    const laKmtm = {
        'pIJSs': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'GTmyo': function (x, y) {
            return x + y;
        },
        'gMtDC': function (x, y) {
            return x - y;
        },
        'JPntA': function (x, y) {
            return x * y;
        }
    };
    const a = laKmtm['pIJSs'](parseInt, input['split']('\x20')[0x0], 0xa);
    const b = laKmtm['pIJSs'](parseInt, input['split']('\x20')[0x1], 0xa);
    ptnAdd = laKmtm['GTmyo'](a, b);
    ptnSub = laKmtm['gMtDC'](a, b);
    ptnMul = laKmtm['JPntA'](a, b);
    ans = Math['max']['apply'](null, [
        ptnAdd,
        ptnSub,
        ptnMul
    ]);
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
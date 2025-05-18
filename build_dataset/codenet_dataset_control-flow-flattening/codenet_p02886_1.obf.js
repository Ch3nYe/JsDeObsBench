function Main(input) {
    var pUYyNr = {
        'JpJEV': function (callee, param1) {
            return callee(param1);
        },
        'LnZAt': function (x, y) {
            return x + y;
        },
        'OcyfT': function (x, y) {
            return x < y;
        },
        'KQnuY': function (x, y) {
            return x * y;
        }
    };
    var input = input['split']('\x0a');
    const n = pUYyNr['JpJEV'](Number, input[0x0]);
    const ocps = input[0x1]['split']('\x20')['map'](ocp => Number(ocp));
    var r = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = pUYyNr['LnZAt'](i, 0x1); pUYyNr['OcyfT'](j, n); j++) {
            r += pUYyNr['KQnuY'](ocps[i], ocps[j]);
        }
    }
    console['log'](r);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
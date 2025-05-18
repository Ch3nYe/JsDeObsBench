function Main(raw_input) {
    const hUmfDf = {
        'kzoDJ': function (callee, param1) {
            return callee(param1);
        },
        'HPBSD': function (x, y) {
            return x * y;
        },
        'ljJuA': 'Yes'
    };
    const [line] = raw_input['split']('\x0a');
    const [d, t, s] = hUmfDf['kzoDJ'](toNumArray, line);
    let isYes = hUmfDf['HPBSD'](t, s) >= d;
    console['log'](isYes ? hUmfDf['ljJuA'] : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function toNumArray(str, delimitor = '\x20') {
    return str['split'](delimitor)['map'](s => parseInt(s, 0xa));
}
function toBitIntArray(str, delimitor = '\x20') {
    return str['split'](delimitor)['map'](s => BigInt(s));
}
function toMatrix(array, delimitor = '\x20') {
    const result = array['map'](v => v['split'](delimitor));
    return result;
}
function sum(n) {
    return n['reduce']((a, b) => a + b);
}
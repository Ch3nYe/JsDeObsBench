function Main(input) {
    const HzAASL = {
        'UYYRE': function (callee, param1) {
            return callee(param1);
        },
        'cHfsI': function (x, y) {
            return x < y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const N = HzAASL['UYYRE'](parseInt, input[0x0]);
    const array = input[0x1]['split']('\x20');
    const S = array[0x0];
    const T = array[0x1];
    let ans = '';
    for (let i = 0x0; HzAASL['cHfsI'](i, N); ++i) {
        ans += S[i];
        ans += T[i];
    }
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
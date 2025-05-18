function Main(input) {
    const sEuBaj = {
        'ESJys': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'SaZJT': function (x, y) {
            return x + y;
        },
        'FxvFX': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    let N = sEuBaj['ESJys'](parseInt, input[0x0][0x0], 0xa);
    let v_h = input[0x1]['map'](e => parseInt(e, 0xa));
    let DP = [
        0x0,
        Math['abs'](v_h[0x1] - v_h[0x0])
    ];
    let x1, x2;
    for (let i = 0x2; i < N; i++) {
        x1 = sEuBaj['SaZJT'](DP[i - 0x2], Math['abs'](sEuBaj['FxvFX'](v_h[i], v_h[sEuBaj['FxvFX'](i, 0x2)])));
        x2 = sEuBaj['SaZJT'](DP[i - 0x1], Math['abs'](sEuBaj['FxvFX'](v_h[i], v_h[sEuBaj['FxvFX'](i, 0x1)])));
        DP['push'](Math['min'](x1, x2));
    }
    console['log'](DP[N - 0x1]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
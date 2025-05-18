function Main(input) {
    const IHiEuJ = {
        'iciEx': function (x, y) {
            return x + y;
        },
        'qZrOH': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'rHKiJ': function (x, y) {
            return x < y;
        },
        'WjvUT': function (x, y) {
            return x < y;
        },
        'XNDCG': function (x, y) {
            return x + y;
        },
        'VRTbU': function (x, y) {
            return x - y;
        },
        'WRJqF': function (x, y) {
            return x === y;
        },
        'GOXSa': function (x, y) {
            return x - y;
        },
        'wAkDy': function (x, y) {
            return x > y;
        },
        'PNEOO': function (x, y) {
            return x + y;
        },
        'BZfSc': function (x, y) {
            return x - y;
        },
        'XTAiP': function (x, y) {
            return x - y;
        },
        'qlEtK': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    let C = IHiEuJ['iciEx'](0x3b9aca00, 0x7);
    let H = IHiEuJ['qZrOH'](parseInt, input[0x0][0x0], 0xa);
    let W = IHiEuJ['qZrOH'](parseInt, input[0x0][0x1], 0xa);
    let DP = [];
    for (let i = 0x0; IHiEuJ['rHKiJ'](i, H); i++) {
        DP['push'](Array['from']({ 'length': W }, () => 0x0));
    }
    DP[0x0][0x0] = 0x1;
    for (let i = 0x1; IHiEuJ['WjvUT'](i, IHiEuJ['XNDCG'](H, W) - 0x1); i++) {
        for (let j = 0x0; j <= Math['min'](i, IHiEuJ['VRTbU'](H, 0x1)); j++) {
            if (IHiEuJ['WRJqF'](input[IHiEuJ['iciEx'](j, 0x1)][0x0][IHiEuJ['VRTbU'](i, j)], '#') || IHiEuJ['GOXSa'](i, j) >= W)
                continue;
            if (j > 0x0 && IHiEuJ['wAkDy'](i - j, 0x0)) {
                DP[j][i - j] = IHiEuJ['PNEOO'](DP[IHiEuJ['BZfSc'](j, 0x1)][IHiEuJ['VRTbU'](i, j)], DP[j][IHiEuJ['BZfSc'](i - j, 0x1)]) % C;
            } else if (IHiEuJ['wAkDy'](j, 0x0)) {
                DP[j][IHiEuJ['BZfSc'](i, j)] = DP[IHiEuJ['XTAiP'](j, 0x1)][i - j];
            } else {
                DP[j][IHiEuJ['qlEtK'](i, j)] = DP[j][IHiEuJ['XTAiP'](i - j, 0x1)];
            }
        }
    }
    console['log'](DP['pop']()['pop']());
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
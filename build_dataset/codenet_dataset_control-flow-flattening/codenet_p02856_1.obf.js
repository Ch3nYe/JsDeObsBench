function Main(input) {
    const RQpdVC = {
        'dfweS': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'GHMNw': function (x, y) {
            return x < y;
        },
        'FZWhv': function (x, y) {
            return x * y;
        },
        'urDiP': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'BFQyP': function (x, y) {
            return x + y;
        },
        'MnAVw': function (x, y) {
            return x + y;
        },
        'wiUEs': function (x, y) {
            return x / y;
        },
        'khINs': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']()['split']('\x0a')['map'](function (x) {
        return x['split']('\x20');
    });
    let M = RQpdVC['dfweS'](parseInt, input[0x0][0x0], 0xa);
    let ans = -0x1;
    let tmp = 0x0;
    for (let i = 0x0; RQpdVC['GHMNw'](i, M); i++) {
        ans += RQpdVC['dfweS'](parseInt, input[i + 0x1][0x1], 0xa);
        tmp += RQpdVC['FZWhv'](RQpdVC['urDiP'](parseInt, input[RQpdVC['BFQyP'](i, 0x1)][0x0], 0xa), parseInt(input[RQpdVC['MnAVw'](i, 0x1)][0x1], 0xa));
    }
    ans += Math['floor'](RQpdVC['wiUEs'](RQpdVC['khINs'](tmp, 0x1), 0x9));
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
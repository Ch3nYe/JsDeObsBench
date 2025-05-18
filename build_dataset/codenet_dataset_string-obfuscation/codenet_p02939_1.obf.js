var a0_0x70ace6 = a0_0x8b4d;
(function (stringArrayFunction, comparisonValue) {
    var _0x43e3df = a0_0x8b4d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x43e3df(0x6e)) / 0x1 + parseInt(_0x43e3df(0x70)) / 0x2 * (parseInt(_0x43e3df(0x67)) / 0x3) + parseInt(_0x43e3df(0x71)) / 0x4 * (parseInt(_0x43e3df(0x6c)) / 0x5) + -parseInt(_0x43e3df(0x75)) / 0x6 + parseInt(_0x43e3df(0x76)) / 0x7 + parseInt(_0x43e3df(0x6b)) / 0x8 + -parseInt(_0x43e3df(0x6a)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x12b0, 0x41c67));
function a0_0x8b4d(mswSZu, key) {
    var stringArray = a0_0x12b0();
    a0_0x8b4d = function (index, key) {
        index = index - 0x67;
        var value = stringArray[index];
        return value;
    };
    return a0_0x8b4d(mswSZu, key);
}
function a0_0x12b0() {
    var _0x1363fb = [
        '/dev/stdin',
        '5645313leTEqV',
        '3416016sLjJmI',
        '15kNYzzB',
        'readFileSync',
        '24277AbJTcf',
        'utf8',
        '77122GYtKSh',
        '119260EwuviS',
        'slice',
        'push',
        'log',
        '2083212WLtabb',
        '2492707DTURED',
        '27UpSahK',
        'length'
    ];
    a0_0x12b0 = function () {
        return _0x1363fb;
    };
    return a0_0x12b0();
}
function Main(input) {
    var _0x2c8d72 = a0_0x8b4d;
    var output = 0x0;
    var list = [];
    var output = input[_0x2c8d72(0x68)];
    var tmp = '';
    for (var i = input[_0x2c8d72(0x68)] - 0x1; i >= 0x0; i--) {
        var tmp2 = input['slice'](i, i + 0x1);
        if (list['length'] == 0x0) {
            list['push'](tmp2);
            continue;
        } else {
            var tmp1 = list[list[_0x2c8d72(0x68)] - 0x1];
            if (tmp1 == tmp2) {
                list[_0x2c8d72(0x73)](input[_0x2c8d72(0x72)](i - 0x1, i) + tmp2);
                i--;
            } else {
                list[_0x2c8d72(0x73)](tmp2);
            }
        }
    }
    output = list['length'];
    var first = input['slice'](0x0, 0x1);
    var second = input[_0x2c8d72(0x72)](0x1, 0x2);
    if (first == second) {
        output--;
    }
    console[_0x2c8d72(0x74)](output['toString']());
}
Main(require('fs')[a0_0x70ace6(0x6d)](a0_0x70ace6(0x69), a0_0x70ace6(0x6f)));
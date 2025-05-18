function a0_0x5b45() {
    var _0x15c37e = [
        '7KQznvR',
        '5823880rUSItp',
        '4275372IyKhUx',
        'split',
        '459120EnnWsN',
        'join',
        '51AwEuRC',
        'log',
        'trim',
        '738177cbrwEJ',
        'map',
        '460hoZlvm',
        'indexOf',
        'utf8',
        'error',
        '62138RixTvT',
        '351216RSyKcz',
        '7929680PFHXXc'
    ];
    a0_0x5b45 = function () {
        return _0x15c37e;
    };
    return a0_0x5b45();
}
(function (stringArrayFunction, comparisonValue) {
    var _0xa087df = a0_0x5936;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xa087df(0x98)) / 0x1 + -parseInt(_0xa087df(0x8c)) / 0x2 * (-parseInt(_0xa087df(0x95)) / 0x3) + -parseInt(_0xa087df(0x93)) / 0x4 + -parseInt(_0xa087df(0x90)) / 0x5 + -parseInt(_0xa087df(0x91)) / 0x6 * (parseInt(_0xa087df(0x8f)) / 0x7) + parseInt(_0xa087df(0x8e)) / 0x8 + parseInt(_0xa087df(0x8d)) / 0x9 * (parseInt(_0xa087df(0x88)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5b45, 0x8ea00));
Main(myin());
function myin() {
    var _0x41f7f8 = a0_0x5936;
    return require('fs')['readFileSync']('/dev/stdin', _0x41f7f8(0x8a))[_0x41f7f8(0x97)]();
}
function myout(t) {
    var _0x50a9df = a0_0x5936;
    console[_0x50a9df(0x96)](t);
}
function myerr(t) {
    var _0x3fa24f = a0_0x5936;
    console[_0x3fa24f(0x8b)](t);
}
function a0_0x5936(MvPruC, key) {
    var stringArray = a0_0x5b45();
    a0_0x5936 = function (index, key) {
        index = index - 0x87;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5936(MvPruC, key);
}
function myconv(i, no) {
    var _0x36d7ce = a0_0x5936;
    switch (no) {
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i[_0x36d7ce(0x92)]('\x20');
    case 0x3:
        return i[_0x36d7ce(0x92)]('\x0a');
    case 0x4:
        return i[_0x36d7ce(0x92)]('\x20')[_0x36d7ce(0x87)](a => Number(a));
    case 0x5:
        return i[_0x36d7ce(0x92)]('\x0a')[_0x36d7ce(0x87)](a => Number(a));
    case 0x6:
        return i['split']('');
    case 0x7:
        return i[_0x36d7ce(0x92)]('')[_0x36d7ce(0x87)](a => Number(a));
    case 0x8:
        return i['join']('\x20');
    case 0x9:
        return i['join']('\x0a');
    case 0x0:
        return i[_0x36d7ce(0x94)]('');
    default:
        return i;
    }
}
function Main(input) {
    var _0x4ecce9 = a0_0x5936;
    input = myconv(input, null);
    var list = 'abcdefghijklmnopqrstivwxyz'['split']('');
    myout(list[list[_0x4ecce9(0x89)](input) + 0x1]);
}
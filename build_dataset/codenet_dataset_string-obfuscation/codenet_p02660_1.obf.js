function a0_0x2dac(Nyptqa, key) {
    var stringArray = a0_0x300c();
    a0_0x2dac = function (index, key) {
        index = index - 0x1d4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2dac(Nyptqa, key);
}
var a0_0x2c0969 = a0_0x2dac;
(function (stringArrayFunction, comparisonValue) {
    var _0x576dbc = a0_0x2dac;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x576dbc(0x1e1)) / 0x1 + -parseInt(_0x576dbc(0x1e2)) / 0x2 + -parseInt(_0x576dbc(0x1df)) / 0x3 * (parseInt(_0x576dbc(0x1d5)) / 0x4) + -parseInt(_0x576dbc(0x1da)) / 0x5 + -parseInt(_0x576dbc(0x1d8)) / 0x6 * (parseInt(_0x576dbc(0x1de)) / 0x7) + -parseInt(_0x576dbc(0x1e0)) / 0x8 + -parseInt(_0x576dbc(0x1dc)) / 0x9 * (-parseInt(_0x576dbc(0x1d7)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x300c, 0x88f6c));
function Main(input) {
    var _0x2f4bde = a0_0x2dac;
    input = input[_0x2f4bde(0x1e4)]('\x0a');
    var N = parseInt(input[0x0]);
    var ans = 0x0;
    var set = new Set();
    var N2 = N;
    for (var i = 0x2; i < Math[_0x2f4bde(0x1d9)](N); i++) {
        var x = i;
        for (var j = 0x1; x < N; j++) {
            if (N2 % Math[_0x2f4bde(0x1db)](i, j) == 0x0) {
                ans++;
                N2 = N2 / Math[_0x2f4bde(0x1db)](i, j);
            } else {
                break;
            }
            x = Math['pow'](i, j + 0x1);
        }
    }
    if (ans == 0x0 && N != 0x1) {
        ans = 0x1;
    }
    console[_0x2f4bde(0x1e3)]('%s', ans);
    return ans;
}
function a0_0x300c() {
    var _0x5ca636 = [
        '7720bqzKVs',
        '18pSGtfO',
        'sqrt',
        '3270985HbPkNx',
        'pow',
        '27198XiFHCE',
        'readFileSync',
        '324457ZXtyri',
        '2112822cmldGr',
        '5570632nOFsPw',
        '1051317ljMdsa',
        '1258888Uoyzrk',
        'log',
        'split',
        'getElementById',
        'value',
        'innerHTML',
        '4fcGjxX',
        'output'
    ];
    a0_0x300c = function () {
        return _0x5ca636;
    };
    return a0_0x300c();
}
function debug(n) {
    var _0x3d1912 = a0_0x2dac;
    var input = document['getElementById']('input' + n)[_0x3d1912(0x1e6)];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document[_0x3d1912(0x1e5)](_0x3d1912(0x1d6) + n)[_0x3d1912(0x1e6)][_0x3d1912(0x1e4)]('\x0a')[0x0]) {
        result = 'AC';
    }
    document[_0x3d1912(0x1e5)]('result' + n)[_0x3d1912(0x1d4)] = result;
}
Main(require('fs')[a0_0x2c0969(0x1dd)]('/dev/stdin', 'utf8'));
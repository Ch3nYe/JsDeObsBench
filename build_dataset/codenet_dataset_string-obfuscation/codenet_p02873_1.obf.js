var a0_0x4ba1da = a0_0x4cb0;
(function (stringArrayFunction, comparisonValue) {
    var _0x4a47de = a0_0x4cb0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4a47de(0xd3)) / 0x1 + -parseInt(_0x4a47de(0xd0)) / 0x2 * (-parseInt(_0x4a47de(0xc8)) / 0x3) + -parseInt(_0x4a47de(0xca)) / 0x4 + parseInt(_0x4a47de(0xd2)) / 0x5 * (-parseInt(_0x4a47de(0xc6)) / 0x6) + parseInt(_0x4a47de(0xc7)) / 0x7 + -parseInt(_0x4a47de(0xd5)) / 0x8 + parseInt(_0x4a47de(0xcc)) / 0x9 * (parseInt(_0x4a47de(0xce)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31af, 0xed42f));
function Main(input) {
    var _0x5a0a9a = a0_0x4cb0;
    var S = input[_0x5a0a9a(0xd1)]('');
    var Slong = S['length'];
    var Muki = '>';
    var Out = 0x1;
    var V = [];
    var Left = 0x0;
    var Right = 0x0;
    var Sum = 0x0;
    for (var i = 0x0; i < Slong; i++) {
        if (S[i] == Muki) {
            if (Muki == '>') {
                Left++;
            } else {
                Right++;
            }
            Out = 0x0;
        } else {
            if (Muki == '<') {
                V[_0x5a0a9a(0xc9)]({
                    'L': Left,
                    'R': Right
                });
                Muki = '>';
                Left = 0x0;
                Right = 0x0;
                Left++;
                Out = 0x1;
            } else {
                Muki = '<';
                Right++;
                Out = 0x0;
            }
        }
    }
    if (Out == 0x0) {
        V[_0x5a0a9a(0xc9)]({
            'L': Left,
            'R': Right
        });
    }
    for (var i = 0x1; i < V[_0x5a0a9a(0xcb)]; i++) {
        if (V[i - 0x1]['R'] < V[i]['L']) {
            V[i - 0x1]['R']--;
        } else {
            V[i]['L']--;
        }
    }
    for (var i = 0x0; i < V[_0x5a0a9a(0xcb)]; i++) {
        Sum += V[i]['L'] * (V[i]['L'] + 0x1) / 0x2;
        Sum += V[i]['R'] * (V[i]['R'] + 0x1) / 0x2;
    }
    console[_0x5a0a9a(0xcf)](Sum);
}
function a0_0x31af() {
    var _0x5a5c62 = [
        '10791200HyXWwK',
        '327372SVkmeN',
        '10893841cpLBEL',
        '129SjfwKr',
        'push',
        '597348BQtrBt',
        'length',
        '27IzGtmP',
        'utf8',
        '4750670NvpfAK',
        'log',
        '8634aPDiCA',
        'split',
        '165nhTJcg',
        '1103511HlLtbi',
        'readFileSync'
    ];
    a0_0x31af = function () {
        return _0x5a5c62;
    };
    return a0_0x31af();
}
function a0_0x4cb0(rtKTwQ, key) {
    var stringArray = a0_0x31af();
    a0_0x4cb0 = function (index, key) {
        index = index - 0xc6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4cb0(rtKTwQ, key);
}
Main(require('fs')[a0_0x4ba1da(0xd4)]('/dev/stdin', a0_0x4ba1da(0xcd)));
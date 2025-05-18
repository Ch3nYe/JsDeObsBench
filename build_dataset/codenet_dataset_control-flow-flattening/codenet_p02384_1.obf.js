ptrn = [
    [
        0x0,
        0x1,
        0x2
    ],
    [
        0x0,
        0x2,
        0x4
    ],
    [
        0x0,
        0x4,
        0x3
    ],
    [
        0x0,
        0x3,
        0x1
    ],
    [
        0x1,
        0x5,
        0x2
    ],
    [
        0x1,
        0x2,
        0x0
    ],
    [
        0x1,
        0x0,
        0x3
    ],
    [
        0x1,
        0x3,
        0x5
    ],
    [
        0x2,
        0x1,
        0x5
    ],
    [
        0x2,
        0x5,
        0x4
    ],
    [
        0x2,
        0x4,
        0x0
    ],
    [
        0x2,
        0x0,
        0x1
    ]
];
function dice(num) {
    var zbzEgQ = {
        'YyBhj': function (x, y) {
            return x * y;
        },
        'aURiE': function (x, y) {
            return x < y;
        },
        'kOHci': function (x, y) {
            return x === y;
        }
    };
    this['n'] = num;
    this['check'] = function (top, front) {
        top = this['n']['indexOf'](top);
        front = this['n']['indexOf'](front);
        var flag = !![];
        if (top > 0x2) {
            top = 0x5 - top;
            flag = ![];
        }
        for (let i = zbzEgQ['YyBhj'](0x4, top); zbzEgQ['aURiE'](i, 0xc); i++) {
            if (flag && ptrn[i][0x1] === front) {
                console['log'](this['n'][ptrn[i][0x2]]);
                break;
            } else if (!flag && zbzEgQ['kOHci'](ptrn[i][0x2], front)) {
                console['log'](this['n'][ptrn[i][0x1]]);
                break;
            }
        }
    };
}
function Main(input) {
    var yYWbuA = {
        'gwnmi': function (x, y) {
            return x + y;
        },
        'RwSCi': function (callee, param1) {
            return callee(param1);
        }
    };
    input = input['split']('\x0a');
    var dice_a = new dice(input[0x0]['split']('\x20'));
    input['slice'](0x2, yYWbuA['gwnmi'](0x2, yYWbuA['RwSCi'](Number, input[0x1])))['forEach'](function (d) {
        t = d['split']('\x20');
        dice_a['check'](t[0x0], t[0x1]);
    });
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
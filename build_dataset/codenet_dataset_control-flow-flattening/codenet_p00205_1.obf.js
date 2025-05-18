function main() {
    var xbxMNU = {
        'VHZWs': function (x, y) {
            return x - y;
        },
        'xcUrf': function (x, y) {
            return x + y;
        },
        'ODLSC': function (x, y) {
            return x == y;
        },
        'XPdSi': function (x, y) {
            return x < y;
        },
        'hchdI': function (callee, param1) {
            return callee(param1);
        }
    };
    var hands, pattern, swap, i = 0x0, j;
    for (;;) {
        if (xbxMNU['ODLSC'](input[i], 0x0))
            break;
        hands = [];
        for (j = 0x0; xbxMNU['XPdSi'](j, 0x5); j++) {
            hands['push'](xbxMNU['hchdI'](Number, input[i++]));
        }
        pattern = hands['reduce'](function (pat, h) {
            return pat[h] = !![], pat;
        }, {});
        keys = Object['keys'](pattern)['map'](Number)['sort'](function (x, y) {
            return xbxMNU['VHZWs'](x, y);
        });
        if (keys['length'] === 0x2) {
            if (xbxMNU['ODLSC'](keys[0x1] - keys[0x0], 0x2)) {
                swap = keys[0x0];
                keys[0x0] = keys[0x1];
                keys[0x1] = swap;
            }
            hands['forEach'](function (h) {
                console['log'](xbxMNU['xcUrf'](keys['indexOf'](h), 0x1));
            });
        } else {
            hands['forEach'](function () {
                console['log'](0x3);
            });
        }
    }
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var HgQzrE = {
        'KrSXb': function (callee) {
            return callee();
        }
    };
    input = input['split']('\x0a');
    HgQzrE['KrSXb'](main);
});
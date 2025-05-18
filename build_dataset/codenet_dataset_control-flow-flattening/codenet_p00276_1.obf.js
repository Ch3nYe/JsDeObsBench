Main(function (input) {
    var IRyFws = {
        'AEAZl': function (x, y) {
            return x / y;
        },
        'PPXsf': function (x, y) {
            return x * y;
        },
        'aeCFU': function (x, y) {
            return x / y;
        }
    };
    input = input['trim']()['split']('\x0a');
    input['shift']();
    input['forEach'](function (line) {
        var tmp = line['split']('\x20');
        var c = +tmp[0x0];
        var a = +tmp[0x1];
        var n = +tmp[0x2];
        var ans = 0x0;
        var min;
        min = Math['min'](c, a, n);
        c -= min;
        a -= min;
        n -= min;
        ans += min;
        min = Math['min'](Math['floor'](IRyFws['AEAZl'](c, 0x2)), a);
        c -= IRyFws['PPXsf'](min, 0x2);
        a -= min;
        ans += min;
        ans += Math['floor'](IRyFws['aeCFU'](c, 0x3));
        console['log'](ans);
    });
});
function Main(main) {
    var YLIPKI = {
        'wlKQp': '1|0|5|2|3|4',
        'xElGQ': function (callee, param1) {
            return callee(param1);
        },
        'pXFNX': 'data'
    };
    var vkKJRV = YLIPKI['wlKQp']['split']('|');
    var qXFWxW = 0x0;
    while (!![]) {
        switch (vkKJRV[qXFWxW++]) {
        case '0':
            var input = '';
            continue;
        case '1':
            var rsibPw = {
                'KQrgr': function (callee, param1) {
                    return YLIPKI['xElGQ'](callee, param1);
                }
            };
            continue;
        case '2':
            process['stdin']['setEncoding']('utf8');
            continue;
        case '3':
            process['stdin']['on'](YLIPKI['pXFNX'], function (chunk) {
                input += chunk;
            });
            continue;
        case '4':
            process['stdin']['on']('end', function () {
                rsibPw['KQrgr'](main, input);
            });
            continue;
        case '5':
            process['stdin']['resume']();
            continue;
        }
        break;
    }
}
;
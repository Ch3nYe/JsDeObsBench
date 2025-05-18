var n;
var x = [];
function main() {
    var kwRSuJ = {
        'IHnlx': function (callee) {
            return callee();
        },
        'cTigR': function (x, y) {
            return x - y;
        },
        'NaYVj': function (x, y) {
            return x <= y;
        },
        'hgBKK': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'xEkDE': 'Yes'
    };
    while (n = kwRSuJ['IHnlx'](scan)) {
        kwRSuJ['hgBKK'](rep, n, function (i) {
            x[i] = [
                kwRSuJ['IHnlx'](scan),
                scan()
            ];
        });
        x['sort'](function (a, b) {
            return kwRSuJ['cTigR'](a[0x1], b[0x1]);
        });
        var ans = !![];
        var w = 0x0;
        kwRSuJ['hgBKK'](rep, n, function (i) {
            w += x[i][0x0];
            ans = kwRSuJ['NaYVj'](w, x[i][0x1]) && ans;
        });
        print(ans ? kwRSuJ['xEkDE'] : 'No');
    }
}
function rep(a, b, c) {
    var lODHiE = {
        'XvonN': function (x, y) {
            return x < y;
        }
    };
    if (c === undefined) {
        c = b;
        b = a;
        a = 0x0;
    }
    for (var i = a; lODHiE['XvonN'](i, b); ++i) {
        if (c(i) === ![]) {
            break;
        }
    }
}
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
var input_index = 0x0;
function scan(type) {
    var PCVjhn = {
        'cuTnu': function (x, y) {
            return x === y;
        },
        'scvOw': 'string'
    };
    if (PCVjhn['cuTnu'](type, PCVjhn['scvOw'])) {
        return input[input_index++];
    } else {
        return +input[input_index++];
    }
}
function print(val) {
    console['log'](val);
}
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var DpDVKf = {
        'uhNcT': function (callee) {
            return callee();
        }
    };
    input = input['trim']()['split'](/\s+/);
    DpDVKf['uhNcT'](main);
});
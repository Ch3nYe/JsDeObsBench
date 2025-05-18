var a0_0x31735c = a0_0x5102;
function a0_0x5102(XttNMb, key) {
    var stringArray = a0_0x1033();
    a0_0x5102 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5102(XttNMb, key);
}
var n;
var x = [];
function main() {
    var _0x200b9f = a0_0x5102;
    while (n = scan()) {
        rep(n, function (i) {
            x[i] = [
                scan(),
                scan()
            ];
        });
        x[_0x200b9f(0x0)](function (a, b) {
            return a[0x1] - b[0x1];
        });
        var ans = !![];
        var w = 0x0;
        rep(n, function (i) {
            var _0x458d32 = a0_0x5102;
            if (_0x458d32(0x1) !== 'cUdRk') {
                console[_0x458d32(0x2)](val);
            } else {
                w += x[i][0x0];
                ans = w <= x[i][0x1] && ans;
            }
        });
        print(ans ? _0x200b9f(0x3) : 'No');
    }
}
function rep(a, b, c) {
    var _0x1b8aea = a0_0x5102;
    if (c === undefined) {
        if (_0x1b8aea(0x4) === _0x1b8aea(0x4)) {
            c = b;
            b = a;
            a = 0x0;
        } else {
            if (type === _0x1b8aea(0x5)) {
                return input[input_index++];
            } else {
                return +input[input_index++];
            }
        }
    }
    for (var i = a; i < b; ++i) {
        if ('RyVUe' === 'RyVUe') {
            if (c(i) === ![]) {
                break;
            }
        } else {
            w += x[i][0x0];
            ans = w <= x[i][0x1] && ans;
        }
    }
}
process[a0_0x31735c(0x6)][a0_0x31735c(0x7)]();
process['stdin']['setEncoding']('utf8');
var input = '';
var input_index = 0x0;
function scan(type) {
    var _0x478648 = a0_0x5102;
    if (type === 'string') {
        if (_0x478648(0x8) === _0x478648(0x9)) {
            return +input[input_index++];
        } else {
            return input[input_index++];
        }
    } else {
        return +input[input_index++];
    }
}
function print(val) {
    var _0x5dc945 = a0_0x5102;
    console[_0x5dc945(0x2)](val);
}
process[a0_0x31735c(0x6)]['on'](a0_0x31735c(0xa), function (chunk) {
    input += chunk;
});
function a0_0x1033() {
    var _0x53c46b = [
        'sort',
        'cUdRk',
        'log',
        'Yes',
        'njPuO',
        'string',
        'stdin',
        'resume',
        'XLXNv',
        'oSeBq',
        'data',
        'end',
        'split'
    ];
    a0_0x1033 = function () {
        return _0x53c46b;
    };
    return a0_0x1033();
}
process['stdin']['on'](a0_0x31735c(0xb), function () {
    var _0x1e1191 = a0_0x5102;
    input = input['trim']()[_0x1e1191(0xc)](/\s+/);
    main();
});
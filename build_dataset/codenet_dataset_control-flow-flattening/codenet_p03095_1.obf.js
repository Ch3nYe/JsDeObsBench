function roop(depth, A, end) {
    var erwwYB = {
        'krgZj': function (x, y) {
            return x < y;
        },
        'xsIqT': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'Nowpu': function (x, y) {
            return x + y;
        },
        'ZpCJs': function (x, y) {
            return x * y;
        }
    };
    var ans = 0x0, i = 0x0;
    if (erwwYB['krgZj'](depth, end)) {
        for (i = depth; i < end; i++) {
            ans += erwwYB['xsIqT'](roop, erwwYB['Nowpu'](i, 0x1), A, end);
        }
        return erwwYB['Nowpu'](A[depth], erwwYB['ZpCJs'](A[depth], ans));
    } else {
        return A[depth];
    }
}
function main(input) {
    var kpHLfw = {
        'KLRQv': function (x, y) {
            return x < y;
        },
        'sXhqM': function (x, y) {
            return x - y;
        },
        'zlMah': function (x, y) {
            return x % y;
        }
    };
    var i, j, A, B, ans = 0x0, count = 0x0;
    var inputs = input['split']('\x0a');
    var arg = Number(inputs[0x0]);
    var str = inputs[0x1]['split']('');
    A = {};
    for (i = 0x0; kpHLfw['KLRQv'](i, arg); ++i) {
        if (A[str[i]]) {
            A[str[i]]++;
        } else {
            A[str[i]] = 0x1;
            count++;
        }
    }
    B = [];
    for (key in A) {
        B['push'](A[key]);
    }
    for (i = 0x0; i < count; ++i) {
        ans += roop(i, B, kpHLfw['sXhqM'](count, 0x1));
    }
    ans = Math['round'](ans);
    console['log'](kpHLfw['zlMah'](ans, 0x3b9aca07));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var ibklik = {
        'uurpa': function (callee, param1) {
            return callee(param1);
        },
        'rfpsI': function (callee, param1) {
            return callee(param1);
        },
        'ncbxp': function (x, y) {
            return x == y;
        },
        'BxZWj': function (x, y) {
            return x + y;
        },
        'pombS': function (x, y) {
            return x == y;
        },
        'tfmuf': function (x, y) {
            return x - y;
        },
        'JypIj': function (x, y) {
            return x * y;
        },
        'JoZQB': function (x, y) {
            return x / y;
        },
        'dYLaA': function (x, y) {
            return x < y;
        },
        'lthpl': function (callee, param1) {
            return callee(param1);
        },
        'YJdFH': function (x, y) {
            return x !== y;
        }
    };
    var input = chunk['split']('\x0a');
    var output = '';
    for (var i = 0x0; ibklik['dYLaA'](i, input['length']); i++) {
        var r = ibklik['lthpl'](calc, input[i]);
        if (ibklik['YJdFH'](r, ![])) {
            console['log'](r);
        }
    }
    function calc(input) {
        var nums = input['split']('\x20');
        nums[0x0] = ibklik['uurpa'](Number, nums[0x0]);
        nums[0x2] = ibklik['rfpsI'](Number, nums[0x2]);
        if (ibklik['ncbxp'](nums[0x1], '+')) {
            return ibklik['BxZWj'](nums[0x0], nums[0x2]);
        } else if (ibklik['pombS'](nums[0x1], '-')) {
            return ibklik['tfmuf'](nums[0x0], nums[0x2]);
        } else if (nums[0x1] == '*') {
            return ibklik['JypIj'](nums[0x0], nums[0x2]);
        } else if (ibklik['pombS'](nums[0x1], '/')) {
            return ibklik['JoZQB'](nums[0x0], nums[0x2]);
        } else if (ibklik['ncbxp'](nums[0x1], '?')) {
            return ![];
        }
    }
});
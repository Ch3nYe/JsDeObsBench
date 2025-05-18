function Main(input) {
    var gjUPVZ = {
        'TaZQp': function (x, y) {
            return x < y;
        },
        'majhg': function (x, y) {
            return x - y;
        },
        'gahMs': function (x, y) {
            return x + y;
        },
        'xIhDU': function (x, y) {
            return x - y;
        },
        'KeZNd': function (x, y) {
            return x * y;
        },
        'PzbPc': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'UruQS': function (x, y) {
            return x > y;
        },
        'yCrke': function (callee, param1) {
            return callee(param1);
        }
    };
    input = input['split']('\x0a');
    tmp = input[0x1]['split']('\x20');
    var N = parseInt(input[0x0], 0xa);
    var array_N = new Array(gjUPVZ['xIhDU'](gjUPVZ['KeZNd'](0x2, N), 0x1));
    for (var i = 0x0; gjUPVZ['TaZQp'](i, array_N['length']); i++) {
        array_N[i] = gjUPVZ['PzbPc'](parseInt, tmp[i], 0xa);
    }
    function getArrayNext(array_i) {
        var oksbGB = {
            'gGsxp': function (x, y) {
                return gjUPVZ['TaZQp'](x, y);
            }
        };
        array_i_next = new Array(gjUPVZ['majhg'](array_i['length'], 0x2));
        for (var j = 0x0; gjUPVZ['TaZQp'](j, array_i_next['length']); j++) {
            var small_array = array_i['slice'](j, gjUPVZ['gahMs'](j, 0x3));
            array_i_next[j] = small_array['sort'](function (a, b) {
                return oksbGB['gGsxp'](a, b) ? -0x1 : 0x1;
            })[0x1];
        }
        return array_i_next;
    }
    var array_i = array_N;
    while (gjUPVZ['UruQS'](array_i['length'], 0x1)) {
        array_i = gjUPVZ['yCrke'](getArrayNext, array_i);
    }
    console['log'](array_i[0x0]);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
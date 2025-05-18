function bubbleSort(A) {
    var nbKJEh = {
        'EHCaV': function (x, y) {
            return x == y;
        },
        'Bvotk': function (x, y) {
            return x - y;
        },
        'zrCzg': function (x, y) {
            return x >= y;
        },
        'eRrXd': function (x, y) {
            return x < y;
        }
    };
    var N = A['length'];
    var flag = 0x1;
    var i = 0x0;
    var cnt = 0x0;
    while (nbKJEh['EHCaV'](flag, 0x1)) {
        flag = 0x0;
        for (var j = nbKJEh['Bvotk'](N, 0x1); nbKJEh['zrCzg'](j, i + 0x1); j--) {
            if (nbKJEh['eRrXd'](A[j], A[j - 0x1])) {
                var m = A[j];
                A[j] = A[nbKJEh['Bvotk'](j, 0x1)];
                A[nbKJEh['Bvotk'](j, 0x1)] = m;
                flag = 0x1;
                cnt++;
            }
        }
        i++;
    }
    return [
        A,
        cnt
    ];
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['shift']();
var arr = Arr[0x0]['split']('\x20')['map'](Number);
var result = bubbleSort(arr);
console['log'](result[0x0]['join']('\x20'));
console['log'](result[0x1]);
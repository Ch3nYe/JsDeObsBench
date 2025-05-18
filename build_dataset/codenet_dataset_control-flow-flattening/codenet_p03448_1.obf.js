function main(input) {
    const ToLeSD = {
        'DgBFx': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'lsfYo': function (x, y) {
            return x <= y;
        },
        'ZHBub': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'BsGik': function (x, y) {
            return x <= y;
        },
        'NctTr': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'xHQUc': function (x, y) {
            return x <= y;
        },
        'ALiCm': function (x, y) {
            return x == y;
        },
        'rzfZB': function (x, y) {
            return x + y;
        },
        'gYZpz': function (x, y) {
            return x * y;
        },
        'RCilm': function (x, y) {
            return x * y;
        }
    };
    const input_array = input['split']('\x0a');
    const coins_count = input_array['slice'](0x0, 0x3);
    const desired_sum = ToLeSD['DgBFx'](parseInt, input_array['slice'](-0x1), 0xa);
    var answer = 0x0;
    for (i = 0x0; ToLeSD['lsfYo'](i, ToLeSD['ZHBub'](parseInt, coins_count[0x0], 0xa)); i++) {
        for (j = 0x0; ToLeSD['BsGik'](j, ToLeSD['NctTr'](parseInt, coins_count[0x1], 0xa)); j++) {
            for (k = 0x0; ToLeSD['xHQUc'](k, parseInt(coins_count[0x2], 0xa)); k++) {
                if (ToLeSD['ALiCm'](ToLeSD['rzfZB'](ToLeSD['rzfZB'](ToLeSD['gYZpz'](0x1f4, i), 0x64 * j), ToLeSD['RCilm'](0x32, k)), desired_sum)) {
                    answer++;
                }
            }
        }
    }
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
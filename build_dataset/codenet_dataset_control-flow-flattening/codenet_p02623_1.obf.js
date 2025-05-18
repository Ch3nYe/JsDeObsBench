function compareFunc(a, b) {
    const BIgYbs = {
        'doMBy': function (x, y) {
            return x - y;
        }
    };
    return BIgYbs['doMBy'](a, b);
}
function main(input) {
    const SaBclW = {
        'Gprfw': function (x, y) {
            return x < y;
        },
        'Ltscd': function (x, y) {
            return x >= y;
        },
        'gLdkD': function (x, y) {
            return x * y;
        }
    };
    let args = input['split'](/\n/);
    let books = [
        ...args[0x1]['split'](/\s/),
        ...args[0x2]['split'](/\s/)
    ];
    let time = args[0x0]['split'](/\s/)[0x2];
    let result = 0x0;
    books['sort'](compareFunc);
    for (let i = 0x0; SaBclW['Gprfw'](i, books['length']); i++) {
        if (SaBclW['Ltscd'](time, SaBclW['gLdkD'](books[i], 0x1))) {
            time -= books[i];
            result++;
        }
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
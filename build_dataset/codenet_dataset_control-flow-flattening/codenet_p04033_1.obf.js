const main = input => {
    const VlvJyb = {
        'kkvPi': function (x, y) {
            return x <= y;
        },
        'HikeX': 'Zero',
        'cmZgd': function (x, y) {
            return x % y;
        },
        'VsYMD': function (x, y) {
            return x - y;
        },
        'ZfUen': 'Negative'
    };
    const data = input['split'](/\n|\s/)['map'](a => parseInt(a, 0xa));
    const a = data[0x0];
    const b = data[0x1];
    if (a <= 0x0 && VlvJyb['kkvPi'](0x0, b)) {
        return VlvJyb['HikeX'];
    }
    if (VlvJyb['cmZgd'](VlvJyb['VsYMD'](b, a), 0x2) || a > 0x0) {
        return 'Positive';
    } else {
        return VlvJyb['ZfUen'];
    }
};
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
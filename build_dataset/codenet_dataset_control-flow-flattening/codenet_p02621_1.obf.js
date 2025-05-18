const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
(input => {
    const mQPdko = {
        'obCOQ': function (x, y) {
            return x + y;
        },
        'yfJtK': function (x, y) {
            return x * y;
        },
        'xgBUd': function (x, y) {
            return x * y;
        }
    };
    const a = input - 0x0;
    console['log'](mQPdko['obCOQ'](a + mQPdko['yfJtK'](a, a), mQPdko['yfJtK'](mQPdko['xgBUd'](a, a), a)));
})(input);
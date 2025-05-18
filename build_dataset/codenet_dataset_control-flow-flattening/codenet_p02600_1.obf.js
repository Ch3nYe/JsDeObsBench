function main(input) {
    var nknBef = {
        'zdlkt': function (x, y) {
            return x / y;
        }
    };
    console['log'](0xa - Math['floor'](nknBef['zdlkt'](input, 0xc8)));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
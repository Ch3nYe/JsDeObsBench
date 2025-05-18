function main(input) {
    var bKVwYv = {
        'ZlPkv': function (callee, param1) {
            return callee(param1);
        }
    };
    var x = 'x';
    var output = bKVwYv['ZlPkv'](Array, input['length'])['fill'](x);
    console['log'](output['join'](''));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
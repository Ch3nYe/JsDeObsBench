console['log'](require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\s/)['sort'](function (a, b) {
    return b - a;
})['join']('\x20'));
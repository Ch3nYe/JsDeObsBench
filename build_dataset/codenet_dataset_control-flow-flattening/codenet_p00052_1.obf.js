require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a')['map'](function (i) {
    j = +i, s = 0x0;
    if (j) {
        while (j = ~~(j / 0x5))
            s += j;
        console['log'](s);
    }
});
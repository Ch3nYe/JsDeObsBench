for (w = x = y = z = 0x0, i = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\s|,/), c = j = -0x1; c = i[j += 0x2]; n = '\x0a')
    c == 'A' ? w++ : c == 'B' ? x++ : c == 'O' ? z++ : y++;
console['log'](w + n + x + n + y + n + z);
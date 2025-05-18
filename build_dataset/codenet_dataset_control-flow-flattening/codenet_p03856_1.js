'use strict';

var fs = require('fs');

var input = Buffer.alloc(0x10000);
var length = fs.readSync(0, input, 0, 0x10000);

var text = input.toString().slice(0, length).trim();
var dp = Array(text.length + 1).fill(false);
dp[0] = true;

for (var index = 5; index <= text.length; index++) {
    if (dp[index - 5] === true && text.slice(index - 5, index) === 'dream') {
        dp[index] = true;
        continue;
    }

    if (dp[index - 7] === true && text.slice(index - 7, index) === 'dreamer') {
        dp[index] = true;
        continue;
    }

    if (dp[index - 5] === true && text.slice(index - 5, index) === 'erase') {
        dp[index] = true;
        continue;
    }

    if (dp[index - 6] === true && text.slice(index - 6, index) === 'eraser') {
        dp[index] = true;
        continue;
    }
}

console.log(dp[text.length] ? 'YES' : 'NO');
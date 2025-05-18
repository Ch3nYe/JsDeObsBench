"use strict";

const is_palindrome = s => {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] !== s[n - i - 1]) return false;
    }

    return true;
}

const main = (input) => {
    const spi = input.split('\n');
    const s = spi[0];
    const n = s.length;

    if (is_palindrome(s)
        && is_palindrome(s.substring(0, (n-1)/2))
        && is_palindrome(s.substr((n+3)/2-1)))
        console.log("Yes");
    else
        console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));

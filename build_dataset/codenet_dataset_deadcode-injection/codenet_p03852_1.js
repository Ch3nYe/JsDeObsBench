function Main(input) {
	c = input;
	const vowel = 'aeiou';
  	console.log(vowel.indexOf(c)!==-1 ? "vowel" : "consonant");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
function Main(input)
{
	input = ""+input+"";
	input = input.substr(input.length - 1, 1);
	var d = "";

	if (input == 2 || input == 4 || input == 5 ||input == 7 ||input == 9 )
	{
		d = "hon";
	}

	if (input == 0 || input == 1 || input == 6 ||input == 8)
	{
		d = "pon";
	}

	if (input == 3 )
	{
		d = "bon";
	}

	console.log(d);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
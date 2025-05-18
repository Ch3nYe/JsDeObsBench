function Main(input){
  input = input.split(' ');
  var a = String(input[0]);
  var b = String(input[1]);

  if( a === 'H' && b === 'H' || a === 'D' && b === 'D') {
      console.log('H');
  } else {
    console.log('D');


}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
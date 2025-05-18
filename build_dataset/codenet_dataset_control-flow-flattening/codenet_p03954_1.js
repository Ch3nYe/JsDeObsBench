function Main(input) {
	input = input.split("\n");
	tmp = input[1].split(" ");

	var N = parseInt(input[0], 10);
    var array_N = new Array(2*N-1);

    for(var i=0;i< array_N.length;i++){
        array_N[i] = parseInt(tmp[i],10);
    }

    function getArrayNext(array_i){
        array_i_next = new Array(array_i.length-2);
        for(var j=0;j<array_i_next.length;j++){
            var small_array = array_i.slice(j,j+3);
            array_i_next[j] = small_array.sort(
              function(a,b){
                return (a < b ? -1 : 1);
              }
            )[1];
        }
        return array_i_next;
    }
    var array_i = array_N;
    while(array_i.length > 1){

        array_i = getArrayNext(array_i);
    }
	console.log(array_i[0]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));

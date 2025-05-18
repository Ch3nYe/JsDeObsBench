    // inputに入力データ全体が入る
    function Main(input) {
    	input = input.split("\n");

      var N = parseInt(input[0], 10);
      
      if (parseInt(N / 10) === 0){ // 1桁の時
        console.log('Yes');
        return;  
      }

      var Sum = 0;
      var Mod = N; // 余り
      for (var i = 100000000; i >= 10; i = i / 10){
        Sum += parseInt(Mod / i);
        Mod = Mod % i;
        // console.log('%d', i);
        // console.log('%d', Sum);
        // console.log('%d', Mod);
        // console.log('--');        
      }
      Sum += Mod;
      // console.log('%d', Sum);
      // console.log('%d', Mod);
      // console.log('--');   

      if( N % Sum === 0){
      	console.log('Yes');
      }else{
        console.log('No');
      }
    
    }

    Main(require("fs").readFileSync("/dev/stdin", "utf8"));


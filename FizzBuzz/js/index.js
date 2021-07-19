function fizzBuzz(n) {
  let i = 1;
   while (i < n+1) {
      if(i % 3 === 0 && i % 5 === 0){
         console.log(i,"fizzbuzz")
      } else if(i % 3 === 0){
         console.log(i,'fizz')
      } else if( i % 5 === 0 ){
         console.log(i, "buzz");
      } else{
         console.log(i);
      }
      i++
  }
}

fizzBuzz(100);
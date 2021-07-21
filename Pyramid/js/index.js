function pyramid(n) {
  const midPoint = Math.floor((2 * n -1)/2)
  for (let row = 0; row < n; row++) {
      let level = '';
      for (let column = 0; column < n * 2  - 1; column++) {
        
          if (midPoint - row <= column && midPoint + row >= column) {
            level += "#"; 
          } else {
            level += " ";
          }
      }
      console.log(level)
  }
}


function pyramid2(n, row = 0, level = '') {
  const midPoint = Math.floor((2 * n -1)/2);
  if(row === n) return
  if(2 * n -1 === level.length ){
    console.log(level)
    return pyramid2(n, row + 1);
  }
  if(midPoint - row <= level.length && midPoint + row >= level.length){
    level += "#";
  } else {
    level += " ";
  }
  pyramid2(n, row, level)
}
  

pyramid2(3)
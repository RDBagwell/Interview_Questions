function steps(n) {
  for (let row = 0; row < n; row++) {
      let step = '';
      for (let column = 0; column < n; column++) {
          if (row >= column) {
            step += "#"; 
          } else {
            step += " ";
          }
      }
      console.log(step)
  }
}

function stepsB(n, row = 0, step = '') {
    if(row === n) return;
    if (n === step.length) {
        console.log(step);
        return stepsB(n, row + 1)
    }
    if(step.length <= row){
        step += "1";
    } else {
        step += "0";
    }
    stepsB(n, row, step)
}

stepsB(10)
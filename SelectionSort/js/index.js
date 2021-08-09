function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]){
        indexOfMin = j
      }
    }
    if(arr[indexOfMin] < arr[i]){
      let temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }
   return arr;
 }

 function selectionSortB(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[lowest]){
        lowest = j;
      }
    }
    if(i !== lowest){
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

 
 
 console.log(selectionSortB([3,1,2,8,5,4,6,7,10,9]));
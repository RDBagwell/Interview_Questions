function merge(left, right) {
  const resualts = [];
  while (left.length && right.length) {
    if(left[0] < right[0]){
      resualts.push(left.shift());
    } else {
      resualts.push(right.shift());
    }
  }
  return [...resualts, ...left,  ...right];
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left =  mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([23,36,410,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
// [[1,2], [3,4], [5]]
function chunk(array, size) {
    const chunkMerge = [];
    for (const chunks of array) {
      let last = chunkMerge[chunkMerge.length -1];
      if(!last || last.length === size){
         chunkMerge.push([chunks]);
      } else {
         last.push(chunks)
      }
    }
    return chunkMerge
}

function chunk2(array, size) {
   const chunkMerge = [];
   let i = 0
   while (i < array.length) {
      chunkMerge.push(array.slice(i, i + size));
      i += size;
   }
   return chunkMerge;
}

chunk2([1,2,3,4,5], 2);
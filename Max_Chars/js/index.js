function maxChar(str) {
   const chars = {};
   let max = 0;
   let character = '';
   for (let char of str) {
      (!chars[char]) ? chars[char] = 1 : chars[char] ++;
   } 
   for (const key in chars) {
      if(chars[key] > max){
         max = chars[key];
         character = key;
      }
   }
   return character
}

console.log(maxChar("Hello There!"));
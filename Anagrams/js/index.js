function anagrams(stringA, stringB) {
   const charsA = {};
   const charsB = {};

   let newStringA  = stringA.replace(/[^\w]/g, '').toLowerCase();
   let newStringB  = stringB.replace(/[^\w]/g, '').toLowerCase();

   if(newStringA.length !== newStringB.length){
      return false;
   }

   for (let charA of newStringA) {
      (!charsA[charA]) ? charsA[charA] = 1 : charsA[charA] ++;
   }

   for (let charB of newStringB) {
      (!charsB[charB]) ? charsB[charB] = 1 : charsB[charB] ++;
   }

   for (const key in charsA) {
      if(charsA[key] !== charsB[key]){
         return false
      }
   }
   return true;

}


console.log(anagrams('Whoa! Hi!', 'Hi! WHOA!'));
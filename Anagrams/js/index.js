function anagrams(stringA, stringB) {
   const charMapA = setCharMap(stringA);
   const charMapB = setCharMap(stringB);
   if(stripString(stringA).length !== stripString(stringB).length) return false;
   for (const key in charMapA) {
      if(charMapA[key] !== charMapB[key]){
         return false
      }
   }
   return true;
}

function anagrams2(stringA, stringB) {
   return (cleanString(stringA) === cleanString(stringB));
}


function setCharMap(str) {
   const charMap = {};
   for (const char of stripString(str)) {
      (!charMap[char]) ? charMap[char] = 1 : charMap[char]++;
   }
   return charMap;
}

function stripString(str) {
   return str.replace(/[^\w]/g, '').toLowerCase();
}

function cleanString(str) {
   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
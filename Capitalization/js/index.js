function capitalization(str) {
   const capString = [];
   let newWord = "";
   for (const word of str.split(" ")) {
      const firstLetter = word[0].toLocaleUpperCase();
      const endWord = word.slice(1);
      newWord = firstLetter + endWord;
      capString.push(newWord);
   }
   return capString.join(" ");
}

function capitalization2(str) {
   const capString = [];
   for (const word of str.split(" ")) {
      capString.push(word[0].toLocaleUpperCase() + word.slice(1))
   }
   return capString.join(" ");
}

function capitalization3(str) {
   let resault = str[0].toLocaleUpperCase();
   for (let i = 1; i < str.length; i++) {
      if(str[i - 1] === ' ')
      {
         resault += str[i].toLocaleUpperCase();
      } else {
         resault += str[i]
      }
   }
   return resault;
}

console.log(capitalization3('a lazy fox'));
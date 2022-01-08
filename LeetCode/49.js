//49. Group Anagrams

// var groupAnagrams = function (strs) {
//   let obj = {};
//   for (let str of strs) {
//     console.log(str.split(''));
//     let letters = str.split('').sort().join('');
//     obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
//   }
//   return Object.values(obj);
// };

const groupAnagrams = strs => {
  const wordGroup = {};

  strs.forEach(str => {
    const word = str.split('').sort().join('');
    wordGroup[word] ? wordGroup[word].push(str) : (wordGroup[word] = [str]);
  });

  return Object.values(wordGroup);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));

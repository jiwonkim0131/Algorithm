const compareDiff = (word1, word2) => {
  let count = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) count += 1;
    if (count > 1) return false;
  }
  return true;
};

const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  const diffCheck = Array.from({ length: wordList.length }, () => 0);
  const wordQueue = [[beginWord, 1]];

  while (wordQueue.length) {
    const [tmpWord, level] = wordQueue.shift();

    if (tmpWord === endWord) return level;

    for (let i = 0; i < wordList.length; i++) {
      if (diffCheck[i] === 0 && compareDiff(tmpWord, wordList[i])) {
        diffCheck[i] = 1;
        wordQueue.push([wordList[i], level + 1]);
      }
    }
  }
  return 0;
};

const beginWord = 'hit';
const endWord = 'cog';
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(ladderLength(beginWord, endWord, wordList));

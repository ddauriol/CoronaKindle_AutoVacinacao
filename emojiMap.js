/*
 Mapa das palavras a serem substituidas
*/

let dictionary = new Map();
dictionary.set('coronavirus', '💉');
dictionary.set('coronavírus', '💉');
dictionary.set('corona virus', '💉');
dictionary.set('corona vírus', '💉');
dictionary.set('covid-19', '💉');
dictionary.set('covid 19', '💉');
dictionary.set('covid', '💉');

let tempArray = Array.from(dictionary);
tempArray.sort((pair1, pair2) => {
  const firstWord = pair1[0];
  const secondWord = pair2[0];

  if (firstWord.length > secondWord.length) {
    return -1;
  }
  if (secondWord.length > firstWord.length) {
    return 1;
  }
  return 0;
});

let sortedEmojiMap = new Map(tempArray);

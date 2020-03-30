/*
 Este arquivo irácriar um mapa para substituição das palavras.
*/

// Sentenças a serem localizadas e substituidas
let dictionary = new Map();
dictionary.set('coronavirus', '💉');
dictionary.set('Coronavirus', '💉');
dictionary.set('CORONAVIRUS', '💉');
dictionary.set('coronavírus', '💉');
dictionary.set('Coronavírus', '💉');
dictionary.set('CORONAVÍRUS', '💉');
dictionary.set('corona virus', '💉');
dictionary.set('Corona virus', '💉');
dictionary.set('CORONA VIRUS', '💉');
dictionary.set('corona vírus', '💉');
dictionary.set('Corona vírus', '💉');
dictionary.set('Corona Vírus', '💉');
dictionary.set('CORONA VÍRUS', '💉');
dictionary.set('covid-19', '💉');
dictionary.set('Covid-19', '💉');
dictionary.set('COVID-19', '💉');
dictionary.set('covid 19', '💉');
dictionary.set('Covid 19', '💉');
dictionary.set('COVID 19', '💉');
dictionary.set('covid', '💉');
dictionary.set('Covid', '💉');
dictionary.set('COVID', '💉');

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
const popularQuotes = [
  "Action is eloquence. - William Shakespeare",
  "Between saying and doing many a pair of shoes is worn out. - Italian proverb",
  "Immature love says- I love you because I need you. Mature love says- I need you because I love you. - Erich Fromm",
  "Money can't buy friends, but you can get a better class of enemy. - Spike Milligan",
  "A friend in need is a friend indeed. - Susan Ferrier",
  "When love and skill work together expect a masterpiece. - John Ruskin"
];

let quote = () => {
  let randomNumber = Math.floor(Math.random()*popularQuotes.length);
  document.getElementById('displayQuote').innerHTML = popularQuotes[randomNumber];
} 
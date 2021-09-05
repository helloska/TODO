const quotes = [
  {
    quote: "Change the way you look at things and the things you look at change",
    author: "Wayne Dyer",
  },

  {
    quote: "If you run you stand a chance of losing, but if you don’t run you’ve already lost.",
    author: "Barack Obama",
  },
  
  {
    quote: "I cannot say whether things will get better if we change, what I can say they must change if they are to get better.",
    author: "Georg C. Lichtenberg",
  },

  {
    quote: "Courage doesn’t always roar. Sometimes courage is the little voice at the end of the day that says “I will try again tomorrow.”",
    author: "Mary Anne",
  },

  {
    quote: "When in doubt, choose change.",
    author: "Lily Leung",
  },

  {
    quote: "You’re braver then you believe, and stronger than you seem, and smarter than you think.",
    author: "A.A Milne",
  },

  {
    quote: "In any given moment we have two options. to step forward into growth or step back into safety.",
    author: "Abraham Maslow",
  },

  {
    quote: "Aim for the moon. If you miss, you may hit a star",
    author: "W. Clement Stone",
  },

  {
    quote: "Never look back unless you are planning to go that way",
    author: "Henry David Thoreau",
  },

  {
    quote: "Fatigue is the best pillow",
    author: "Benjamin Franklin",
  }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
var quote;

var quotes = [
    quote = {
        sentence: '“Be yourself; everyone else is already taken.”',
        author: "― Oscar Wilde"
    },
    quote = {
        sentence: `“I\'m selfish, impatient and a little insecure. I make mistakes,
        I am out of control and at times hard to handle. But if you can\'t handle me at my worst,
        then you sure as hell don\'t deserve me at my best.”`,
        author: '― Marilyn Monroe'
    },
    quote = {
        sentence: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author: "― Albert Einstein"
    },
    quote = {
        sentence: `“So many books, so little time.”`,
        author: "― Frank Zappa"
    },
    quote = {
        sentence: `“A room without books is like a body without a soul.”`,
        author: "― Marcus Tullius Cicero"
    },
    quote = {
        sentence: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        author: "― Bernard M. Baruch"
    },
    quote = {
        sentence: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        author: "― Dr. Seuss"
    },
    quote = {
        sentence: `“You only live once, but if you do it right, once is enough.”`,
        author: "― Mae West"
    },
    quote = {
        sentence: `“Be the change that you wish to see in the world.”`,
        author: "― Mahatma Gandhi"
    },
    quote = {
        sentence: `“In three words I can sum up everything I've learned about life: it goes on.”`,
        author: "― Robert Frost"
    }
]

var lastranNumber;
function dispayQuote() {
    var list;
    var ranNumber;
    ranNumber = Math.floor(Math.random() * quotes.length);
    if (lastranNumber !== ranNumber) {
        list = `<p class="mb-2">${quotes[ranNumber].sentence}</p>
        <span class="fw-bold">${quotes[ranNumber].author}</span>`;
        document.getElementById("quote").innerHTML = list;
        lastranNumber = ranNumber;
    } else {
        dispayQuote();
    }
}

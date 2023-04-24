
const Newquote = document.querySelector("#Quote-New-btn");
const Quote = document.querySelector('#Quote-text-p');
const Person = document.querySelector('#Quote-Person-p');

var QuoteHash = [
    {
        "quote":  `Many of life's failure are people who did not realize how close they were to success when they gave up.`,
        "speaker": "Thomas A. Edison"
    },

    {
        "quote":  'Life is not a problem to be solved, but a reality to be experienced.',
        "speaker": "Soren Kierkegaard"
    },

    {
        "quote": 'The way to get started is to quit talking and begin doing.',
        "speaker":'Walt Disney'
    },

    {
        "quote": 'The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart.',
        "speaker":'Helen Keller'
    },

    {
        "quote":'It is during our darkest moments that we must focus to see the light.',
        "speaker":'Aristotle'
    },

    {
        "quote":'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        "speaker":'Ralph Waldo'
    },

    {
        "quote":"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        "speaker":'Robert Louis Stevenson'
    },

    {
        "quote":"The future belongs to those who believe in the beauty of their dreams.",
        "speaker":'Eleanor Roosevelt'
    },

    {
        "quote":"In the end, it's not the years in your life that count. It's the life in your years.",
        "speaker":'Abraham Lincoln'
    }
];

function random_quote_generator(){
    var number = Math.random()*QuoteHash.length;
    return QuoteHash[Math.floor(number)];
}

Newquote.addEventListener("click", function() {
    var Quote_data = random_quote_generator();
    Quote.innerText = Quote_data['quote'];
    Person.innerText = Quote_data['speaker'];
    
})

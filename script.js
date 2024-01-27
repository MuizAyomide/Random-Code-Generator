
var quoteObj = [{
                  quotes:'The greatest glory in living lies not in never falling, but in rising every time we fall',
                  author:'Nelson Mandela',
                  url: "MQuoteImages/pic01.jpg"
                },
                {
                  quotes:'The way to get started is to quit talking and begin doing.',
                  author:'Walt Disney',
                  url:'MQuoteImages/pic02.jpg'
                },
                {
                    quotes:'The future belongs to those who believe in the beauty of their dreams.',
                    author:'Eleanor Roosevelt',
                    url:'MQuoteImages/pic03.jpg'
                },  
                {
                    quotes:'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
                    author:'James Cameron',
                    url:'MQuoteImages/pic04.jpg'
                },
                {
                    quotes:'You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.',
                    author:'John Lennon',
                    url:'MQuoteImages/pic05.jpg'
                },
                {
                    quotes:'Spread love everywhere you go. Let no one ever come to you without leaving happier',
                    author:'Mother Teresa',
                    url:'MQuoteImages/pic06.jpg'
                },
                {
                    quotes:'The only thing we have to fear is fear itself.',
                    author:'Franklin D. Roosevelt',
                    url:'MQuoteImages/pic07.jpg'
                },
                {
                    quotes:'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
                    author:'Martin Luther King Jr.',
                    url:'MQuoteImages/pic11.jpg'
                },
                {
                    quotes:'Do one thing every day that scares you.',
                    author:'Eleanor Roosevelt',
                    url:'MQuoteImages/pic13.jpg'
                },
                {
                    quotes:'Well done is better than well said.',
                    author:'Benjamin Franklin',
                    url:'MQuoteImages/pic14.jpg'
                },
        ];


        
const quote = document.querySelector('.quote');
const writter = document.querySelector('.author');
const btn = document.querySelector('.btn');
var images = document.getElementById("image");
var container = document.querySelector('.quote-container').inner;

var counter = 0;
function add(){
    counter = counter + 1;
    console.log(counter);
}
var index = quoteObj.findIndex(muiz => muiz.author === 'Benjamin Franklin');
console.log(index);
btn.addEventListener('click', (display) => {
 var count = 0;
 counter += 1;
if (counter <= index){
    quote.innerHTML = quoteObj[counter].quotes;
    writter.innerHTML = quoteObj[counter].author;
    var randomIndex = Math.floor(Math.random() * quoteObj.length);
    var randomImage = quoteObj[randomIndex];
    images.src = randomImage.url;
}
else{
    window.location.href = 'end.html';
}
});

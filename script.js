const button = document.querySelector('button');
const QuoteObj = [{
                  quotes:'The greatest glory in living lies not in never falling, but in rising every time we fall',
                  author:'Nelson Mandela',
                  src:'M.QuoteImages/pic01.png'
                },
                {
                  quotes:'The way to get started is to quit talking and begin doing.',
                  author:'Walt Disney',
                  src:'M.QuoteImages/pic02.png'
                },
                {
                    quotes:'The future belongs to those who believe in the beauty of their dreams.',
                    author:'Eleanor Roosevelt',
                    src:'M.QuoteImages/pic03.png'
                },
                {
                    quotes:'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
                    author:'James Cameron',
                    src:'M.QuoteImages/pic04.png'
                },
                {
                    quotes:'You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one.',
                    author:'John Lennon',
                    src:'M.QuoteImages/pic05.png'
                },
                {
                    quotes:'Spread love everywhere you go. Let no one ever come to you without leaving happier',
                    author:'Mother Teresa',
                    src:'M.QuoteImages/pic06.png'
                },
                {
                    quotes:'The only thing we have to fear is fear itself.',
                    author:'Franklin D. Roosevelt',
                    src:'M.QuoteImages/pic07.png'
                },
                {
                    quotes:'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
                    author:'Martin Luther King Jr.',
                    src:'M.QuoteImages/pic08.png'
                },
                {
                    quotes:'Do one thing every day that scares you.',
                    author:'Eleanor Roosevelt',
                    src:'M.QuoteImages/pic09.png'
                },
                {
                    quotes:'Well done is better than well said.',
                    author:'Benjamin Franklin',
                    src:'M.QuoteImages/pic010.png'
                },
        ];
      
    const quotes = document.querySelector('p');
   button.addEventListener('click', () => {
    console.log(quotes.innerHTML = QuoteObj[1]);
    quotes.innerHTML = QuoteObj[1]
   });


